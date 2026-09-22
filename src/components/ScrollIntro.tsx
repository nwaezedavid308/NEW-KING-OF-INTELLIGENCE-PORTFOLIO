import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause, ChevronDown, Sparkles } from 'lucide-react';

const FRAME_COUNT = 330;
const frameSource = (index: number) =>
  `/frames/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`;

export const ScrollIntro: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentFrameNum, setCurrentFrameNum] = useState<number>(1);
  const [isLoadedFirstFrame, setIsLoadedFirstFrame] = useState<boolean>(false);

  // References for animation state
  const isPlayingRef = useRef<boolean>(true);
  isPlayingRef.current = isPlaying;

  const targetFrameRef = useRef<number>(0);
  const displayedFrameRef = useRef<number>(0);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const loadingQueueRef = useRef<Set<number>>(new Set());
  const activeLoadsCountRef = useRef<number>(0);
  const MAX_CONCURRENT_LOADS = 12;

  const requestDrawRef = useRef<(() => void) | null>(null);

  // Priority frame loader with concurrency throttle
  const scheduleFrameLoad = useCallback((index: number, highPriority = false) => {
    if (index < 0 || index >= FRAME_COUNT) return;
    const frames = framesRef.current;
    if (!frames[index]) {
      frames[index] = new Image();
    }
    const img = frames[index];
    if (img.src) {
      if (img.complete && img.naturalWidth > 0 && index === 0) {
        setIsLoadedFirstFrame(true);
        if (requestDrawRef.current) requestDrawRef.current();
      }
      return;
    }

    if (highPriority || activeLoadsCountRef.current < MAX_CONCURRENT_LOADS) {
      activeLoadsCountRef.current += 1;
      img.decoding = 'async';
      img.onload = () => {
        activeLoadsCountRef.current = Math.max(0, activeLoadsCountRef.current - 1);
        if (index === 0) {
          setIsLoadedFirstFrame(true);
        }
        if (requestDrawRef.current) {
          requestDrawRef.current();
        }
        processNextInQueue();
      };
      img.onerror = () => {
        activeLoadsCountRef.current = Math.max(0, activeLoadsCountRef.current - 1);
        processNextInQueue();
      };
      img.src = frameSource(index);
    } else {
      loadingQueueRef.current.add(index);
    }
  }, []);

  const processNextInQueue = useCallback(() => {
    if (activeLoadsCountRef.current >= MAX_CONCURRENT_LOADS) return;
    const queue = loadingQueueRef.current;
    if (queue.size === 0) return;

    let closestIndex = -1;
    let closestDist = Infinity;
    const currentTarget = Math.round(targetFrameRef.current);

    queue.forEach((idx) => {
      const dist = Math.abs(idx - currentTarget);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = idx;
      }
    });

    if (closestIndex !== -1) {
      queue.delete(closestIndex);
      scheduleFrameLoad(closestIndex, true);
    }
  }, [scheduleFrameLoad]);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const context = canvas.getContext('2d', { alpha: false });
    if (!context) return;

    // Initialize frame array
    if (framesRef.current.length === 0) {
      framesRef.current = Array.from({ length: FRAME_COUNT }, () => new Image());
    }
    const frames = framesRef.current;

    const findLoadedFrame = (targetIndex: number) => {
      const clamped = Math.max(0, Math.min(FRAME_COUNT - 1, targetIndex));
      const img = frames[clamped];
      if (img && img.complete && img.naturalWidth > 0) return clamped;

      for (let offset = 1; offset < FRAME_COUNT; offset += 1) {
        const prev = clamped - offset;
        if (prev >= 0 && frames[prev]?.complete && (frames[prev]?.naturalWidth ?? 0) > 0) return prev;
        const next = clamped + offset;
        if (next < FRAME_COUNT && frames[next]?.complete && (frames[next]?.naturalWidth ?? 0) > 0) return next;
      }
      return -1;
    };

    const drawProceduralVisual = (
      ctx: CanvasRenderingContext2D,
      width: number,
      height: number,
      progress: number,
      frameIdx: number
    ) => {
      // 1. Deep cinematic background with orange radial bloom
      const cx = width / 2;
      const cy = height / 2;
      const baseRadius = Math.min(width, height) * 0.28;

      const bgGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, Math.max(width, height) * 0.7);
      bgGrad.addColorStop(0, '#1c0a02');
      bgGrad.addColorStop(0.35, '#0d0705');
      bgGrad.addColorStop(1, '#050507');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle technical background grid
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 90, 0, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = (cx % gridSize); x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = (cy % gridSize); y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Central glowing radial bloom
      const bloomGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseRadius * 1.5);
      bloomGrad.addColorStop(0, 'rgba(255, 176, 0, 0.22)');
      bloomGrad.addColorStop(0.4, 'rgba(255, 90, 0, 0.12)');
      bloomGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bloomGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // 4. Concentric HUD telemetry rings with tick marks
      const t = frameIdx * 0.02 + progress * Math.PI * 4;
      ctx.save();
      ctx.translate(cx, cy);

      // Ring 1: Outer segmented radar ring
      ctx.strokeStyle = 'rgba(255, 90, 0, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.25, t * 0.4, t * 0.4 + Math.PI * 1.2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.25, t * 0.4 + Math.PI * 1.4, t * 0.4 + Math.PI * 1.85);
      ctx.stroke();

      // Ring 2: Ticked inner ring
      ctx.strokeStyle = 'rgba(255, 176, 0, 0.25)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Tick marks
      const ticks = 36;
      for (let i = 0; i < ticks; i++) {
        const angle = (i / ticks) * Math.PI * 2 - t * 0.2;
        const r1 = baseRadius;
        const r2 = i % 3 === 0 ? baseRadius + 12 : baseRadius + 6;
        ctx.beginPath();
        ctx.moveTo(Math.cos(angle) * r1, Math.sin(angle) * r1);
        ctx.lineTo(Math.cos(angle) * r2, Math.sin(angle) * r2);
        ctx.stroke();
      }

      // Ring 3: Fast counter-rotating reticle
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 12]);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.75, -t * 0.8, -t * 0.8 + Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // 5. 3D Rotating Polyhedral Intelligence Core
      const points = [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
        [0, -1.4, 0], [0, 1.4, 0], [-1.4, 0, 0], [1.4, 0, 0], [0, 0, -1.4], [0, 0, 1.4]
      ];
      const scale = baseRadius * 0.48 * (1 + Math.sin(t * 1.5) * 0.05);

      const rotX = t * 0.6;
      const rotY = t * 0.9;
      const rotZ = t * 0.3;

      const projected = points.map(([px, py, pz]) => {
        // Rotate Y
        let x1 = px * Math.cos(rotY) + pz * Math.sin(rotY);
        let y1 = py;
        let z1 = -px * Math.sin(rotY) + pz * Math.cos(rotY);

        // Rotate X
        let x2 = x1;
        let y2 = y1 * Math.cos(rotX) - z1 * Math.sin(rotX);
        let z2 = y1 * Math.sin(rotX) + z1 * Math.cos(rotX);

        // Perspective
        const fov = 3.5;
        const p = fov / (fov + z2);
        return { x: x2 * scale * p, y: y2 * scale * p, z: z2 };
      });

      // Draw wireframe links
      ctx.strokeStyle = 'rgba(255, 110, 20, 0.45)';
      ctx.lineWidth = 1.2;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = points[i][0] - points[j][0];
          const dy = points[i][1] - points[j][1];
          const dz = points[i][2] - points[j][2];
          const distSq = dx * dx + dy * dy + dz * dz;
          if (distSq < 2.9) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw glowing vertices
      projected.forEach((pt) => {
        ctx.fillStyle = '#ffb000';
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // 6. Center glowing singularity
      const coreGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, 26);
      coreGlow.addColorStop(0, '#ffffff');
      coreGlow.addColorStop(0.3, '#ffb000');
      coreGlow.addColorStop(0.7, '#ff5a00');
      coreGlow.addColorStop(1, 'rgba(255, 90, 0, 0)');
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(0, 0, 26, 0, Math.PI * 2);
      ctx.fill();

      // 7. Ambient floating telemetry data
      ctx.font = '9px monospace';
      ctx.fillStyle = 'rgba(255, 176, 0, 0.7)';
      ctx.fillText(`NIUXVERSE.CORE // FRAME ${String(frameIdx).padStart(3, '0')}`, -baseRadius * 0.9, baseRadius * 0.9);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.fillText(`HUMAN-CENTERED AI // SYNC 100%`, -baseRadius * 0.9, baseRadius * 0.9 + 14);

      ctx.restore();
    };

    const draw = (index: number) => {
      const width = canvas.width;
      const height = canvas.height;
      if (width === 0 || height === 0) return;

      const bestIndex = findLoadedFrame(index);
      if (bestIndex === -1) {
        const progress = targetFrameRef.current / (FRAME_COUNT - 1);
        drawProceduralVisual(context, width, height, progress, index);
        return;
      }

      const img = frames[bestIndex];
      const imgW = img.naturalWidth;
      const imgH = img.naturalHeight;
      if (!imgW || !imgH) {
        const progress = targetFrameRef.current / (FRAME_COUNT - 1);
        drawProceduralVisual(context, width, height, progress, index);
        return;
      }

      const imgRatio = imgW / imgH;
      const canvasRatio = width / height;

      let drawW = width;
      let drawH = height;
      if (canvasRatio > imgRatio) {
        drawH = width / imgRatio;
      } else {
        drawW = height * imgRatio;
      }

      const drawX = (width - drawW) / 2;
      const drawY = (height - drawH) / 2;

      context.fillStyle = '#09090a';
      context.fillRect(0, 0, width, height);
      context.drawImage(img, drawX, drawY, drawW, drawH);
    };

    requestDrawRef.current = () => {
      draw(Math.round(displayedFrameRef.current));
    };

    const sizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      draw(Math.round(displayedFrameRef.current));
    };

    const updateChapterOpacities = (progress: number) => {
      section.style.setProperty('--intro-progress', progress.toFixed(4));
      const op1 = progress < 0.28 ? 1 - Math.max(0, (progress - 0.20) / 0.08) : 0;
      const op2 = progress >= 0.22 && progress <= 0.68
        ? (progress < 0.32 ? (progress - 0.22) / 0.10 : (progress > 0.58 ? 1 - (progress - 0.58) / 0.10 : 1))
        : 0;
      const op3 = progress >= 0.58
        ? Math.min(1, (progress - 0.58) / 0.12)
        : 0;

      section.style.setProperty('--intro-one-opacity', op1.toFixed(3));
      section.style.setProperty('--intro-two-opacity', op2.toFixed(3));
      section.style.setProperty('--intro-three-opacity', op3.toFixed(3));
    };

    const updateFromScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollRange = section.offsetHeight - window.innerHeight;
      const progress = scrollRange > 0 ? Math.max(0, Math.min(1, -rect.top / scrollRange)) : 0;

      // When user is actively scrolling this section, update target frame
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        targetFrameRef.current = progress * (FRAME_COUNT - 1);
        updateChapterOpacities(progress);
      }

      // Preload frames around current target
      const dest = Math.round(targetFrameRef.current);
      for (let offset = -8; offset <= 8; offset += 1) {
        scheduleFrameLoad(dest + offset, true);
      }
    };

    let animationFrame = 0;
    const render = () => {
      const rect = section.getBoundingClientRect();
      const isVisibleOnScreen = rect.bottom > 0 && rect.top < window.innerHeight;

      if (isPlayingRef.current && isVisibleOnScreen) {
        // Autoplay advancement
        targetFrameRef.current = (targetFrameRef.current + 0.85) % FRAME_COUNT;
        displayedFrameRef.current = targetFrameRef.current;

        const progress = targetFrameRef.current / (FRAME_COUNT - 1);
        updateChapterOpacities(progress);

        const dest = Math.round(targetFrameRef.current);
        for (let offset = 0; offset <= 8; offset += 1) {
          scheduleFrameLoad(dest + offset, true);
        }
      } else {
        // Smooth scroll interpolation
        displayedFrameRef.current += (targetFrameRef.current - displayedFrameRef.current) * 0.25;
        if (Math.abs(targetFrameRef.current - displayedFrameRef.current) < 0.02) {
          displayedFrameRef.current = targetFrameRef.current;
        }
      }

      const frameIdx = Math.round(displayedFrameRef.current);
      setCurrentFrameNum(frameIdx + 1);
      draw(frameIdx);

      animationFrame = requestAnimationFrame(render);
    };

    // 1. Immediately preload the first batch of frames for instant start
    for (let index = 0; index < 24; index += 1) {
      scheduleFrameLoad(index, true);
    }

    // 2. Preload landmarks every 10 frames
    for (let index = 30; index < FRAME_COUNT; index += 10) {
      scheduleFrameLoad(index, false);
    }
    scheduleFrameLoad(FRAME_COUNT - 1, false);

    sizeCanvas();
    updateChapterOpacities(0);
    render();

    window.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('touchmove', updateFromScroll, { passive: true });
    window.addEventListener('resize', sizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', updateFromScroll);
      window.removeEventListener('touchmove', updateFromScroll);
      window.removeEventListener('resize', sizeCanvas);
    };
  }, [scheduleFrameLoad]);

  const scrollToHero = () => {
    const el = document.getElementById('hero');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section ref={sectionRef} id="scroll-intro" className="scroll-intro" aria-label="King of Intelligence visual introduction">
      <div className="scroll-intro__stage">
        <canvas ref={canvasRef} className="scroll-intro__canvas" aria-hidden="true" />
        <div className="scroll-intro__scrim" aria-hidden="true" />

        {/* Chapter 1: Introduction */}
        <div className="intro-chapter intro-chapter--one">
          <p className="intro-kicker flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
            <span>Human-centered designer · Intelligent systems architect</span>
          </p>
          <h1>Nwaeze<br />David</h1>
          <p className="intro-note">I design technology that people trust.</p>
        </div>

        {/* Chapter 2: Philosophy */}
        <div className="intro-chapter intro-chapter--two">
          <p className="intro-kicker">The work behind the title</p>
          <h2>Intelligence<br /><span>needs a human story.</span></h2>
          <p className="intro-note">Healthcare empathy. Futuristic systems. Radical clarity.</p>
        </div>

        {/* Chapter 3: Climax */}
        <div className="intro-chapter intro-chapter--three">
          <p className="intro-kicker">Enter THE NIUXVERSE</p>
          <h2>The King of<br /><span>Intelligence.</span></h2>
          <p className="intro-note">A portfolio for the age of intelligence.</p>
        </div>

        {/* Interactive Controls & Progress Bar */}
        <div className="intro-progress" aria-hidden="true">
          <div className="flex items-center justify-between pb-1 text-[10px] tracking-[0.2em] font-mono">
            <span>FRAME {String(currentFrameNum).padStart(3, '0')} / {FRAME_COUNT}</span>
            <span className="text-orange-500 font-bold">{isPlaying ? 'CINEMATIC MOTION' : 'PAUSED'}</span>
          </div>
          <i />
        </div>

        {/* Floating Quick Action Bar */}
        <div className="absolute top-20 right-4 sm:right-8 z-20 flex items-center gap-2">
          <button
            onClick={handleTogglePlay}
            aria-label={isPlaying ? "Pause visual animation" : "Play visual animation"}
            className="flex items-center gap-2 px-3.5 py-2 bg-black/85 backdrop-blur-md border border-orange-500 text-white text-[10px] uppercase font-mono tracking-widest hover:bg-orange-500 hover:text-black transition-all cursor-pointer shadow-lg shadow-orange-500/20"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-orange-400 group-hover:text-black" />
                <span>Pause Motion</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-orange-400" />
                <span>Play Motion</span>
              </>
            )}
          </button>

          <button
            onClick={scrollToHero}
            aria-label="Skip to portfolio overview"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-black/85 backdrop-blur-md border border-white/40 text-white text-[10px] uppercase font-mono tracking-widest hover:border-white hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            <span>Skip</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
