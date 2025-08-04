import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Prof. Dr. Ilija Bogunovic",
    role: "Principal Investigator",
    expertise: "",
    bio: "",
    image: "👨‍💼"
  },
  {
    name: "William Bankes",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: "👨‍🎓"
  },
  {
    name: "Shyam Sundhar Ramesh",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: "👨‍🎓"
  },
  {
    name: "Xiaohang Tang",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: "👨‍🎓"
  },
  {
    name: "Theo Brown",
    role: "PhD Student",
    expertise: "",
    bio: "With UKAEA",
    image: "👨‍🎓"
  },
  {
    name: "Hamza Merzic",
    role: "PhD Student",
    expertise: "",
    bio: "With Google DeepMind",
    image: "👨‍🎓"
  },
  {
    name: "Seong Ho",
    role: "PhD Student",
    expertise: "",
    bio: "With B. Paige",
    image: "👨‍🎓"
  },
  {
    name: "Zhe Wang",
    role: "PhD Student",
    expertise: "",
    bio: "With Google DeepMind",
    image: "👨‍🎓"
  },
  {
    name: "Ahmet H. Guzel",
    role: "PhD Student",
    expertise: "",
    bio: "With Jack Parker-Holder",
    image: "👨‍🎓"
  },
  {
    name: "Abdelhamid Ezzerg",
    role: "PhD Student",
    expertise: "",
    bio: "With Jeremias Knoblauch",
    image: "👨‍🎓"
  },
  {
    name: "Dr. Sangwoong Yoon",
    role: "Research Fellow",
    expertise: "",
    bio: "",
    image: "👨‍🔬"
  },
  {
    name: "Your Name Here?",
    role: "Join Our Team",
    expertise: "",
    bio: "We're always looking for passionate researchers to join our lab. Contact us if you're interested!",
    image: "🚀"
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
                  <div className="text-6xl mb-4">{member.image}</div>
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
        </div>
      </div>
    </Layout>
  );
};

export default Team;