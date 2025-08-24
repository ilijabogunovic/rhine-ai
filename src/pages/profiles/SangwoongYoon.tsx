import ProfilePage from "@/components/ProfilePage";

const SangwoongYoon = () => {
  const profileData = {
    name: "Dr. Sangwoong Yoon",
    role: "Research Fellow",
    affiliation: "University College London",
    image: "/sangwoong-yoon-profile.jpg",
    about: [
      "Dr. Sangwoong Yoon is a Research Fellow at University College London (UCL) and an incoming assistant professor at Ulsan National Institute of Science and Technology (UNIST). His research is focused on the intersection of reinforcement learning and generative modeling, with a particular emphasis on improving AI alignment and reasoning capabilities.",
      "Before joining UCL, Dr. Yoon was a Research Fellow at Korea Institute for Advanced Study (KIAS). He received his PhD, MS, and BS from Seoul National University (SNU)."
    ],
    researchInterests: [
      {
        title: "Generative Modeling",
        description: "Learning probabilistic models of data. Energy-based models and diffusion models."
      },
      {
        title: "Reinforcement Learning for Generative Modeling",
        description: "Reinforcement learning for alignment, reasoning, and distillation."
      },
      {
        title: "Machine Learning for Science and Engineering",
        description: "Robotics, chemistry, particle physics, and rheology."
      },
      {
        title: "Learning to Act Under Partial Observability",
        description: "Learning to ask questions or to interact with the environment."
      }
    ],
    publications: [
      {
        title: "Maximum Entropy Inverse Reinforcement Learning of Diffusion Models with Energy-Based Models",
        authors: "Sangwoong Yoon, Himchan Hwang, Dohyun Kwon, Yung-Kyun Noh, Frank C. Park",
        venue: "Neural Information Processing Systems (NeurIPS)",
        year: "2024",
        description: "Training a diffusion model and an energy-based model jointly under the inverse reinforcement learning framework."
      },
      {
        title: "Energy-based models for anomaly detection: A manifold diffusion recovery approach",
        authors: "Sangwoong Yoon, Young-Uk Jin, Yung-Kyun Noh, Frank C. Park",
        venue: "Neural Information Processing Systems (NeurIPS)",
        year: "2023",
        description: "Training an energy-based model with manifold-based perturbations."
      }
    ],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:sangwoong24yoon@gmail.com",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=cH2rjfIAAAAJ",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://www.linkedin.com/in/sangwoong-yoon-8a6944b9/",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://x.com/WoongSSang",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://swyoon.github.io/",
        label: "Personal Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default SangwoongYoon;