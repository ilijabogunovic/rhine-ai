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
    image: "👨‍🎓"
  },
  {
    name: "Ahmet H. Guzel",
    role: "PhD Student",
    expertise: "",
    bio: "With J. Parker-Holder (Google DeepMind)",
    image: "👨‍🎓"
  },
  {
    name: "Abdelhamid Ezzerg",
    role: "PhD Student",
    expertise: "",
    bio: "With J. Knoblauch (UCL)",
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
    bio: "We're always looking for passionate AI researchers to join our lab. Contact us if you're interested!",
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
                  <div className="mb-4">
                    {member.image.startsWith('/') ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-28 h-28 rounded-full mx-auto object-cover"
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
        </div>
      </div>
    </Layout>
  );
};

export default Team;