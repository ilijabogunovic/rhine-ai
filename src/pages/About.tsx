import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              About Neural Labs
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Pioneering AI research for a better tomorrow.
            </p>
          </div>

          <div className="space-y-12">
            {/* Mission */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed text-lg">
                  Neural Labs is dedicated to advancing the frontiers of artificial intelligence 
                  through innovative research, ethical development practices, and collaborative 
                  partnerships. We believe that AI has the potential to solve some of humanity's 
                  greatest challenges, from climate change to healthcare, and we're committed to 
                  ensuring that these advances benefit everyone.
                </p>
              </CardContent>
            </Card>

            {/* History */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Our Story
                </h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2020 by a group of AI researchers from leading academic institutions 
                    and industry labs, Neural Labs emerged from a shared vision: to create AI 
                    systems that are not only powerful but also responsible, explainable, and 
                    beneficial to society.
                  </p>
                  <p>
                    Starting with just four researchers and a small grant, we've grown into a 
                    multidisciplinary team of 15+ scientists and engineers. Our work has been 
                    published in top-tier venues like ICML, NeurIPS, and Nature Machine Intelligence, 
                    and our open-source tools are used by researchers worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Our Values
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Scientific Rigor
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      We uphold the highest standards of scientific methodology and 
                      reproducibility in all our research.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Ethical Responsibility
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      We prioritize the development of fair, transparent, and 
                      accountable AI systems.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Open Collaboration
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      We believe in sharing knowledge and tools to accelerate 
                      progress across the AI community.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Real-World Impact
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      We focus on research that addresses pressing societal 
                      challenges and creates tangible benefits.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Get in Touch
                </h2>
                <div className="grid md:grid-cols-2 gap-6 font-body text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Research Inquiries</h3>
                    <p>research@neurallabs.org</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Collaborations</h3>
                    <p>partnerships@neurallabs.org</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Media & Press</h3>
                    <p>press@neurallabs.org</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">General</h3>
                    <p>info@neurallabs.org</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;