import ProfilePage from "@/components/ProfilePage";
import { getAuthorPublications } from "@/utils/publicationUtils";
import { getImagePath } from "@/utils/imageUtils";

const AntonioLopardo = () => {
  const profileData = {
    name: "Antonio Lopardo",
    role: "PhD Student",
    affiliation: "University of Basel",
    image: getImagePath("/antonio-lopardo-profile.jpg"),
    about: [
      "Antonio Lopardo is a PhD student at the University of Basel, jointly supervised by Prof. Ilija Bogunovic and Prof. Aurelien Lucchi."
    ],
    researchInterests: [
      {
        title: "Continual Learning for LLMs",
        description: "Reinforcement Learning and Parameter-Efficient Fine-Tuning for adapting language models to evolving tasks, harnesses, and environments"
      },
      {
        title: "Post-Training and Reasoning",
        description: "RL with verifiable rewards, on-policy distillation, and open-model post-training pipelines"
      },
      {
        title: "Representation Learning",
        description: "How language models encode structure, and how fine-tuning and RL reshape their internal representations"
      }
    ],
    publications: getAuthorPublications("Antonio Lopardo"),
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:antonio.lopardo@unibas.ch",
        label: "Email"
      },
      {
        type: "twitter" as const,
        url: "https://x.com/AntonioLprd",
        label: "Twitter"
      },
      {
        type: "website" as const,
        url: "https://antoniolopardo.github.io",
        label: "Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default AntonioLopardo;
