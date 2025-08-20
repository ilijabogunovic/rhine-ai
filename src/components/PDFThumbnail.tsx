import React, { useState, useEffect } from 'react';

// Import thumbnails statically
import thumb250201208 from '../assets/pdf-thumbs/thumb-2502.01208.jpg';
import thumb250300030 from '../assets/pdf-thumbs/thumb-2503.00030.jpg';
import thumb250305856 from '../assets/pdf-thumbs/thumb-2503.05856.jpg';
import thumb250308796 from '../assets/pdf-thumbs/thumb-2503.08796.jpg';
import thumb250708838 from '../assets/pdf-thumbs/thumb-2507.08838.jpg';

interface PDFThumbnailProps {
  file: string;
  className?: string;
  alt?: string;
}

const PDFThumbnail: React.FC<PDFThumbnailProps> = ({ file, className, alt }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleClick = () => {
    window.open(file, '_blank');
  };

  useEffect(() => {
    const loadThumbnail = () => {
      try {
        // Get arXiv ID from the file URL
        const arxivMatch = file.match(/arxiv\.org\/pdf\/(\d+\.\d+)/);
        if (!arxivMatch) {
          setError(true);
          setLoading(false);
          return;
        }

        const arxivId = arxivMatch[1];
        
        // Map arXiv IDs to imported thumbnails
        const thumbnailMap: { [key: string]: string } = {
          '2502.01208': thumb250201208,
          '2503.00030': thumb250300030,
          '2503.05856': thumb250305856,
          '2503.08796': thumb250308796,
          '2507.08838': thumb250708838,
        };

        const thumbnail = thumbnailMap[arxivId];
        if (thumbnail) {
          setThumbnailUrl(thumbnail);
          setLoading(false);
        } else {
          console.warn(`Thumbnail not found for arXiv ID: ${arxivId}`);
          setError(true);
          setLoading(false);
        }

      } catch (err) {
        console.error('Thumbnail loading failed:', err);
        setError(true);
        setLoading(false);
      }
    };

    loadThumbnail();
  }, [file]);

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