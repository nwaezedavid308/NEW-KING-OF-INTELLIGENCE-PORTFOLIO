import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'david_nwaeze_custom_portrait';
export const DEFAULT_PORTRAIT_URL = '/1007970359.jpg';
export const FALLBACK_PORTRAIT_URL = '/profile/david-nwaeze-standing.jpg';

export function getStoredProfilePhoto(): string {
  if (typeof window === 'undefined') return DEFAULT_PORTRAIT_URL;
  try {
    const custom = localStorage.getItem(STORAGE_KEY);
    if (custom && custom.startsWith('data:image/')) {
      return custom;
    }
  } catch (err) {
    console.warn('Could not read custom profile photo from localStorage', err);
  }
  return DEFAULT_PORTRAIT_URL;
}

export function saveProfilePhotoFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('Please select a valid image file.'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        try {
          localStorage.setItem(STORAGE_KEY, dataUrl);
          window.dispatchEvent(new CustomEvent('profile_photo_updated', { detail: dataUrl }));
          resolve(dataUrl);
        } catch (err) {
          reject(new Error('Image file is too large for local browser storage. Please select an optimized JPG/PNG.'));
        }
      } else {
        reject(new Error('Failed to read image data.'));
      }
    };
    reader.onerror = () => reject(new Error('Error reading image file.'));
    reader.readAsDataURL(file);
  });
}

export function resetProfilePhoto(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('profile_photo_updated', { detail: DEFAULT_PORTRAIT_URL }));
  } catch (err) {
    console.warn('Could not reset custom profile photo', err);
  }
}

export function useProfilePhoto() {
  const [photoUrl, setPhotoUrl] = useState<string>(() => getStoredProfilePhoto());
  const [isCustom, setIsCustom] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem(STORAGE_KEY);
    return Boolean(stored && stored.startsWith('data:image/'));
  });

  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setPhotoUrl(customEvent.detail);
        setIsCustom(customEvent.detail.startsWith('data:image/'));
      } else {
        const stored = getStoredProfilePhoto();
        setPhotoUrl(stored);
        setIsCustom(stored.startsWith('data:image/'));
      }
    };

    window.addEventListener('profile_photo_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('profile_photo_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const uploadPhoto = useCallback(async (file: File) => {
    const saved = await saveProfilePhotoFile(file);
    setPhotoUrl(saved);
    setIsCustom(true);
    return saved;
  }, []);

  const resetToDefault = useCallback(() => {
    resetProfilePhoto();
    setPhotoUrl(DEFAULT_PORTRAIT_URL);
    setIsCustom(false);
  }, []);

  return { photoUrl, isCustom, uploadPhoto, resetToDefault };
}
