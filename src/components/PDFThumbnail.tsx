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
    const generateThumbnail = async () => {
      try {
        setLoading(true);
        setError(false);

        // Dynamic import of PDF.js to avoid SSR issues
        const pdfjsLib = await import('pdfjs-dist');
        
        // Set worker source to latest version
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/build/pdf.worker.min.js',
          import.meta.url,
        ).toString();

        // Map arXiv URLs to local PDF files
        let pdfUrl = file;
        const arxivMatch = file.match(/arxiv\.org\/pdf\/(\d+\.\d+)/);
        if (arxivMatch) {
          const arxivId = arxivMatch[1];
          pdfUrl = `/papers/${arxivId}.pdf`;
        }

        console.log('Loading PDF from:', pdfUrl);

        // Load the PDF document
        const loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
          disableAutoFetch: true,
          disableStream: true,
        });
        
        const pdf = await loadingTask.promise;
        console.log('PDF loaded successfully, pages:', pdf.numPages);
        
        // Get the first page
        const page = await pdf.getPage(1);
        console.log('Page 1 loaded');
        
        // Set up the canvas
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        if (!context) {
          throw new Error('Could not get canvas context');
        }

        // Calculate scale to fit desired thumbnail size
        const viewport = page.getViewport({ scale: 1.0 });
        const scale = Math.min(300 / viewport.width, 400 / viewport.height);
        const scaledViewport = page.getViewport({ scale });
        
        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        console.log('Canvas size:', canvas.width, 'x', canvas.height);

        // Render the page
        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
          canvas: canvas,
        };
        
        await page.render(renderContext).promise;
        console.log('Page rendered successfully');
        
        // Convert canvas to data URL
        const dataURL = canvas.toDataURL('image/png');
        setThumbnailUrl(dataURL);
        console.log('Thumbnail generated successfully');
        setLoading(false);
        
      } catch (err) {
        console.error('Error generating PDF thumbnail:', err);
        setError(true);
        setLoading(false);
      }
    };

    generateThumbnail();
  }, [file]);

  if (loading) {
    return (
      <div 
        className={`${className} bg-muted/20 border border-border rounded flex flex-col items-center justify-center p-4`}
      >
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <div className="text-xs text-muted-foreground mt-2">Extracting PDF...</div>
      </div>
    );
  }

  if (error || !thumbnailUrl) {
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
          <div className="text-xs font-semibold text-foreground mb-1">PDF</div>
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
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default PDFThumbnail;