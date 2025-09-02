// Utility functions for handling publications across personal pages

// Import the publications array from the main Publications page
// Note: This creates a dependency but ensures single source of truth
import { publications } from '../pages/Publications';

/**
 * Filters publications by author name to get publications for a specific person
 * @param authorName - The name to search for in the authors list
 * @returns Array of publications where the author is listed
 */
export const getPublicationsByAuthor = (authorName: string) => {
  return publications.filter(publication => {
    // Check if the author name appears in the authors string
    // Handle various name formats and potential variations
    const authors = publication.authors.toLowerCase();
    const searchName = authorName.toLowerCase();
    
    // Split search name to handle different name orders
    const nameParts = searchName.split(' ');
    
    // Check if all name parts appear in the authors string
    return nameParts.every(part => authors.includes(part));
  });
};

/**
 * Truncates text at the end of a sentence, within a reasonable length limit
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text ending at a sentence boundary
 */
const truncateAtSentence = (text: string | undefined, maxLength: number = 300): string => {
  if (!text) return '';
  
  // If text is shorter than max length, return as is
  if (text.length <= maxLength) return text;
  
  // Look for sentence endings within a reasonable range of the max length
  const searchStart = Math.max(150, maxLength * 0.6); // Don't truncate too early
  const searchEnd = Math.min(text.length, maxLength + 100); // Allow some flexibility beyond max
  
  // Find the last sentence ending (., !, ?) within our search range
  const searchText = text.substring(searchStart, searchEnd);
  const sentenceEndings = /[.!?]\s/g;
  let lastMatch: RegExpExecArray | null = null;
  let match: RegExpExecArray | null;
  
  while ((match = sentenceEndings.exec(searchText)) !== null) {
    lastMatch = match;
  }
  
  if (lastMatch) {
    // Found a sentence ending, truncate there
    const truncateIndex = searchStart + lastMatch.index + 1;
    return text.substring(0, truncateIndex);
  }
  
  // No sentence ending found, fall back to word boundary
  const wordBoundary = text.lastIndexOf(' ', maxLength);
  if (wordBoundary > maxLength * 0.8) {
    return text.substring(0, wordBoundary) + '...';
  }
  
  // Last resort: hard truncate at max length
  return text.substring(0, maxLength) + '...';
};

/**
 * Converts a publication from the main format to the profile page format
 * @param publication - Publication in main format
 * @returns Publication in profile page format
 */
export const convertToProfileFormat = (publication: any) => {
  return {
    year: publication.year,
    title: publication.title,
    authors: publication.authors,
    venue: publication.venue,
    description: truncateAtSentence(publication.abstract, 300),
    arxivLink: publication.arxivLink,
    pdfFile: publication.pdfFile,
    githubLink: publication.githubLink,
    codeLink: publication.codeLink,
    videoLink: publication.videoLink,
    blogLink: publication.blogLink,
    websiteLink: publication.websiteLink,
    slidesLink: publication.slidesLink,
    huggingFaceLink: publication.huggingFaceLink
  };
};

/**
 * Gets publications for a specific author in profile page format
 * @param authorName - The name to search for
 * @returns Array of publications formatted for profile pages
 */
export const getAuthorPublications = (authorName: string) => {
  const authorPublications = getPublicationsByAuthor(authorName);
  return authorPublications.map(convertToProfileFormat);
};