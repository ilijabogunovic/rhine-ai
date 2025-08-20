import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  description: string;
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
}

const ProfilePage: React.FC<ProfilePageProps> = ({
  name,
  role,
  affiliation,
  image,
  about,
  researchInterests,
  publications,
  socialLinks
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                  <p className="font-body text-sm text-muted-foreground mb-6">
                    {affiliation}
                  </p>

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
                          <p className="font-body text-sm text-muted-foreground">
                            {pub.description}
                          </p>
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;