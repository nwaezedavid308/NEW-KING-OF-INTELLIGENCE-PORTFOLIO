import { Belief, QuestionPrinciple, MissionPillar, HistoricalEra, DesignProject } from '../types';

export const PERSONAL_BIO = {
  name: "Nwaeze David",
  title: "The King of Intelligence",
  role: "Human-Centered Designer & Intelligent Systems Architect",
  qualifications: [
    "Designer",
    "Pharmacist",
    "MSc Public Health (in view)",
    "Founder, Niuxverse Solutions",
    "Founder, School of Intelligenze",
    "Co-founder, SeedIntelligenze (AI-Powered Marketing Agency)"
  ],
  location: "Global / Age of Intelligence",
  headline: "My name is Nwaeze David and I am the King of Intelligence.",
  niuxverseDefinition: "I designed THE NIUXVERSE — a world of Geniuxes where we leverage the power of technology to solve real problems and impact lives.",
  subheadline: "I build simple, human-centered designs for AI, healthcare, and futuristic digital tools.",
  shortBio: "I designed THE NIUXVERSE: a world of Geniuxes where we leverage technology to solve real human problems and build tools people trust. As a Human-Centered Designer prepared for the Age of Intelligence, my mission is to make smart systems simple, safe, and deeply empowering.",
  quote: "Behind every line of code, every AI model, and every digital product is a human story. I design for that story."
};

export const DESIGN_WORKS: DesignProject[] = [
  {
    id: "pulsecare",
    title: "PulseCare AI",
    category: "Healthcare & AI Interface",
    tagline: "Empathetic Clinical Intelligence Dashboard",
    description: "Designed a clean, human-first medical interface that translates complex patient health metrics into clear visual insights for doctors and patients, reducing cognitive burnout and clinical errors.",
    image: "/work-previews/future-samurai.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    metrics: ["40% Faster Data Lookup", "Zero Clutter UI", "Human-First Safety Checks"],
    tags: ["Healthcare UX", "AI Copilot", "Clinical Design"]
  },
  {
    id: "aetherflow",
    title: "Aether Agent Workspace",
    category: "AI Workflow & Interaction",
    tagline: "Human-In-The-Loop AI Collaboration Canvas",
    description: "A futuristic visual workspace where non-technical creators can effortlessly direct, supervise, and collaborate with autonomous AI agents without losing creative direction or control.",
    image: "/work-previews/reach-through-firelight.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    metrics: ["100% Transparent Actions", "Drag & Drop Canvas", "Human Approval Nodes"],
    tags: ["AI Agent UX", "Systems Design", "Interaction Architecture"]
  },
  {
    id: "cognitive-os",
    title: "Cognitive OS",
    category: "Next-Gen Spatial Interface",
    tagline: "Zero-Friction Control for Futuristic Tech",
    description: "An intuitive design system crafted for the Age of AI, prioritizing minimal eye strain, adaptive layouts, and natural gesture inputs for everyday users.",
    image: "/work-previews/hypergate-branding.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
    metrics: ["Ultra-Low Cognitive Load", "Accessible Typography", "Adaptive Dark Canvas"],
    tags: ["Futuristic UI", "Spatial Design", "Design System"]
  },
  {
    id: "omnipulse",
    title: "OmniPulse Audit System",
    category: "Ethical AI & Analytics",
    tagline: "Visual Trust & Safety Evaluator",
    description: "An interactive dashboard that measures whether digital products respect human dignity, data privacy, and usability standards before launching.",
    image: "/work-previews/orange-visor-portrait.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    metrics: ["Instant Safety Scoring", "Layman-Friendly Metrics", "Clear Action Plans"],
    tags: ["Audit Tool", "Product Design", "Human Dignity"]
  }
];

export const MANIFESTO_CHAPTER_1 = {
  title: "The Birth of The King of Intelligence",
  subtitle: "HUMAN-CENTERED DESIGN FOR THE AGE OF INTELLIGENCE",
  coreQuestion: "How can we build smart technology that makes human life better, not harder?",
  
  introParagraphs: [
    "My name is Nwaeze David and I am the King of Intelligence.",
    "I designed THE NIUXVERSE: a world of Geniuxes, where we leverage the power of technology to solve problems and impact lives.",
    "Being the King of Intelligence isn't about knowing everything. It's about leading with curiosity, empathy, and a passion to design technology that truly helps people."
  ],

  whoIsKingOfIntelligence: {
    title: "WHO AM I?",
    mainStatement: "I am Nwaeze David — I designed THE NIUXVERSE, a world of Geniuxes leveraging technology to solve problems and impact lives.",
    subStatement: "Designing for Humans in a Tech-Driven World",
    description: "NIUXVERSE is built on a simple foundation: technology should serve humanity. I combine human psychology, healthcare empathy, and modern design systems to build digital products that feel natural, simple, and deeply empowering — creating tools that people love and businesses can count on.",
    coreTraits: [
      { label: "Always Curious", desc: "Constantly learning and testing new ideas in AI, design, and systems." },
      { label: "Human First", desc: "Designing for real people, real feelings, and real daily needs." },
      { label: "Simple English & Clean Layouts", desc: "Making complex tech easy to understand for everyone." },
      { label: "Healthcare Empathy", desc: "Bringing patient-care principles into every interface I build." },
      { label: "Futuristic & Practical", desc: "Crafting interfaces that serve real people while driving real-world product success." },
      { label: "Action-Oriented", desc: "Turning big ideas into working, high-quality digital products." }
    ]
  },

  healthcareConnection: {
    title: "MY FOUNDATION: FROM HEALTHCARE TO DESIGN",
    leadText: "Before designing software, I learned that every medical case starts with a human story.",
    bodyText: [
      "Healthcare taught me that patients aren't just hospital numbers — they are real people seeking help, clarity, and safety.",
      "Digital design is no different. Behind every app, website, or AI system is a real person trying to solve a problem.",
      "By bringing healthcare empathy into digital design, I build tools that protect user privacy, reduce stress, and give people peace of mind.",
      "Great design isn't just about clean visuals. It's about care, trust, and simplicity — creating genuine human connection and lasting product value."
    ]
  },

  humanCenteredQuestions: [
    {
      id: "q1",
      question: "Does it solve a real human need?",
      description: "Building technology that actually helps people, not just tech for tech's sake.",
      impact: "Makes products useful and meaningful."
    },
    {
      id: "q2",
      question: "Is it safe and easy to trust?",
      description: "Protecting user privacy and keeping data clear and secure.",
      impact: "Builds user confidence and peace of mind."
    },
    {
      id: "q3",
      question: "Can anyone use it without confusion?",
      description: "Removing jargon so anyone can understand and use the product right away.",
      impact: "Makes tech accessible to everyone."
    },
    {
      id: "q4",
      question: "Does it treat people with respect?",
      description: "Keeping humans in control instead of letting algorithms take over.",
      impact: "Protects human freedom and dignity."
    }
  ] as QuestionPrinciple[],

  beliefs: [
    {
      id: 1,
      title: "Anyone can grow intelligence.",
      summary: "You don't need to be born a genius — curiosity and practice build skill.",
      elaboration: "I believe everyone can master technology if given simple tools and the right guidance."
    },
    {
      id: 2,
      title: "Design must be simple for everyone.",
      summary: "Tech shouldn't be locked behind confusing buzzwords.",
      elaboration: "If a doctor, teacher, farmer, or business owner can't use it easily, the design isn't finished."
    },
    {
      id: 3,
      title: "Africa is building the future.",
      summary: "From local problems come world-class innovations.",
      elaboration: "I am proud to design global-quality solutions rooted in authentic community understanding."
    },
    {
      id: 4,
      title: "Healthcare empathy makes better tech.",
      summary: "Bring care, safety, and patience into digital interfaces.",
      elaboration: "Applying medical safety standards to digital interfaces keeps users safe from burnout and confusion."
    },
    {
      id: 5,
      title: "Humans stay in command.",
      summary: "AI should assist humans, never replace human heart and reason.",
      elaboration: "Machines calculate data; humans give life purpose, story, and meaning."
    }
  ] as Belief[],

  problemToSolve: {
    title: "THE PROBLEM I AM SOLVING",
    lead: "Technology is moving fast, and many people feel left behind.",
    details: [
      "New AI tools release every week. People wonder: How do I use this? Will it take my job?",
      "I bridge that gap by designing interfaces that make advanced AI friendly, clear, and easy to direct.",
      "My goal is simple: Help you step confidently into the future with tools you enjoy using."
    ]
  },

  missionPillars: [
    {
      title: "Master the Tools",
      action: "Stay ahead of AI, design systems, and emerging technologies.",
      description: "Continuously testing AI agents, interfaces, and automation tools.",
      details: ["AI Workflows", "User Research", "Prototyping", "Design Systems"]
    },
    {
      title: "Train the Mind",
      action: "Combine human creativity, empathy, and logical thinking.",
      description: "Focusing on problem-solving skills that AI can never replace.",
      details: ["Human Psychology", "Empathy-First Thinking", "Clarity in Communication", "Adaptability"]
    },
    {
      title: "Build for People",
      action: "Create design solutions that make daily life easier and better.",
      description: "Designing products that combine sleek visual beauty with real functional value.",
      details: ["Healthcare UI", "AI Copilots", "Mobile & Web Apps", "Spatial Interfaces"]
    }
  ] as MissionPillar[],

  historicalEras: [
    {
      era: "The Electricity Era",
      technology: "Power Grids",
      impact: "Lit up cities and powered physical machines.",
      currentParallel: "Physical infrastructure"
    },
    {
      era: "The Internet Era",
      technology: "Global Web",
      impact: "Connected people across continents instantly.",
      currentParallel: "Worldwide communication"
    },
    {
      era: "The Smartphone Era",
      technology: "Mobile Tech",
      impact: "Put the world's information right in our pockets.",
      currentParallel: "Pocket accessibility"
    },
    {
      era: "The Intelligence Era",
      technology: "Artificial Intelligence",
      impact: "Enhancing how humans learn, design, work, and build ideas.",
      currentParallel: "Human-AI Partnership"
    }
  ] as HistoricalEra[]
};

export const ACADEMY_DATA = {
  academyBadge: "NIUXVERSE ACADEMY",
  name: "School of Intelligenze",
  tagline: "Cultivating Human & Synthetic Discernment",
  websiteUrl: "https://schoolofintelligenze.ai.studio",
  websiteDisplay: "schoolofintelligenze.ai.studio",
  foundedBy: {
    label: "FOUNDED BY NWAEZE DAVID",
    founderName: "Nwaeze David",
    founderTitle: "The King of Intelligence",
    description: "The School of Intelligenze is an educational platform founded by Nwaeze David (The King of Intelligence). Dedicated to exploring, shaping, and mentoring the future of intellect, it brings together thoughtful inquiry, human-centered systems design, and bold vision for how humanity flourishes in the AI era."
  },
  corePhilosophy: {
    label: "CORE PHILOSOPHY",
    statement: "Rather than passively reacting to machine automation, the School of Intelligenze empowers creators, thinkers, and builders to master framing profound questions, preserve cognitive sovereignty, and build technology rooted in human dignity.",
    pillars: [
      {
        title: "Master Framing Profound Questions",
        description: "Moving beyond passive tool usage to architecting the questions that guide synthetic models."
      },
      {
        title: "Preserve Cognitive Sovereignty",
        description: "Safeguarding human critical judgment, agency, and autonomous intellectual willpower."
      },
      {
        title: "Build Technology Rooted in Human Dignity",
        description: "Ensuring synthetic systems advance flourishing, ethical care, and compassionate utility."
      }
    ]
  },
  interviewSeries: {
    sectionLabel: "CONVERSATIONS & INQUIRY",
    seriesType: "FLAGSHIP INTERVIEW SERIES",
    title: "The School of Intelligenze Show",
    quote: "Where we interview bright minds to learn about Human and Machine Intelligence and its coexistence.",
    recommendGuestWhatsApp: "https://wa.me/2348110607341?text=Hello%20Nwaeze%20David%2C%20I%20would%20like%20to%20recommend%20a%20guest%20for%20The%20School%20of%20Intelligenze%20Show."
  }
};

export const SEED_INTELLIGENZE_DATA = {
  name: "SeedIntelligenze",
  tagline: "AI-Powered Marketing Agency",
  description: "SeedIntelligenze is an AI-powered marketing agency dedicated to scaling brands with intelligent systems, growth architecture, and human-guided generative campaigns.",
  websiteUrl: "https://seedintelligenze.ai.studio",
  websiteDisplay: "seedintelligenze.ai.studio"
};
