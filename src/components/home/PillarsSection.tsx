import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    title: "Agentic AI Systems",
    description: "Developing autonomous AI agents that can reason, plan, and act independently to solve complex real-world problems through multi-step decision making.",
    icon: "🤖"
  },
  {
    title: "Learning through Interaction (Reinforcement Learning)",
    description: "Creating AI systems that learn optimal behaviors through trial and error, adapting to dynamic environments and improving performance over time.",
    icon: "🔄"
  },
  {
    title: "Exploration & Scientific Discovery",
    description: "Leveraging AI to accelerate scientific breakthroughs by exploring vast hypothesis spaces and uncovering novel patterns in complex data.",
    icon: "🔬"
  }
];

const PillarsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Research Pillars
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Our research is built on three fundamental pillars that guide our approach 
            to advancing artificial intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-elevated transition-shadow duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;