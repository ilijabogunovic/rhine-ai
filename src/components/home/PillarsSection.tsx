import { Card, CardContent } from "@/components/ui/card";

const pillars = [
  {
    title: "Machine Learning Innovation",
    description: "Developing novel algorithms and architectures that advance the state-of-the-art in deep learning, reinforcement learning, and federated learning systems.",
    icon: "🧠"
  },
  {
    title: "Responsible AI Development",
    description: "Ensuring our AI systems are ethical, transparent, and fair through rigorous testing, bias detection, and explainability research.",
    icon: "⚖️"
  },
  {
    title: "Real-World Applications",
    description: "Translating cutting-edge research into practical solutions for healthcare, climate change, education, and scientific discovery.",
    icon: "🌍"
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