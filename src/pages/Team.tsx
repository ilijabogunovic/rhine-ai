
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Prof. Dr. Ilija Bogunovic",
    role: "Principal Investigator",
    expertise: "",
    bio: "",
    image: "/lovable-uploads/7ce7c8b6-c43e-488e-a09a-415bcceee298.png"
  },
  {
    name: "William Bankes",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: "/lovable-uploads/bab51e5a-ed71-42f6-bd0a-cf18969fee4c.png"
  },
  {
    name: "Shyam Sundhar Ramesh",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: "/lovable-uploads/8c32896e-7118-4f4f-b049-13a81f04d7b2.png"
  },
  {
    name: "Xiaohang Tang",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: "/lovable-uploads/f9b74fce-3193-459f-af51-21643847fec5.png"
  },
  {
    name: "Theo Brown",
    role: "PhD Student",
    expertise: "",
    bio: "With UKAEA",
    image: "/lovable-uploads/4cd88aa5-7628-45ac-85e7-228839c321cf.png"
  },
  {
    name: "Seong Ho",
    role: "PhD Student",
    expertise: "",
    bio: "With B. Paige (UCL)",
    image: "/lovable-uploads/712dd942-6db4-40ca-a574-ccb2c35e3747.png"
  },
  {
    name: "Zhe Wang",
    role: "PhD Student",
    expertise: "",
    bio: "With Google DeepMind",
    image: "/lovable-uploads/3cd8f9a7-f9a9-4e13-bd51-19042e42382d.png"
  },
  {
    name: "Ahmet H. Guzel",
    role: "PhD Student",
    expertise: "",
    bio: "With J. Parker-Holder (Google DeepMind)",
    image: "/lovable-uploads/de78cc23-d7f1-4a57-be78-b0479e0e03c6.png"
  },
  {
    name: "Abdelhamid Ezzerg",
    role: "PhD Student",
    expertise: "",
    bio: "With J. Knoblauch (UCL)",
    image: "/lovable-uploads/7f65f31f-b2b9-4c66-8eb5-c20194f03c3b.png"
  },
  {
    name: "Dr. Sangwoong Yoon",
    role: "Research Fellow",
    expertise: "",
    bio: "",
    image: "/lovable-uploads/977f0e30-578b-4050-bf03-3a35410d4347.png"
  },
  {
    name: "Your Name Here?",
    role: "Join Our Team",
    expertise: "",
    bio: "We're always looking for passionate AI researchers to join our lab. Contact us if you're interested!",
    image: "🚀"
  }
];

const collaborators = [
  {
    name: "Prof. B. Paige",
    role: "UCL Collaborator",
    expertise: "Probabilistic Programming",
    bio: "University College London",
    image: "🎓"
  },
  {
    name: "J. Parker-Holder",
    role: "Google DeepMind",
    expertise: "Reinforcement Learning",
    bio: "Google DeepMind Research",
    image: "🤖"
  },
  {
    name: "J. Knoblauch",
    role: "UCL Collaborator", 
    expertise: "Bayesian Methods",
    bio: "University College London",
    image: "📊"
  },
  {
    name: "UKAEA",
    role: "Industry Partner",
    expertise: "Fusion Energy",
    bio: "UK Atomic Energy Authority",
    image: "⚛️"
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
              We're a diverse group of researchers passionate about advancing artificial intelligence and making meaningful discoveries together.
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
                  <div className="mb-4">
                    {member.image.startsWith('/') ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover object-top"
                      />
                    ) : (
                      <div className="text-6xl">{member.image}</div>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="font-body text-accent-vibrant font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Collaborators Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Collaborators
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                We work closely with leading researchers and institutions worldwide to push the boundaries of AI research.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collaborators.map((collaborator, index) => (
                <Card 
                  key={index} 
                  className="shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in border-accent/20"
                  style={{ animationDelay: `${(teamMembers.length + index) * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="text-4xl">{collaborator.image}</div>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      {collaborator.name}
                    </h3>
                    <p className="font-body text-accent-vibrant font-medium mb-1 text-sm">
                      {collaborator.role}
                    </p>
                    <p className="font-body text-xs text-muted-foreground mb-2">
                      {collaborator.expertise}
                    </p>
                    <p className="font-body text-xs text-muted-foreground">
                      {collaborator.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
