// Utility to get correct image paths for both development and production
export const getImagePath = (imageName: string): string => {
  // In Vite, import.meta.env.BASE_URL gives us the base path
  const cleanImageName = imageName.startsWith('/') ? imageName.slice(1) : imageName;
  return `${import.meta.env.BASE_URL}${cleanImageName}`;
};

// For dynamic imports, we can create a function that attempts to import the asset
export const getImageUrl = (imageName: string): string => {
  return getImagePath(imageName);
};