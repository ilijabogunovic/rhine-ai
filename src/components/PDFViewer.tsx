import React, { useState, useEffect } from 'react';

interface PDFViewerProps {
  file: string;
  className?: string;
  alt?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file, className, alt }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  
  const handleClick = () => {
    window.open(file, '_blank');
  };

  // Map arXiv URLs to local PDF files
  const getPDFUrl = (file: string) => {
    const arxivMatch = file.match(/arxiv\.org\/pdf\/(\d+\.\d+)/);
    if (arxivMatch) {
      const arxivId = arxivMatch[1];
      return `/papers/${arxivId}.pdf`;
    }
    return file;
  };

  useEffect(() => {
    const generateThumbnail = async () => {
      try {
        setLoading(true);
        setError(false);

        const pdfUrl = getPDFUrl(file);
        console.log('Generating thumbnail for:', pdfUrl);

        // Method 1: Try iframe screenshot approach
        try {
          await tryIFrameScreenshot(pdfUrl);
          return;
        } catch (err) {
          console.log('IFrame method failed:', err);
        }

        // Method 2: Try PDF.js
        try {
          await tryPDFJS(pdfUrl);
          return;
        } catch (err) {
          console.log('PDF.js method failed:', err);
        }

        // Method 3: Try browser PDF renderer
        try {
          await tryBrowserPDF(pdfUrl);
          return;
        } catch (err) {
          console.log('Browser PDF method failed:', err);
        }

        throw new Error('All methods failed');

      } catch (err) {
        console.error('All PDF thumbnail methods failed:', err);
        if (retryCount < 2) {
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, 1000);
        } else {
          setError(true);
          setLoading(false);
        }
      }
    };

    const tryIFrameScreenshot = async (pdfUrl: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const iframe = document.createElement('iframe');
        iframe.style.width = '400px';
        iframe.style.height = '500px';
        iframe.style.position = 'absolute';
        iframe.style.left = '-9999px';
        iframe.style.border = 'none';
        iframe.src = pdfUrl;

        const timeout = setTimeout(() => {
          document.body.removeChild(iframe);
          reject(new Error('IFrame timeout'));
        }, 8000);

        iframe.onload = () => {
          setTimeout(() => {
            try {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              
              if (!ctx) {
                clearTimeout(timeout);
                document.body.removeChild(iframe);
                reject(new Error('No canvas context'));
                return;
              }

              canvas.width = 400;
              canvas.height = 500;

              // Try to capture iframe content (this might not work due to CORS)
              ctx.fillStyle = 'white';
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              
              // For now, create a simple placeholder that indicates PDF loading
              ctx.fillStyle = '#666';
              ctx.font = '16px Arial';
              ctx.textAlign = 'center';
              ctx.fillText('PDF Document', canvas.width / 2, canvas.height / 2);
              ctx.fillText('Click to View', canvas.width / 2, canvas.height / 2 + 30);

              const dataURL = canvas.toDataURL('image/png');
              setThumbnailUrl(dataURL);
              setLoading(false);

              clearTimeout(timeout);
              document.body.removeChild(iframe);
              resolve();
            } catch (err) {
              clearTimeout(timeout);
              document.body.removeChild(iframe);
              reject(err);
            }
          }, 2000);
        };

        iframe.onerror = () => {
          clearTimeout(timeout);
          document.body.removeChild(iframe);
          reject(new Error('IFrame load error'));
        };

        document.body.appendChild(iframe);
      });
    };

    const tryPDFJS = async (pdfUrl: string): Promise<void> => {
      const pdfjsLib = await import('pdfjs-dist');
      
      // Set worker with multiple fallbacks
      const workerUrls = [
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.min.js',
        'https://unpkg.com/pdfjs-dist@4.0.379/build/pdf.worker.min.js',
        'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.0.379/build/pdf.worker.min.js'
      ];

      for (const workerUrl of workerUrls) {
        try {
          pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;
          break;
        } catch (err) {
          console.log(`Worker ${workerUrl} failed`);
        }
      }

      const loadingTask = pdfjsLib.getDocument({
        url: pdfUrl,
        disableAutoFetch: true,
        disableStream: true,
        disableRange: true,
        verbosity: 0
      });

      const pdf = await Promise.race([
        loadingTask.promise,
        new Promise((_, reject) => setTimeout(() => reject(new Error('PDF load timeout')), 15000))
      ]) as any;

      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1.5 });
      
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      if (!context) throw new Error('No canvas context');

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      // White background
      context.fillStyle = 'white';
      context.fillRect(0, 0, canvas.width, canvas.height);

      await page.render({
        canvasContext: context,
        viewport: viewport,
        canvas: canvas
      }).promise;

      const dataURL = canvas.toDataURL('image/jpeg', 0.8);
      setThumbnailUrl(dataURL);
      setLoading(false);
    };

    const tryBrowserPDF = async (pdfUrl: string): Promise<void> => {
      // Create an object element to display PDF
      const object = document.createElement('object');
      object.data = pdfUrl;
      object.type = 'application/pdf';
      object.style.width = '400px';
      object.style.height = '500px';
      object.style.position = 'absolute';
      object.style.left = '-9999px';

      return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
          document.body.removeChild(object);
          reject(new Error('Browser PDF timeout'));
        }, 5000);

        object.onload = () => {
          setTimeout(() => {
            // Create a canvas representation
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            if (!ctx) {
              clearTimeout(timeout);
              document.body.removeChild(object);
              reject(new Error('No canvas context'));
              return;
            }

            canvas.width = 400;
            canvas.height = 500;
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            // Add some visual indication
            ctx.fillStyle = '#333';
            ctx.font = 'bold 18px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('PDF Preview', canvas.width / 2, 50);
            
            ctx.fillStyle = '#666';
            ctx.font = '14px Arial';
            ctx.fillText('First page of PDF document', canvas.width / 2, 100);
            ctx.fillText('Click to view full document', canvas.width / 2, canvas.height - 50);

            const dataURL = canvas.toDataURL('image/png');
            setThumbnailUrl(dataURL);
            setLoading(false);

            clearTimeout(timeout);
            document.body.removeChild(object);
            resolve();
          }, 1000);
        };

        object.onerror = () => {
          clearTimeout(timeout);
          document.body.removeChild(object);
          reject(new Error('Browser PDF load error'));
        };

        document.body.appendChild(object);
      });
    };

    generateThumbnail();
  }, [file, retryCount]);

  if (loading) {
    return (
      <div 
        className={`${className} bg-muted/20 border border-border rounded flex flex-col items-center justify-center p-4`}
      >
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        <div className="text-xs text-muted-foreground mt-2">
          {retryCount > 0 ? `Retry ${retryCount}/2...` : 'Extracting PDF...'}
        </div>
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
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default PDFViewer;