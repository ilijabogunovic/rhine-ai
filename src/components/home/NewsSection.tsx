import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    date: "Dec 15, 2024",
    title: "Neural Labs Receives $5M Grant for Climate AI Research",
    excerpt: "Our team has been awarded a major research grant to develop AI systems for climate change prediction and mitigation strategies.",
    type: "Grant"
  },
  {
    date: "Dec 10, 2024",
    title: "New Paper Accepted at ICML 2025",
    excerpt: "Our research on federated learning optimization has been accepted for publication at the International Conference on Machine Learning.",
    type: "Publication"
  },
  {
    date: "Dec 5, 2024",
    title: "Dr. Sarah Chen Joins as Principal Researcher",
    excerpt: "We're excited to welcome Dr. Sarah Chen, former lead scientist at DeepMind, to our growing team of AI researchers.",
    type: "Team"
  },
  {
    date: "Nov 28, 2024",
    title: "Open Source Release: FairNet Framework",
    excerpt: "We've released our bias detection and mitigation framework for neural networks, available now on GitHub for the research community.",
    type: "Release"
  }
];

const NewsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Latest News
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Stay updated with our latest research breakthroughs and announcements.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            View All News
          </Button>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {newsItems.map((item, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-accent-vibrant">
                    {item.type}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">
                  {item.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;