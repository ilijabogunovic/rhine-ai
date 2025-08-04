// PDF Thumbnail Generation Utilities

export const generateThumbnailFromURL = async (pdfUrl: string): Promise<string | null> => {
  try {
    // Method 1: Try PDF24 API
    const pdf24Result = await tryPDF24API(pdfUrl);
    if (pdf24Result) return pdf24Result;

    // Method 2: Try pdf.co demo API
    const pdfCoResult = await tryPDFCoAPI(pdfUrl);
    if (pdfCoResult) return pdfCoResult;

    // Method 3: Try REST API services
    const restResult = await tryRestAPIs(pdfUrl);
    if (restResult) return restResult;

    return null;
  } catch (error) {
    console.error('All thumbnail generation methods failed:', error);
    return null;
  }
};

const tryPDF24API = async (pdfUrl: string): Promise<string | null> => {
  try {
    // PDF24 Tools API
    const formData = new FormData();
    formData.append('files', pdfUrl);
    
    const response = await fetch('https://tools.pdf24.org/api/pdf-to-images', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      }
    });

    if (response.ok) {
      const result = await response.json();
      if (result.images && result.images.length > 0) {
        return result.images[0];
      }
    }
  } catch (error) {
    console.log('PDF24 API failed:', error);
  }
  return null;
};

const tryPDFCoAPI = async (pdfUrl: string): Promise<string | null> => {
  try {
    const response = await fetch('https://api.pdf.co/v1/pdf/convert/to/jpg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'demo' // Demo key
      },
      body: JSON.stringify({
        url: pdfUrl,
        pages: '1',
        name: 'thumbnail'
      })
    });

    if (response.ok) {
      const result = await response.json();
      if (result.url) {
        return result.url;
      }
    }
  } catch (error) {
    console.log('PDF.co API failed:', error);
  }
  return null;
};

const tryRestAPIs = async (pdfUrl: string): Promise<string | null> => {
  try {
    // Try a different approach with direct conversion
    const response = await fetch('https://api.convertapi.com/convert/pdf/to/jpg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Parameters: [
          {
            Name: 'File',
            FileValue: {
              Url: pdfUrl
            }
          },
          {
            Name: 'PageRange',
            Value: '1'
          }
        ]
      })
    });

    if (response.ok) {
      const result = await response.json();
      if (result.Files && result.Files.length > 0) {
        return result.Files[0].Url;
      }
    }
  } catch (error) {
    console.log('ConvertAPI failed:', error);
  }
  return null;
};

// Pre-generate thumbnails for known PDFs
export const KNOWN_THUMBNAILS: Record<string, string> = {
  '2502.01208': '', // Will be populated
  '2503.00030': '',
  '2503.05856': '',
  '2503.08796': '',
  '2507.08838': ''
};

// Function to download and save thumbnail
export const downloadThumbnail = async (arxivId: string, imageUrl: string): Promise<void> => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    // Create a download link
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `paper-${arxivId}-thumb.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Failed to download thumbnail:', error);
  }
};