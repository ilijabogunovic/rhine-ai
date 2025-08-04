import React from 'react';

interface PDFThumbnailProps {
  file: string;
  className?: string;
  alt?: string;
}

// Simple fallback component that displays a PDF icon with paper info
const PDFThumbnail: React.FC<PDFThumbnailProps> = ({ file, className, alt }) => {
  const handleClick = () => {
    window.open(file, '_blank');
  };

  return (
    <div 
      className={`${className} bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-border rounded shadow-sm flex flex-col items-center justify-center p-4 cursor-pointer hover:shadow-md transition-shadow`}
      onClick={handleClick}
    >
      {/* PDF Icon */}
      <div className="mb-3">
        <svg
          className="w-12 h-12 text-red-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
        </svg>
      </div>
      
      {/* PDF Label */}
      <div className="text-center">
        <div className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">PDF</div>
        <div className="text-xs text-muted-foreground">Paper Preview</div>
      </div>
      
      {/* Click to view */}
      <div className="mt-2 text-xs text-accent-vibrant hover:text-accent-vibrant/80">
        View PDF
      </div>
    </div>
  );
};

export default PDFThumbnail;