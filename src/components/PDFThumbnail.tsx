import React from 'react';

interface PDFThumbnailProps {
  file: string;
  className?: string;
  alt?: string;
}

const PDFThumbnail: React.FC<PDFThumbnailProps> = ({ file, className, alt }) => {
  const handleClick = () => {
    window.open(file, '_blank');
  };

  // Map arXiv URLs to local PDF files
  const getPDFUrl = () => {
    const arxivMatch = file.match(/arxiv\.org\/pdf\/(\d+\.\d+)/);
    if (arxivMatch) {
      const arxivId = arxivMatch[1];
      return `/papers/${arxivId}.pdf`;
    }
    return file;
  };

  const pdfUrl = getPDFUrl();

  return (
    <div 
      className={`${className} cursor-pointer hover:shadow-lg transition-shadow border border-border rounded overflow-hidden bg-white relative`}
      onClick={handleClick}
    >
      {/* Use iframe to show PDF preview */}
      <iframe
        src={`${pdfUrl}#page=1&zoom=50`}
        className="w-full h-full pointer-events-none"
        title={alt}
        style={{ 
          transform: 'scale(0.8)', 
          transformOrigin: 'top left',
          width: '125%',
          height: '125%'
        }}
      />
      {/* Overlay to make entire area clickable */}
      <div className="absolute inset-0 bg-transparent" />
    </div>
  );
};

export default PDFThumbnail;