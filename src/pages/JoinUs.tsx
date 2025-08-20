import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Users, BookOpen, Globe } from "lucide-react";
import { useEffect } from "react";

const JoinUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Join the Lab!
            </h1>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="space-y-6 text-center">
                  <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    We are looking for exceptional applicants 🌟 who have a strong background in areas such as machine learning, data science, computer science, and mathematics. Applicants for the postdoctoral scholar position should have a strong publication record in leading conferences and journals 📚.
                  </p>
                  <div className="border-t border-muted pt-4">
                    <p className="font-body text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed">
                      Unfortunately, we are not able to respond to all emails. Please follow the appropriate route depending on your situation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PhD Positions */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Users className="h-6 w-6 text-accent-vibrant" />
                  You are a prospective PhD student?
                </h2>
                <div className="space-y-4">
                  <p className="font-body text-muted-foreground">
                    Please reach out directly. A strong background in machine learning, AI, coding & experimentation is necessary, with particular interest in any of:
                  </p>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-2 font-body text-sm text-muted-foreground">
                      <div>• Human alignment</div>
                      <div>• Novel discovery</div>
                      <div>• Reinforcement learning</div>
                      <div>• Large language models (LLMs)</div>
                      <div>• Diffusion models</div>
                      <div>• Foundation models</div>
                      <div>• Reasoning</div>
                      <div>• Planning</div>
                    </div>
                  </div>
                  <p className="font-body text-muted-foreground">
                    We have open PhD positions at the University of Basel, Department of Mathematics and Computer Science, and we can also co-supervise PhDs at University College London (UCL) AI Centre.
                  </p>
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
                  <div className="bg-accent-vibrant/10 border border-accent-vibrant/20 rounded-lg p-4">
                    <p className="font-body text-foreground font-medium mb-2">
                      When reaching out for a PhD position, please use the subject line:
                    </p>
                    <p className="font-mono text-accent-vibrant font-medium text-lg">
                      "[PhD position application]"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Postdoc Positions */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-accent-vibrant" />
                  You are a prospective Postdoctoral Scholar?
                </h2>
                <div className="space-y-4">
                  <p className="font-body text-muted-foreground">
                    Please reach out via email to:
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
                      Using the subject line:
                    </p>
                    <p className="font-mono text-accent-vibrant font-medium text-lg">
                      "[Application PostDoc]"
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="font-body text-muted-foreground mb-4">
                      Applicants can inquire if there are available positions first before applying.
                    </p>
                    <p className="font-body text-muted-foreground font-medium">
                      Your application should include:
                    </p>

                    <div className="font-body text-muted-foreground space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent-vibrant/20 rounded-full flex items-center justify-center text-xs font-medium text-accent-vibrant mt-0.5">1</div>
                        <div>
                          <p className="font-medium text-foreground">Your CV, including a list of publications</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent-vibrant/20 rounded-full flex items-center justify-center text-xs font-medium text-accent-vibrant mt-0.5">2</div>
                        <div>
                          <p className="font-medium text-foreground">Contact information for three referees</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-accent-vibrant/20 rounded-full flex items-center justify-center text-xs font-medium text-accent-vibrant mt-0.5">3</div>
                        <div>
                          <p className="font-medium text-foreground">A cover letter describing your prior research experience and explaining why you are interested in joining our group</p>
                        </div>
                      </div>
                    </div>

                    <p className="font-body text-sm text-muted-foreground italic pt-4 border-t border-muted">
                      Applications are reviewed on a rolling basis. We encourage applications from candidates with diverse backgrounds and experiences.
                    </p>
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

export default JoinUs;