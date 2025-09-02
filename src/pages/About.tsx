import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              About RHINE AI Lab
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Developing intelligent agents that reason, learn, and discover.
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
                  RHINE AI Lab focuses on agentic AI systems with capabilities for reasoning, adaptation, and self-evolution - developing reliable and theory-inspired algorithms that can autonomously explore complex problems while staying aligned with human values and advancing scientific knowledge.
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
                    RHINE AI Lab was founded by Prof. Ilija Bogunovic with a vision to develop intelligent 
                    systems that can reason about complex problems, adapt to new challenges, and evolve 
                    their capabilities while remaining aligned with human values and advancing scientific discovery.
                  </p>
                  <p>
                    Originally established at University College London (UCL), the lab transitioned to the 
                    University of Basel's Department of Mathematics and Computer Science in 2025, while 
                    maintaining strong collaborative ties with the UCL AI Centre. This dual affiliation 
                    enables us to leverage the strengths of both institutions and foster international 
                    research partnerships.
                  </p>
                  <p>
                    Our research spans three core directions: agentic AI systems, reinforcement learning, 
                    and exploration & discovery. We develop reliable, theory-inspired algorithms for 
                    sequential decision making, human-AI collaboration, and autonomous problem solving. 
                    Our work appears in top venues including NeurIPS, ICML, ICLR, AISTATS, and JMLR, 
                    contributing to both theoretical understanding and practical applications of AI.
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
                      We uphold the highest standards of scientific methodology, 
                      theoretical foundations, and reproducibility in all our research.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Collaborative Teamwork
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      We foster an inclusive environment where diverse perspectives 
                      and interdisciplinary collaboration drive innovation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Human-Aligned AI
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      We develop AI systems that remain aligned with human values 
                      and serve the broader benefit of society.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      Open Science
                    </h3>
                    <p className="font-body text-muted-foreground text-sm">
                      We believe in sharing knowledge, tools, and discoveries to 
                      accelerate progress across the global AI community.
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
                <div className="space-y-4 font-body text-muted-foreground">
                  <p className="text-lg">
                    For all inquiries, please contact:
                  </p>
                  <div className="bg-background rounded-lg p-4 border">
                    <p className="font-body text-foreground">
                      📧 <a href="mailto:ilija.bogunovic@unibas.ch" className="text-accent-vibrant hover:text-accent-vibrant/80 transition-colors font-medium">
                        ilija.bogunovic@unibas.ch
                      </a> or <a href="mailto:i.bogunovic@ucl.ac.uk" className="text-accent-vibrant hover:text-accent-vibrant/80 transition-colors font-medium">
                        i.bogunovic@ucl.ac.uk
                      </a>
                    </p>
                  </div>
                  <div className="bg-accent-vibrant/10 border border-accent-vibrant/20 rounded-lg p-4">
                    <p className="font-body text-foreground font-medium mb-2">
                      Please use an appropriate subject line such as:
                    </p>
                    <div className="space-y-1 font-mono text-accent-vibrant font-medium">
                      <p>"[Research Inquiry]" for research questions</p>
                      <p>"[Collaboration]" for partnership opportunities</p>
                      <p>"[Media Inquiry]" for press and media requests</p>
                      <p>"[General Inquiry]" for other questions</p>
                    </div>
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