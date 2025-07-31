import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-subtle-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              AGENTIC INTELLIGENCE RESEARCH LAB
            </span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-5xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
            We are part of the Department of Mathematics and Computer Science (DMI) at the University of Basel and the Centre for Artificial Intelligence at University College London, UK. Led by Ilija Bogunovic, our group develops agentic AI systems that reason, adapt, and self-evolve. We focus on sequential decision making and generative AI to drive novel discoveries and build robust, intelligent systems for real-world challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" className="shadow-elevated">
              Explore Research
            </Button>
            <Button variant="outline" size="lg">
              View Publications
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-vibrant rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;