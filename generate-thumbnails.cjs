const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if ImageMagick is available
function checkImageMagick() {
  try {
    execSync('convert -version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

// Generate thumbnail using ImageMagick
function generateThumbnailWithImageMagick(pdfPath, outputPath) {
  try {
    // Extract first page with better settings for PDF rendering
    const command = `magick -density 300 "${pdfPath}[0]" -background white -alpha remove -resize 400x -quality 95 "${outputPath}"`;
    console.log(`Running: ${command}`);
    execSync(command, { stdio: 'inherit' });
    console.log(`✓ Thumbnail saved: ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`Error with ImageMagick: ${error.message}`);
    return false;
  }
}

// Fallback: use PDF2PIC API
async function generateThumbnailWithAPI(pdfPath, outputPath, arxivId) {
  try {
    const fetch = (await import('node-fetch')).default;
    
    // Use the web URL of the PDF
    const pdfUrl = `https://arxiv.org/pdf/${arxivId}.pdf`;
    
    console.log(`Using API for: ${pdfUrl}`);
    
    const response = await fetch('https://api.pdf2pic.com/v1/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pdf_url: pdfUrl,
        page: 1,
        format: 'jpg',
        quality: 90,
        width: 400
      })
    });

    if (response.ok) {
      const result = await response.json();
      if (result.image_url) {
        // Download the image
        const imageResponse = await fetch(result.image_url);
        const buffer = await imageResponse.buffer();
        fs.writeFileSync(outputPath, buffer);
        console.log(`✓ Thumbnail saved via API: ${outputPath}`);
        return true;
      }
    }
    
    console.error('API failed to generate thumbnail');
    return false;
  } catch (error) {
    console.error(`API error: ${error.message}`);
    return false;
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
  
  const hasImageMagick = checkImageMagick();
  console.log(`ImageMagick available: ${hasImageMagick}`);
  
  // Process each PDF
  for (const pdf of pdfFiles) {
    const outputPath = path.join(thumbsDir, `thumb-${pdf.arxivId}.jpg`);
    
    console.log(`\nProcessing ${pdf.name}...`);
    
    let success = false;
    
    // Try ImageMagick first (if available)
    if (hasImageMagick) {
      success = generateThumbnailWithImageMagick(pdf.path, outputPath);
    }
    
    // Fallback to API if ImageMagick failed or unavailable
    if (!success) {
      console.log('Trying API fallback...');
      success = await generateThumbnailWithAPI(pdf.path, outputPath, pdf.arxivId);
    }
    
    if (!success) {
      console.error(`❌ Failed to generate thumbnail for ${pdf.name}`);
    }
  }
  
  console.log('\n✅ Thumbnail generation completed!');
}

main().catch(console.error);