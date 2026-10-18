import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import Reveal from "@/components/brand/Reveal";
import PaperActions from "@/components/brand/PaperActions";
import { Bullet } from "@/components/brand/Tags";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  description?: string;
  abstract?: string;
  type?: string;
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
  type: 'email' | 'scholar' | 'linkedin' | 'twitter' | 'github' | 'website' | 'external';
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
  const generateBibTeX = (publication: Publication) => {
    // Create a clean key from author and title
    const firstAuthor = publication.authors.split(',')[0].trim().split(' ').pop()?.toLowerCase() || 'author';
    const firstWord = publication.title.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '');
    const key = `${firstAuthor}${publication.year}${firstWord}`;
    
    // Clean up fields for BibTeX format
    const cleanTitle = publication.title.replace(/[{}]/g, '');
    const summary = publication.description ?? publication.abstract;
    const cleanDescription = summary?.replace(/[{}]/g, '').substring(0, 500) + (summary && summary.length > 500 ? '...' : '');
    
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

  const socialLabel = (type: string, label: string) =>
    ({
      email: "Email",
      scholar: "Google Scholar",
      linkedin: "LinkedIn",
      twitter: "Twitter",
      github: "GitHub",
      website: "Website",
      external: "External Website",
    })[type] ?? label;

  return (
    <Layout>
      <div className="wrap pb-[var(--section)] pt-10">
        <Link to="/team" className="link t-1 font-medium">
          ← Back to team
        </Link>

        <div className="mt-10 grid gap-14 lg:grid-cols-12">
          {/* Portrait and links */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <img
                src={image}
                alt={name}
                className="aspect-[4/5] w-full max-w-[20rem] bg-paper-2 object-cover object-[50%_20%]"
              />
              <h1 className="t-4 mt-8 font-semibold text-ink">{name}</h1>
              <p className="t-2 mt-2 font-medium text-carmine">{role}</p>
              <p className="t-2 mt-1 whitespace-pre-line text-ink-soft">{affiliation}</p>
              {socialLinks.length > 0 && (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {socialLinks.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target={link.type === "email" ? undefined : "_blank"}
                        rel={link.type === "email" ? undefined : "noopener noreferrer"}
                        className="btn btn-quiet !min-h-[2.5rem] !px-4"
                      >
                        {socialLabel(link.type, link.label)}
                        {link.type !== "email" && <span aria-hidden="true">↗</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>

          {/* About, interests, publications */}
          <div className="space-y-20 lg:col-span-7 lg:col-start-6">
            <Reveal as="section" aria-labelledby="about-title">
              <h2 id="about-title" className="t-3 font-semibold text-ink">About</h2>
              <div className="t-2 mt-5 max-w-[66ch] space-y-4 text-ink">
                {about.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {researchInterests.length > 0 && (
              <Reveal as="section" aria-labelledby="interests-title">
                <h2 id="interests-title" className="t-3 font-semibold text-ink">Research interests</h2>
                <ul className="mt-6 grid gap-x-10 gap-y-7 md:grid-cols-2">
                  {researchInterests.map((interest) => (
                    <li key={interest.title}>
                      <h3 className="t-2 flex items-baseline gap-3 font-body font-semibold text-ink">
                        <Bullet />
                        {interest.title}
                      </h3>
                      <p className="t-1 mt-2 text-ink-soft">{interest.description}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {!hidePublications && (
              <section aria-labelledby="pubs-title">
                <h2 id="pubs-title" className="t-3 font-semibold text-ink">Publications</h2>
                {publications.length > 0 ? (
                  <>
                    <Reveal as="ul" mode="rows" className="mt-6 space-y-10">
                      {publications.map((pub) => (
                        <li key={pub.title} className="space-y-2">
                          <h3 className="t-2 font-body font-semibold leading-snug text-ink">{pub.title}</h3>
                          <p className="t-1 text-ink-soft">{pub.authors}</p>
                          <p className="t-1 italic text-ink-soft">
                            {pub.venue} {pub.year}
                          </p>
                          {(pub.description ?? pub.abstract) && (
                            <p className="t-1 max-w-[70ch] text-ink">{pub.description ?? pub.abstract}</p>
                          )}
                          <div className="pt-1">
                            <PaperActions paper={pub as unknown as Record<string, unknown>} bibtex={generateBibTeX(pub)} />
                          </div>
                        </li>
                      ))}
                    </Reveal>
                    <p className="t-1 mt-10 italic text-ink-soft">
                      For a complete list of publications, visit the researcher's profile on academic platforms.
                    </p>
                  </>
                ) : (
                  <p className="t-2 mt-5 italic text-ink-soft">Publications will be updated as research progresses.</p>
                )}
              </section>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
