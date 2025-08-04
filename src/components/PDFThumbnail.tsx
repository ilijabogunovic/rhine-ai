import React, { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import paperPreview1 from '@/assets/paper-preview-1.jpg';
import paperPreview2 from '@/assets/paper-preview-2.jpg';
import paperPreview3 from '@/assets/paper-preview-3.jpg';
import paperPreview4 from '@/assets/paper-preview-4.jpg';
import paperPreview5 from '@/assets/paper-preview-5.jpg';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

interface PDFThumbnailProps {
  file: string;
  className?: string;
  alt?: string;
  previewIndex?: number;
}

const PDFThumbnail: React.FC<PDFThumbnailProps> = ({ file, className, alt, previewIndex }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const handleClick = () => {
    window.open(file, '_blank');
  };

  // Use existing preview images as fallback
  const getPreviewImage = () => {
    const previews = [
      paperPreview1,
      paperPreview2,
      paperPreview3,
      paperPreview4,
      paperPreview5
    ];
    return previews[previewIndex || 0] || paperPreview1;
  };

  useEffect(() => {
    const generateThumbnail = async () => {
      try {
        setLoading(true);
        setError(false);

        // Try to load the local PDF file first
        let pdfUrl = file;
        
        // If it's an arXiv URL, try to map it to our local file
        const arxivMatch = file.match(/arxiv\.org\/pdf\/(\d+\.\d+)/);
        if (arxivMatch) {
          const arxivId = arxivMatch[1];
          pdfUrl = `/src/assets/paper-pdfs/${arxivId}.pdf`;
        }

        // Load the PDF document
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        
        // Get the first page
        const page = await pdf.getPage(1);
        
        // Set up the canvas
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        if (!context) {
          throw new Error('Could not get canvas context');
        }

        // Calculate scale to fit desired thumbnail size
        const viewport = page.getViewport({ scale: 1 });
        const scale = Math.min(400 / viewport.width, 520 / viewport.height);
        const scaledViewport = page.getViewport({ scale });
        
        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        // Render the page
        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
          canvas: canvas,
        };
        
        await page.render(renderContext).promise;
        
        // Convert canvas to blob URL
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            setThumbnailUrl(url);
          } else {
            setError(true);
          }
          setLoading(false);
        }, 'image/jpeg', 0.8);
        
      } catch (err) {
        console.error('Error generating PDF thumbnail:', err);
        setError(true);
        setLoading(false);
      }
    };

    generateThumbnail();

    // Cleanup function
    return () => {
      if (thumbnailUrl) {
        URL.revokeObjectURL(thumbnailUrl);
      }
    };
  }, [file]);

  if (loading) {
    return (
      <div 
        className={`${className} bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-border rounded shadow-sm flex flex-col items-center justify-center p-4`}
      >
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent-vibrant"></div>
        <div className="text-xs text-muted-foreground mt-2">Loading...</div>
      </div>
    );
  }

  if (error || !thumbnailUrl) {
    // Use static preview image as fallback
    return (
      <div 
        className={`${className} cursor-pointer hover:shadow-lg transition-shadow border border-border rounded overflow-hidden bg-white`}
        onClick={handleClick}
      >
        <img
          src={getPreviewImage()}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
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
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default PDFThumbnail;