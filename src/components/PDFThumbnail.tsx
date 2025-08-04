import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

interface PDFThumbnailProps {
  file: string;
  className?: string;
  alt?: string;
}

const PDFThumbnail: React.FC<PDFThumbnailProps> = ({ file, className, alt }) => {
  const [numPages, setNumPages] = React.useState<number>(0);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error loading PDF:', error);
    setError('Failed to load PDF');
    setLoading(false);
  }

  if (loading) {
    return (
      <div className={`${className} bg-muted animate-pulse flex items-center justify-center`}>
        <span className="text-muted-foreground text-sm">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${className} bg-muted flex items-center justify-center border border-border rounded`}>
        <span className="text-muted-foreground text-xs text-center p-2">PDF Preview Unavailable</span>
      </div>
    );
  }

  return (
    <div className={`${className} overflow-hidden border border-border rounded shadow-sm`}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        className="flex items-center justify-center"
      >
        <Page
          pageNumber={1}
          width={192} // w-48 = 192px
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="pdf-page"
        />
      </Document>
    </div>
  );
};

export default PDFThumbnail;