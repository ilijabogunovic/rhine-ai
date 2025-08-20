import ProfilePage from "@/components/ProfilePage";

const SangwoongYoon = () => {
  const profileData = {
    name: "Dr. Sangwoong Yoon",
    role: "Research Fellow",
    affiliation: "University of Basel & UCL AI Centre",
    image: "/sangwoong-yoon-profile.jpg",
    about: [
      "Dr. Sangwoong Yoon is a Research Fellow at the University of Basel and a member of the UCL AI Centre. He leads independent research projects while mentoring PhD students in the lab, bringing extensive experience in machine learning research.",
      "His research focuses on advanced machine learning algorithms with particular emphasis on deep learning, optimization, and their theoretical foundations. Dr. Yoon has contributed significantly to the understanding of neural network dynamics and training algorithms.",
      "With a strong publication record in top-tier venues, Dr. Yoon bridges theoretical insights with practical applications, developing algorithms that are both theoretically sound and practically effective for real-world problems."
    ],
    researchInterests: [
      {
        title: "Deep Learning Theory",
        description: "Theoretical analysis of deep neural networks and their training dynamics"
      },
      {
        title: "Optimization for ML",
        description: "Advanced optimization methods for machine learning and deep learning"
      },
      {
        title: "Neural Network Dynamics",
        description: "Understanding the behavior and properties of neural networks during training"
      },
      {
        title: "Algorithm Development",
        description: "Developing novel algorithms for efficient and robust machine learning"
      }
    ],
    publications: [
      {
        title: "Understanding Neural Network Training Dynamics",
        authors: "Sangwoong Yoon, Ilija Bogunovic, et al.",
        venue: "International Conference on Machine Learning (ICML)",
        year: "2024",
        description: "A comprehensive analysis of training dynamics in deep neural networks, providing theoretical insights into convergence behavior."
      },
      {
        title: "Efficient Optimization Methods for Large-Scale Learning",
        authors: "Sangwoong Yoon, Research Collaborators",
        venue: "Neural Information Processing Systems (NeurIPS)",
        year: "2023",
        description: "Novel optimization algorithms that achieve improved convergence rates for large-scale machine learning problems."
      }
    ],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:sangwoong.yoon@example.com",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=syoon",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://linkedin.com/in/sangwoong-yoon",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://twitter.com/sangwoong_yoon",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://sangwoongyoon.com",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default SangwoongYoon;