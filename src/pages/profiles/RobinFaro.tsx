import ProfilePage from "@/components/ProfilePage";
import { getAuthorPublications } from "@/utils/publicationUtils";
import { getImagePath } from "@/utils/imageUtils";

const RobinFaro = () => {
  const profileData = {
    name: "Robin Faro",
    role: "PhD Student",
    affiliation: "University of Basel",
    image: getImagePath("/robin-faro-profile.jpg"),
    about: [
      "Robin Faro is a PhD student at the University of Basel, jointly supervised by Prof. Ilija Bogunovic and Prof. Aurelien Lucchi."
    ],
    researchInterests: [
      {
        title: "Post-Training and Reasoning",
        description: "Reinforcement learning and fine-tuning methods that improve how language models reason"
      },
      {
        title: "Curriculum Learning",
        description: "Ordering and selecting training data and tasks so that models learn faster and more reliably"
      },
      {
        title: "Agentic AI",
        description: "Multi-turn reinforcement learning, tool use and long-horizon planning"
      },
      {
        title: "Diffusion Language Models",
        description: "Efficient pretraining, post-training and speed distillation"
      }
    ],
    publications: getAuthorPublications("Robin Faro"),
    socialLinks: [
        {
        type: "email" as const,
        url: "mailto:robin.faro@unibas.ch",
        label: "Email"
      },
      {
        type: "twitter" as const,
        url: "https://x.com/robinfaro13",
        label: "Twitter"
      },
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default RobinFaro;
