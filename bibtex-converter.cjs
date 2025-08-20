#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function parseBibTeX(bibtexContent) {
  const entries = [];
  const entryRegex = /@(\w+)\s*\{\s*([^,]+),\s*([\s\S]*?)\n\}/g;
  
  let match;
  while ((match = entryRegex.exec(bibtexContent)) !== null) {
    const [, type, key, content] = match;
    
    const fields = {};
    const fieldRegex = /(\w+)\s*=\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g;
    
    let fieldMatch;
    while ((fieldMatch = fieldRegex.exec(content)) !== null) {
      const [, fieldName, fieldValue] = fieldMatch;
      fields[fieldName.toLowerCase()] = fieldValue.trim();
    }
    
    entries.push({
      type: type.toLowerCase(),
      key,
      fields
    });
  }
  
  return entries;
}

function convertToPublicationFormat(bibtexEntries) {
  return bibtexEntries.map(entry => {
    const fields = entry.fields;
    
    // Extract year
    let year = fields.year || '2025';
    
    // Extract title
    let title = fields.title || 'Untitled';
    title = title.replace(/[{}]/g, ''); // Remove BibTeX braces
    
    // Extract authors
    let authors = fields.author || 'Unknown Author';
    authors = authors.replace(/[{}]/g, '');
    
    // Extract venue/journal
    let venue = '';
    if (entry.type === 'article') {
      venue = fields.journal || '';
    } else if (entry.type === 'inproceedings' || entry.type === 'conference') {
      venue = fields.booktitle || '';
    } else if (entry.type === 'misc') {
      venue = fields.howpublished || fields.note || '';
      // For arXiv preprints, extract venue from note or howpublished
      if (venue.includes('arXiv preprint')) {
        venue = venue;
      }
    }
    venue = venue.replace(/[{}]/g, '');
    
    // Determine type
    let type = 'Publication';
    if (venue.includes('arXiv') || venue.includes('preprint')) {
      type = 'Preprint';
    } else if (entry.type === 'article') {
      type = 'Journal Article';
    } else if (entry.type === 'inproceedings' || entry.type === 'conference') {
      type = 'Conference Paper';
    }
    
    // Extract URLs/links
    let arxivLink = '';
    let pdfFile = '';
    
    if (fields.url) {
      if (fields.url.includes('arxiv.org')) {
        arxivLink = fields.url;
        // Convert to PDF link
        pdfFile = fields.url.replace('/abs/', '/pdf/') + '.pdf';
      }
    }
    
    // Extract DOI if available
    let doi = fields.doi || '';
    
    // Extract abstract
    let abstract = fields.abstract || '';
    abstract = abstract.replace(/[{}]/g, '');
    
    const publication = {
      year,
      title,
      authors,
      venue,
      type,
      abstract
    };
    
    // Add optional fields
    if (arxivLink) publication.arxivLink = arxivLink;
    if (pdfFile) publication.pdfFile = pdfFile;
    if (doi) publication.doi = doi;
    
    return publication;
  });
}

function main() {
  const bibtexFile = process.argv[2] || 'publications.bib';
  const outputFile = process.argv[3] || 'publications.json';
  
  if (!fs.existsSync(bibtexFile)) {
    console.error(`Error: BibTeX file '${bibtexFile}' not found.`);
    console.log('\nUsage:');
    console.log('  node bibtex-converter.js [input.bib] [output.json]');
    console.log('\nExample:');
    console.log('  node bibtex-converter.js publications.bib publications.json');
    process.exit(1);
  }
  
  try {
    console.log(`Reading BibTeX file: ${bibtexFile}`);
    const bibtexContent = fs.readFileSync(bibtexFile, 'utf8');
    
    console.log('Parsing BibTeX entries...');
    const bibtexEntries = parseBibTeX(bibtexContent);
    console.log(`Found ${bibtexEntries.length} entries`);
    
    console.log('Converting to publication format...');
    const publications = convertToPublicationFormat(bibtexEntries);
    
    // Sort by year (newest first)
    publications.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    
    console.log(`Writing output to: ${outputFile}`);
    fs.writeFileSync(outputFile, JSON.stringify(publications, null, 2));
    
    console.log('\n✅ Conversion completed successfully!');
    console.log(`\nNext steps:`);
    console.log(`1. Review the generated ${outputFile} file`);
    console.log(`2. Copy the publications array to src/pages/Publications.tsx`);
    console.log(`3. Update any missing abstracts or metadata manually`);
    
    // Show summary by year
    const yearCounts = {};
    publications.forEach(pub => {
      yearCounts[pub.year] = (yearCounts[pub.year] || 0) + 1;
    });
    
    console.log('\nPublications by year:');
    Object.keys(yearCounts)
      .sort((a, b) => parseInt(b) - parseInt(a))
      .forEach(year => {
        console.log(`  ${year}: ${yearCounts[year]} publications`);
      });
    
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { parseBibTeX, convertToPublicationFormat };