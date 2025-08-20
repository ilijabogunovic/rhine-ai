import Layout from "@/components/layout/Layout";
import { Mail, MapPin, Users, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Contact
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our research group for collaborations, questions, or administrative matters.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {/* Address */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-accent-vibrant" />
                Address
              </h2>
              <div className="space-y-4">
                <div className="font-body text-muted-foreground space-y-1">
                  <p className="font-medium text-foreground">Department of Mathematics and Computer Science</p>
                  <p>Spiegelgasse 1</p>
                  <p>4051 Basel</p>
                  <p>Switzerland</p>
                </div>
                <p className="font-body text-sm text-muted-foreground/80 italic">
                  Located in the heart of Basel, just steps away from the beautiful Rhine River!
                </p>
                <a 
                  href="https://maps.google.com/?q=Spiegelgasse+1,+4051+Basel,+Switzerland" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-accent-vibrant hover:text-accent-vibrant/80 transition-colors text-sm"
                >
                  <span>View on Google Maps</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Reach Out */}
            <div className="bg-accent-vibrant/10 rounded-lg p-6 border border-accent-vibrant/20">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Mail className="h-6 w-6 text-accent-vibrant" />
                Reach Out!
              </h2>
              <div className="space-y-4">
                <p className="font-body text-muted-foreground">
                  To reach out, please contact:
                </p>
                <a 
                  href="mailto:ilija.bogunovic@unibas.ch"
                  className="block font-body text-foreground font-medium text-lg hover:text-accent-vibrant transition-colors"
                >
                  📧 Ilija Bogunovic
                </a>
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <ExternalLink className="h-6 w-6 text-accent-vibrant" />
                Follow Us
              </h2>
              <div className="flex flex-col space-y-3">
                <a 
                  href="https://x.com/ilijabogunovic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-body text-accent-vibrant hover:text-accent-vibrant/80 transition-colors flex items-center gap-2"
                >
                  <span>Twitter</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a 
                  href="https://scholar.google.com/citations?user=xMvt3NEAAAAJ&hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-body text-accent-vibrant hover:text-accent-vibrant/80 transition-colors flex items-center gap-2"
                >
                  <span>Google Scholar</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Administrative Contact */}
          <div className="mt-8 bg-muted/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-accent-vibrant" />
              Administrative Contact
            </h2>
            <p className="font-body text-muted-foreground mb-2">
              For administrative questions, please reach out to:
            </p>
            <a 
              href="mailto:barbara.wenger@unibas.ch"
              className="font-body text-foreground font-medium hover:text-accent-vibrant transition-colors"
            >
              📧 Barbara Wenger
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;