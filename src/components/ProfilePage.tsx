import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  description: string;
  arxivLink?: string;
  pdfFile?: string;
  githubLink?: string;
  codeLink?: string;
  videoLink?: string;
  blogLink?: string;
  websiteLink?: string;
  slidesLink?: string;
  huggingFaceLink?: string;
}

interface ResearchArea {
  title: string;
  description: string;
}

interface SocialLink {
  type: 'email' | 'scholar' | 'linkedin' | 'twitter' | 'website' | 'external';
  url: string;
  label: string;
}

interface ProfilePageProps {
  name: string;
  role: string;
  affiliation: string;
  image: string;
  about: string[];
  researchInterests: ResearchArea[];
  publications: Publication[];
  socialLinks: SocialLink[];
  hidePublications?: boolean;
}

const ProfilePage: React.FC<ProfilePageProps> = ({
  name,
  role,
  affiliation,
  image,
  about,
  researchInterests,
  publications,
  socialLinks,
  hidePublications = false
}) => {
  const [showBibTeX, setShowBibTeX] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const generateBibTeX = (publication: Publication) => {
    // Create a clean key from author and title
    const firstAuthor = publication.authors.split(',')[0].trim().split(' ').pop()?.toLowerCase() || 'author';
    const firstWord = publication.title.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '');
    const key = `${firstAuthor}${publication.year}${firstWord}`;
    
    // Clean up fields for BibTeX format
    const cleanTitle = publication.title.replace(/[{}]/g, '');
    const cleanDescription = publication.description?.replace(/[{}]/g, '').substring(0, 500) + (publication.description && publication.description.length > 500 ? '...' : '');
    
    // Determine BibTeX entry type based on venue
    let entryType = 'misc';
    let venueField = 'howpublished';
    
    const venue = publication.venue.toLowerCase();
    if (venue.includes('journal') || venue.includes('transactions') || venue.includes('tmlr')) {
      entryType = 'article';
      venueField = 'journal';
    } else if (venue.includes('conference') || venue.includes('neurips') || venue.includes('icml') || venue.includes('iclr') || venue.includes('aistats') || venue.includes('aaai')) {
      entryType = 'inproceedings';
      venueField = 'booktitle';
    } else if (venue.includes('arxiv') || venue.includes('preprint')) {
      entryType = 'misc';
      venueField = 'howpublished';
    }
    
    // Build BibTeX entry
    let bibtex = `@${entryType}{${key},\n`;
    bibtex += `  title={${cleanTitle}},\n`;
    bibtex += `  author={${publication.authors}},\n`;
    bibtex += `  year={${publication.year}}`;
    
    if (publication.venue) {
      bibtex += `,\n  ${venueField}={${publication.venue}}`;
    }
    
    if (publication.arxivLink) {
      bibtex += `,\n  url={${publication.arxivLink}}`;
    }
    
    if (cleanDescription) {
      bibtex += `,\n  abstract={${cleanDescription}}`;
    }
    
    bibtex += `\n}`;
    return bibtex;
  };

  const toggleBibTeX = (publicationIndex: string) => {
    setShowBibTeX(showBibTeX === publicationIndex ? null : publicationIndex);
  };

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'email':
        return <Mail className="h-4 w-4" />;
      default:
        return <ExternalLink className="h-4 w-4" />;
    }
  };

  const getSocialLabel = (type: string, label: string) => {
    switch (type) {
      case 'email':
        return 'Email';
      case 'scholar':
        return 'Google Scholar';
      case 'linkedin':
        return 'LinkedIn';
      case 'twitter':
        return 'Twitter';
      case 'website':
        return 'Website';
      case 'external':
        return 'External Website';
      default:
        return label;
    }
  };

  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/team" 
              className="inline-flex items-center gap-2 text-accent-vibrant hover:text-accent-vibrant/80 transition-colors"
            >
              ← Back to Team
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Photo and Links */}
            <div className="lg:col-span-1">
              <Card className="shadow-card sticky top-8">
                <CardContent className="p-8 text-center">
                  {/* Profile Photo */}
                  <div className="mb-6">
                    <img 
                      src={image}
                      alt={name}
                      className="w-64 h-64 rounded-full mx-auto object-cover object-top shadow-lg"
                    />
                  </div>
                  
                  {/* Name and Title */}
                  <h1 className="font-display text-2xl font-bold text-foreground mb-2">
                    {name}
                  </h1>
                  <p className="font-body text-accent-vibrant font-medium mb-2">
                    {role}
                  </p>
                  <div className="font-body text-sm text-muted-foreground mb-6">
                    {affiliation.split('\n').map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="space-y-3">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target={link.type === 'email' ? undefined : "_blank"}
                        rel={link.type === 'email' ? undefined : "noopener noreferrer"}
                        className="inline-flex items-center gap-2 w-full px-4 py-2 bg-muted/50 rounded-lg hover:bg-muted transition-colors font-body text-sm"
                      >
                        {getSocialIcon(link.type)}
                        {getSocialLabel(link.type, link.label)}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    About
                  </h2>
                  <div className="font-body text-muted-foreground space-y-4 leading-relaxed">
                    {about.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Research Interests */}
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Research Interests
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {researchInterests.map((interest, index) => (
                      <div key={index}>
                        <h3 className="font-display font-semibold text-foreground mb-2">
                          {interest.title}
                        </h3>
                        <p className="font-body text-muted-foreground text-sm">
                          {interest.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Publications */}
              {!hidePublications && (
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                      Publications
                    </h2>
                    {publications.length > 0 ? (
                      <div className="space-y-6">
                        {publications.map((pub, index) => (
                          <div key={index} className={`border-l-4 border-accent-vibrant${index > 0 ? `/${60 + (index * 20)}` : ''} pl-4`}>
                            <h3 className="font-body font-semibold text-foreground mb-1">
                              {pub.title}
                            </h3>
                            <p className="font-body text-sm text-muted-foreground mb-2">
                              {pub.authors}
                            </p>
                            <p className="font-body text-xs text-muted-foreground mb-2">
                              {pub.venue} {pub.year}
                            </p>
                            <p className="font-body text-sm text-muted-foreground mb-3">
                              {pub.description}
                            </p>
                            
                            {/* Publication Links */}
                            <div className="flex flex-wrap items-center gap-2 text-xs">
                              {pub.arxivLink && (
                                <a
                                  href={pub.arxivLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-1 bg-accent-vibrant/10 text-accent-vibrant rounded hover:bg-accent-vibrant/20 transition-colors"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  arXiv
                                </a>
                              )}
                              {pub.pdfFile && (
                                <a
                                  href={pub.pdfFile}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-1 bg-accent-vibrant/10 text-accent-vibrant rounded hover:bg-accent-vibrant/20 transition-colors"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  PDF
                                </a>
                              )}
                              {pub.githubLink && (
                                <a
                                  href={pub.githubLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-1 bg-accent-vibrant/10 text-accent-vibrant rounded hover:bg-accent-vibrant/20 transition-colors"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  GitHub
                                </a>
                              )}
                              {pub.codeLink && (
                                <a
                                  href={pub.codeLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-1 bg-accent-vibrant/10 text-accent-vibrant rounded hover:bg-accent-vibrant/20 transition-colors"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  Code
                                </a>
                              )}
                              {pub.videoLink && (
                                <a
                                  href={pub.videoLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-1 bg-accent-vibrant/10 text-accent-vibrant rounded hover:bg-accent-vibrant/20 transition-colors"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  Video
                                </a>
                              )}
                              {pub.blogLink && (
                                <a
                                  href={pub.blogLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-1 bg-accent-vibrant/10 text-accent-vibrant rounded hover:bg-accent-vibrant/20 transition-colors"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  Blog
                                </a>
                              )}
                              {pub.websiteLink && (
                                <a
                                  href={pub.websiteLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-1 bg-accent-vibrant/10 text-accent-vibrant rounded hover:bg-accent-vibrant/20 transition-colors"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  Website
                                </a>
                              )}
                              {pub.slidesLink && (
                                <a
                                  href={pub.slidesLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-1 bg-accent-vibrant/10 text-accent-vibrant rounded hover:bg-accent-vibrant/20 transition-colors"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  Slides
                                </a>
                              )}
                              {pub.huggingFaceLink && (
                                <a
                                  href={pub.huggingFaceLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2 py-1 bg-accent-vibrant/10 text-accent-vibrant rounded hover:bg-accent-vibrant/20 transition-colors"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  🤗 HF
                                </a>
                              )}
                              <button
                                onClick={() => toggleBibTeX(`pub-${index}`)}
                                className="inline-flex items-center gap-1 px-2 py-1 bg-accent-vibrant/10 text-accent-vibrant rounded hover:bg-accent-vibrant/20 transition-colors"
                              >
                                <ExternalLink className="h-3 w-3" />
                                BibTeX
                              </button>
                            </div>
                            
                            {/* BibTeX Display */}
                            {showBibTeX === `pub-${index}` && (
                              <div className="mt-3 p-3 bg-muted/50 rounded-md border text-xs">
                                <pre className="font-mono whitespace-pre-wrap overflow-x-auto text-xs">
                                  {generateBibTeX(pub)}
                                </pre>
                                <button
                                  onClick={() => navigator.clipboard.writeText(generateBibTeX(pub))}
                                  className="mt-2 px-2 py-1 text-xs bg-accent-vibrant text-white rounded hover:bg-accent-vibrant/90 transition-colors"
                                >
                                  Copy to Clipboard
                                </button>
                              </div>
                            )}
                          </div>
                        ))}
                        
                        <div className="mt-6 pt-6 border-t border-muted">
                          <p className="font-body text-sm text-muted-foreground italic">
                            For a complete list of publications, visit the researcher's profile on academic platforms.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <p className="font-body text-muted-foreground italic">
                        Publications will be updated as research progresses.
                      </p>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;