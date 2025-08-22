import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToResearchPillars = () => {
    const element = document.getElementById('research-pillars');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <section className="relative py-0 px-4 overflow-hidden" style={{ 
        backgroundColor: 'rgb(233,230,223)',
        backgroundImage: 'url(/c.jpg)',
        backgroundSize: '80% 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-7xl mx-auto relative z-10 flex items-end h-full min-h-96">
          <div className="text-center w-full" style={{ transform: 'translateY(-30px)' }}>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-0 animate-fade-in-up">
              <span className="text-primary">
                RHINE AI
              </span>
            </h1>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-6">
              <span className="text-accent-vibrant">R</span>easoning, <span className="text-accent-vibrant">H</span>uman-aligned <span className="text-accent-vibrant">I</span>ntelligence and <span className="text-accent-vibrant">N</span>ovel <span className="text-accent-vibrant">E</span>xploration AI Lab
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-5xl mx-auto mb-8 leading-relaxed animate-fade-in-up">
              UniBas RHINE AI Lab is a part of the <a href="https://dmi.unibas.ch/de/" target="_blank" rel="noopener noreferrer" className="text-accent-vibrant hover:underline relative z-50" style={{ pointerEvents: 'auto' }}>Department of Mathematics and Computer Science (DMI)</a> at the University of Basel and the <a href="https://www.ucl.ac.uk/engineering/research/centres-institutes-and-labs/ucl-centre-artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-accent-vibrant hover:underline relative z-50" style={{ pointerEvents: 'auto' }}>Centre for Artificial Intelligence</a> at University College London. Led by Ilija Bogunovic, our research group develops agentic AI systems that reason, adapt, and self-evolve. We focus on sequential decision making and generative AI to drive novel discoveries and build robust, intelligent systems for real-world challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button 
                size="lg" 
                className="shadow-elevated relative z-50"
                onClick={scrollToResearchPillars}
                style={{ pointerEvents: 'auto' }}
              >
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
      </section>
    </>
  );
};

export default HeroSection;