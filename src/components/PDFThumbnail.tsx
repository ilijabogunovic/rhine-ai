import React, { useState } from 'react';

interface PDFThumbnailProps {
  file: string;
  className?: string;
  alt?: string;
}

const PDFThumbnail: React.FC<PDFThumbnailProps> = ({ file, className, alt }) => {
  const [imageError, setImageError] = useState(false);
  
  const handleClick = () => {
    window.open(file, '_blank');
  };

  // Use screenshot service to capture actual PDF first page
  const getScreenshotUrl = () => {
    // Try using screenshot.guru service to capture the PDF
    return `https://shot.screenshotapi.net/screenshot?token=6VTBAYC-3PCBJ0A-P1E6FKA-EHQBYYA&url=${encodeURIComponent(file)}&width=400&height=520&file_type=png&wait_for_event=load`;
  };

  const screenshotUrl = getScreenshotUrl();

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
        src={screenshotUrl}
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
        onLoad={() => console.log('Real PDF screenshot loaded successfully')}
        loading="lazy"
      />
    </div>
  );
};

export default PDFThumbnail;