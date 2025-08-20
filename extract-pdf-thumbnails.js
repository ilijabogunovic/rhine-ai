import fs from 'fs';
import path from 'path';
import { createCanvas } from 'canvas';

// Import PDF.js for Node.js
import * as pdfjsLib from 'pdfjs-dist';

// Set worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = './node_modules/pdfjs-dist/build/pdf.worker.mjs';

async function extractThumbnail(pdfPath, outputPath) {
  try {
    console.log(`Processing: ${pdfPath}`);
    
    // Read PDF file
    const data = new Uint8Array(fs.readFileSync(pdfPath));
    
    // Load PDF document
    const pdf = await pdfjsLib.getDocument({ data }).promise;
    
    // Get first page
    const page = await pdf.getPage(1);
    
    // Set viewport with scale for good quality
    const viewport = page.getViewport({ scale: 2.0 });
    
    // Create canvas
    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext('2d');
    
    // White background
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    // Render page
    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    
    await page.render(renderContext).promise;
    
    // Save as JPEG
    const jpegBuffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
    fs.writeFileSync(outputPath, jpegBuffer);
    
    console.log(`✓ Thumbnail saved: ${outputPath}`);
    
  } catch (error) {
    console.error(`Error processing ${pdfPath}:`, error);
  }
}

async function main() {
  const pdfsDir = './public/papers';
  const thumbsDir = './src/assets/pdf-thumbs';
  
  // Create thumbnails directory if it doesn't exist
  if (!fs.existsSync(thumbsDir)) {
    fs.mkdirSync(thumbsDir, { recursive: true });
  }
  
  // Get all PDF files
  const pdfFiles = fs.readdirSync(pdfsDir)
    .filter(file => file.endsWith('.pdf'))
    .map(file => ({
      name: file,
      path: path.join(pdfsDir, file),
      arxivId: file.replace('.pdf', '')
    }));
  
  console.log(`Found ${pdfFiles.length} PDF files to process:`);
  pdfFiles.forEach(pdf => console.log(`- ${pdf.name}`));
  
  // Process each PDF
  for (const pdf of pdfFiles) {
    const outputPath = path.join(thumbsDir, `thumb-${pdf.arxivId}.jpg`);
    await extractThumbnail(pdf.path, outputPath);
  }
  
  console.log('\n✅ All thumbnails generated successfully!');
}

main().catch(console.error);