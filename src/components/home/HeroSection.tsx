import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-subtle-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Agentic Intelligence Research Lab
            </span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-5xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
            We are part of the <a href="https://dmi.unibas.ch/de/" target="_blank" rel="noopener noreferrer" className="text-accent-vibrant hover:underline relative z-50" style={{ pointerEvents: 'auto' }}>Department of Mathematics and Computer Science (DMI)</a> at the University of Basel and the <a href="https://www.ucl.ac.uk/engineering/research/centres-institutes-and-labs/ucl-centre-artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-accent-vibrant hover:underline relative z-50" style={{ pointerEvents: 'auto' }}>Centre for Artificial Intelligence</a> at University College London. Led by Ilija Bogunovic, our group develops agentic AI systems that reason, adapt, and self-evolve. We focus on sequential decision making and generative AI to drive novel discoveries and build robust, intelligent systems for real-world challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button size="lg" className="shadow-elevated">
              Explore Research
            </Button>
            <a 
              href="/publications"
              className="h-11 rounded-md px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer no-underline z-50 relative"
              style={{ pointerEvents: 'auto' }}
            >
              View Publications
            </a>
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