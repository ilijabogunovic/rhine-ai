# Publications Management

This guide explains how to manage your publications using the BibTeX import system.

## Setup

1. **Export from Google Scholar:**
   - Go to your Google Scholar profile
   - Select publications you want to include
   - Click "Export" → "BibTeX" 
   - Save as `publications.bib` in project root

2. **Convert to JSON:**
   ```bash
   node bibtex-converter.cjs publications.bib publications.json
   ```

3. **Update Publications.tsx:**
   - Copy the generated JSON array from `publications.json`
   - Replace the `publications` array in `src/pages/Publications.tsx` (around line 6)

## Adding New Publications

### Method 1: Add to BibTeX file
1. Add new entry to `publications.bib`
2. Run converter again: `node bibtex-converter.cjs publications.bib publications.json`
3. Copy updated array to `Publications.tsx`

### Method 2: Manual addition
Add directly to the `publications` array in `Publications.tsx`:

```javascript
{
  year: "2025",
  title: "Your Paper Title",
  authors: "Author Names",
  venue: "Conference/Journal Name",
  type: "Preprint", // or "Journal Article", "Conference Paper"
  abstract: "Your abstract...",
  arxivLink: "https://arxiv.org/abs/...", // optional
  pdfFile: "https://arxiv.org/pdf/....pdf" // optional
}
```

## Features

- **Automatic year grouping:** All views show publications grouped by year
- **PDF thumbnails:** Automatically generated from PDF files
- **Responsive design:** Works on all screen sizes
- **Two views:** Recent publications (first 5) vs complete list

## File Structure

```
├── bibtex-converter.cjs       # BibTeX to JSON converter
├── publications.bib           # Your BibTeX file (create this)
├── publications.json          # Generated JSON (temporary)
└── src/pages/Publications.tsx # Main publications page
```