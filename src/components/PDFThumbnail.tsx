import React, { useState } from 'react';
import paperThumbnail1 from '@/assets/paper-thumbnail-1.jpg';
import paperThumbnail2 from '@/assets/paper-thumbnail-2.jpg';
import paperThumbnail3 from '@/assets/paper-thumbnail-3.jpg';
import paperThumbnail4 from '@/assets/paper-thumbnail-4.jpg';
import paperThumbnail5 from '@/assets/paper-thumbnail-5.jpg';

interface PDFThumbnailProps {
  file: string;
  className?: string;
  alt?: string;
  thumbnailIndex?: number;
}

const PDFThumbnail: React.FC<PDFThumbnailProps> = ({ file, className, alt, thumbnailIndex }) => {
  const [imageError, setImageError] = useState(false);
  
  const handleClick = () => {
    window.open(file, '_blank');
  };

  // Map thumbnail index to actual image
  const getThumbnailImage = () => {
    const thumbnails = [
      paperThumbnail1,
      paperThumbnail2,
      paperThumbnail3,
      paperThumbnail4,
      paperThumbnail5
    ];
    return thumbnails[thumbnailIndex || 0] || paperThumbnail1;
  };

  if (imageError) {
    return (
      <div 
        className={`${className} bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-border rounded shadow-sm flex flex-col items-center justify-center p-4 cursor-pointer hover:shadow-md transition-shadow`}
        onClick={handleClick}
      >
        <div className="mb-3">
          <svg
            className="w-12 h-12 text-red-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
        </div>
        <div className="text-center">
          <div className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">PDF</div>
          <div className="text-xs text-muted-foreground">Click to View</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`${className} cursor-pointer hover:shadow-lg transition-shadow border border-border rounded overflow-hidden bg-white`}
      onClick={handleClick}
    >
      <img
        src={getThumbnailImage()}
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
        loading="lazy"
      />
    </div>
  );
};

export default PDFThumbnail;