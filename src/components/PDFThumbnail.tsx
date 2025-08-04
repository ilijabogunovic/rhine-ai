import React, { useState, useEffect } from 'react';

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
    const extractRealThumbnail = async () => {
      try {
        // Get arXiv ID and use local PDF
        const arxivMatch = file.match(/arxiv\.org\/pdf\/(\d+\.\d+)/);
        if (!arxivMatch) {
          setError(true);
          setLoading(false);
          return;
        }

        const arxivId = arxivMatch[1];
        const pdfUrl = `/papers/${arxivId}.pdf`;

        // Use PDF2PIC service to convert PDF to image
        const response = await fetch(`https://api.pdf2pic.com/v1/convert`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pdf_url: `${window.location.origin}${pdfUrl}`,
            page: 1,
            format: 'jpg',
            quality: 90
          })
        });

        if (response.ok) {
          const result = await response.json();
          if (result.image_url) {
            setThumbnailUrl(result.image_url);
            setLoading(false);
            return;
          }
        }

        // Fallback: Extract real thumbnail with PDF.js
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js';

        console.log('Extracting real thumbnail from:', pdfUrl);
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 2.0 }); // Higher scale for quality
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d')!;
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // White background
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);

        await page.render({ canvasContext: context, viewport, canvas }).promise;
        
        const dataURL = canvas.toDataURL('image/jpeg', 0.9);
        setThumbnailUrl(dataURL);
        setLoading(false);

        // Save extracted thumbnail for future use
        console.log(`Real thumbnail extracted for ${arxivId}. Right-click the thumbnail and "Save image as" to save it to src/assets/extracted-thumbs/${arxivId}.jpg`);
        
        // Also provide download link in console
        const link = document.createElement('a');
        link.download = `extracted-thumb-${arxivId}.jpg`;
        link.href = dataURL;
        console.log('Auto-download link created for:', arxivId);
        
        // Uncomment to auto-download:
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);

      } catch (err) {
        console.error('Real thumbnail extraction failed:', err);
        setError(true);
        setLoading(false);
      }
    };

    extractRealThumbnail();
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