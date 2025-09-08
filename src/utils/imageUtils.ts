// Utility to get correct image paths for both development and production
export const getImagePath = (imageName: string): string => {
  // In Vite, import.meta.env.BASE_URL gives us the base path
  return `${import.meta.env.BASE_URL}${imageName.startsWith('/') ? imageName.slice(1) : imageName}`;
};