
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Prof. Dr. Ilija Bogunovic",
    role: "Associate Professor",
    expertise: "",
    bio: "University of Basel\nUniversity College London",
    image: "/ilija-bogunovic-proper.jpg",
    link: "/team/ilija-bogunovic"
  },
  {
    name: "William Bankes",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: "/william-bankes-new.jpg",
    link: "/team/william-bankes"
  },
  {
    name: "Shyam Sundhar Ramesh",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: "/shyam-ramesh-proper.jpg",
    link: "/team/shyam-sundhar-ramesh"
  },
  {
    name: "Xiaohang Tang",
    role: "PhD Student",
    bio: "University College London",
    expertise: "",
    image: "/xiaohang-tang-proper.jpg",
    link: "/team/xiaohang-tang"
  },
  {
    name: "Theo Brown",
    role: "PhD Student",
    expertise: "",
    bio: "With UKAEA",
    image: "/theo-brown-resized.jpg",
    link: "/team/theo-brown"
  },
  {
    name: "Seong Ho",
    role: "PhD Student",
    expertise: "",
    bio: "With B. Paige (UCL)",
    image: "/seong-ho-resized.jpg",
    link: "/team/seong-ho"
  },
  {
    name: "Zhe Wang",
    role: "PhD Student",
    expertise: "",
    bio: "With Google DeepMind",
    image: "/zhe-wang-proper.jpg",
    link: "/team/zhe-wang"
  },
  {
    name: "Ahmet H. Guzel",
    role: "PhD Student",
    expertise: "",
    bio: "With J. Parker-Holder (Google DeepMind)",
    image: "/ahmet-guzel-proper.jpg",
    link: "/team/ahmet-h-guzel"
  },
  {
    name: "Abdelhamid Ezzerg",
    role: "PhD Student",
    expertise: "",
    bio: "With J. Knoblauch (UCL)",
    image: "/abdelhamid-ezzerg-profile.jpg",
    link: "/team/abdelhamid-ezzerg"
  },
  {
    name: "Dr. Sangwoong Yoon",
    role: "Research Fellow",
    expertise: "",
    bio: "University College London\nIncoming assistant professor at UNIST",
    image: "/sangwoong-yoon-resized.jpg",
    link: "/team/sangwoong-yoon"
  },
  {
    name: "Your Name Here?",
    role: "Join Our Team",
    expertise: "",
    bio: "We're always looking for passionate AI researchers to join our lab. Contact us if you're interested!",
    image: "🚀",
    link: "/join-us"
  }
];

const collaborators = [
  {
    name: "Lorenz Wolf",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: "/lovable-uploads/lorenz-wolf-avatar.jpg"
  },
  {
    name: "Rares Dolga",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: "/lovable-uploads/rares-dolge-avatar.jpg"
  },
  {
    name: "Colin Doumont",
    role: "PhD Student",
    expertise: "",
    bio: "Tübingen AI Center (with Philipp Hennig)",
    image: "/colin-doumont.jpg",
    link: "/team/colin-doumont"
  },
  {
    name: "Juliusz Ziomek",
    role: "PhD Student",
    expertise: "",
    bio: "",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const Team = () => {
  console.log("Team component rendering");
  return (
    <Layout>
      {/* Hero Team Photo Section */}
      <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden">
        <img 
          src="/team-photo.jpg"
          alt="Bogunovic LAB Team"
          className="w-full h-full object-cover"
          style={{ objectPosition: '50% 40%' }}
        />
        <div className="absolute inset-0 bg-black/30 flex items-end">
          <div className="w-full px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Our Team
              </h1>
              <p className="font-body text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
                We're a diverse group of researchers passionate about advancing artificial intelligence and making meaningful discoveries together.
              </p>
              <p className="font-body text-sm text-white/70 mt-3 drop-shadow-md">
                🐪 Group retreat in Morocco, Agadir, 2025 🏖️ ☀️
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const content = (
                <Card 
                  key={index} 
                  className={`shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in h-full ${
                    member.link ? 'cursor-pointer' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="mb-4">
                      {member.image.startsWith('/') ? (
                        <div className="w-40 h-40 rounded-full mx-auto overflow-hidden bg-gray-100">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
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
                    <p className="font-body text-sm text-muted-foreground whitespace-pre-line flex-grow">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              );

              return member.link ? (
                <Link key={index} to={member.link} className="block">
                  {content}
                </Link>
              ) : (
                content
              );
            })}
          </div>

          {/* Collaborators Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                Our Collaborators
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                We collaborate with distinguished researchers and leading institutions globally to advance the frontiers of artificial intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collaborators.map((collaborator, index) => {
                const content = (
                  <Card 
                    key={index} 
                    className={`shadow-card hover:shadow-elevated transition-all duration-300 animate-scale-in ${
                      collaborator.link ? 'cursor-pointer' : ''
                    }`}
                    style={{ animationDelay: `${(teamMembers.length + index) * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        {collaborator.image.startsWith('/') || collaborator.image.startsWith('https://') ? (
                          <img 
                            src={collaborator.image} 
                            alt={collaborator.name}
                            className="w-40 h-40 rounded-full mx-auto object-cover object-top"
                          />
                        ) : (
                          <div className="text-4xl">{collaborator.image}</div>
                        )}
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
                );

                return collaborator.link ? (
                  <Link key={index} to={collaborator.link} className="block">
                    {content}
                  </Link>
                ) : (
                  content
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
