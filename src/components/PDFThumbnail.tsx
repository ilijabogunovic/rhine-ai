import React from 'react';

// Import the pre-generated thumbnails
import thumb2502 from '@/assets/pdf-thumbs/thumb-2502.01208.jpg';
import thumb2503_1 from '@/assets/pdf-thumbs/thumb-2503.00030.jpg';
import thumb2503_2 from '@/assets/pdf-thumbs/thumb-2503.05856.jpg';
import thumb2503_3 from '@/assets/pdf-thumbs/thumb-2503.08796.jpg';
import thumb2507 from '@/assets/pdf-thumbs/thumb-2507.08838.jpg';

interface PDFThumbnailProps {
  file: string;
  className?: string;
  alt?: string;
}

// Map arXiv IDs to their thumbnails
const THUMBNAIL_MAP: Record<string, string> = {
  '2502.01208': thumb2502,
  '2503.00030': thumb2503_1,
  '2503.05856': thumb2503_2,
  '2503.08796': thumb2503_3,
  '2507.08838': thumb2507,
};

const PDFThumbnail: React.FC<PDFThumbnailProps> = ({ file, className, alt }) => {
  const handleClick = () => {
    window.open(file, '_blank');
  };

  // Extract arXiv ID from the file URL
  const getArxivId = (file: string): string | null => {
    const arxivMatch = file.match(/arxiv\.org\/pdf\/(\d+\.\d+)/);
    return arxivMatch ? arxivMatch[1] : null;
  };

  const arxivId = getArxivId(file);
  const thumbnailUrl = arxivId ? THUMBNAIL_MAP[arxivId] : null;

  console.log('PDFThumbnail:', { file, arxivId, thumbnailUrl });

  if (!thumbnailUrl) {
    return (
      <div 
        className={`${className} bg-muted/20 border border-border rounded flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-muted/30 transition-colors`}
        onClick={handleClick}
      >
        <div className="mb-3">
          <svg
            className="w-12 h-12 text-muted-foreground"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
        </div>
        <div className="text-center">
          <div className="text-xs font-semibold text-foreground mb-1">PDF Document</div>
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
        src={thumbnailUrl}
        alt={alt || 'PDF Thumbnail'}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default PDFThumbnail;