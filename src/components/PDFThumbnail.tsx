import React, { useEffect, useRef, useState } from 'react';

interface PDFThumbnailProps {
  file: string;
  className?: string;
  alt?: string;
}

const PDFThumbnail: React.FC<PDFThumbnailProps> = ({ file, className, alt }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        // Import PDF.js dynamically
        const pdfjsLib = await import('pdfjs-dist');
        
        // Set up the worker
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

        const loadingTask = pdfjsLib.getDocument(file);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        // Calculate the scale to fit the thumbnail size
        const viewport = page.getViewport({ scale: 1 });
        const scale = Math.min(192 / viewport.width, 256 / viewport.height); // w-48 = 192px, h-64 = 256px
        const scaledViewport = page.getViewport({ scale });

        canvas.width = scaledViewport.width;
        canvas.height = scaledViewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
        };

        await page.render(renderContext).promise;
        setLoading(false);
      } catch (err) {
        console.error('Error loading PDF:', err);
        setError('Failed to load PDF preview');
        setLoading(false);
      }
    };

    loadPDF();
  }, [file]);

  const handleClick = () => {
    window.open(file, '_blank');
  };

  if (loading) {
    return (
      <div className={`${className} bg-muted animate-pulse flex items-center justify-center border border-border rounded`}>
        <span className="text-muted-foreground text-sm">Loading...</span>
      </div>
    );
  }

  if (error) {
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
      className={`${className} cursor-pointer hover:shadow-lg transition-shadow border border-border rounded overflow-hidden`}
      onClick={handleClick}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-cover"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
};

export default PDFThumbnail;