import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Principal Researcher & Lab Director",
    expertise: "Machine Learning, Neural Networks, Fairness in AI",
    bio: "Former lead scientist at DeepMind with 10+ years experience in AI research. PhD from Stanford University.",
    image: "👩‍💼"
  },
  {
    name: "Dr. Miguel Rodriguez",
    role: "Senior Research Scientist",
    expertise: "Climate AI, Computer Vision, Remote Sensing",
    bio: "Expert in applying AI to climate science. Previously at NASA JPL. PhD from MIT.",
    image: "👨‍🔬"
  },
  {
    name: "Dr. Arun Kumar",
    role: "Research Scientist",
    expertise: "Federated Learning, Privacy-Preserving ML, Security",
    bio: "Specialist in distributed machine learning systems. Former researcher at Microsoft Research. PhD from CMU.",
    image: "👨‍💻"
  },
  {
    name: "Dr. Jessica Thompson",
    role: "Research Scientist",
    expertise: "Medical AI, Explainable AI, Ethics",
    bio: "Focused on AI applications in healthcare and medical diagnosis. Former researcher at Johns Hopkins. PhD from Harvard.",
    image: "👩‍⚕️"
  },
  {
    name: "Lisa Zhang",
    role: "PhD Student",
    expertise: "Natural Language Processing, Large Language Models",
    bio: "Working on advancing language understanding and generation. MS from Berkeley.",
    image: "👩‍🎓"
  },
  {
    name: "Kevin Williams",
    role: "PhD Student",
    expertise: "Reinforcement Learning, Robotics, Control Systems",
    bio: "Researching autonomous systems and robot learning. MS from Georgia Tech.",
    image: "👨‍🎓"
  }
];

const Team = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Our Team
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the brilliant minds behind Neural Labs' groundbreaking research 
              in artificial intelligence and machine learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="font-body text-accent-vibrant font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    <strong>Expertise:</strong> {member.expertise}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;