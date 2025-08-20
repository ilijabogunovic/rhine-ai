import ProfilePage from "@/components/ProfilePage";

const XiaohangTang = () => {
  const profileData = {
    name: "Xiaohang Tang",
    role: "PhD Student",
    affiliation: "University of Basel & UCL AI Centre",
    image: "/xiaohang-tang-profile.jpg",
    about: [
      "Xiaohang Tang is a PhD student at the University of Basel and a member of the UCL AI Centre. His research focuses on advancing machine learning through innovative algorithmic approaches and theoretical foundations.",
      "He is passionate about developing scalable and efficient learning algorithms that can tackle real-world challenges in artificial intelligence. His work spans multiple areas including optimization theory, deep learning, and computational efficiency.",
      "Prior to his PhD studies, Xiaohang completed his Master's degree in Computer Science with a focus on machine learning and data analysis. He has contributed to several high-impact research projects and collaborates actively with leading researchers in the field."
    ],
    researchInterests: [
      {
        title: "Machine Learning Theory",
        description: "Optimization algorithms, convergence analysis, and theoretical foundations of learning"
      },
      {
        title: "Deep Learning",
        description: "Neural network architectures, training dynamics, and representation learning"
      },
      {
        title: "Computational Efficiency",
        description: "Scalable algorithms, distributed computing, and resource-efficient learning"
      },
      {
        title: "Applied AI",
        description: "Real-world applications, domain adaptation, and practical machine learning systems"
      }
    ],
    publications: [
      {
        title: "Efficient Learning Algorithms for Large-Scale Optimization",
        authors: "Xiaohang Tang, Ilija Bogunovic, et al.",
        venue: "International Conference on Machine Learning (ICML)",
        year: "2024",
        description: "This paper presents novel optimization algorithms that achieve superior convergence rates for large-scale machine learning problems."
      },
      {
        title: "Theoretical Analysis of Adaptive Learning Rates in Deep Networks",
        authors: "Xiaohang Tang, Collaborator Name, Ilija Bogunovic",
        venue: "Neural Information Processing Systems (NeurIPS)",
        year: "2023",
        description: "We provide theoretical insights into adaptive learning rate methods and their impact on training dynamics in deep neural networks."
      },
      {
        title: "Scalable Distributed Learning with Communication Constraints",
        authors: "Author Name, Xiaohang Tang, Ilija Bogunovic",
        venue: "International Conference on Learning Representations (ICLR)",
        year: "2023",
        description: "A framework for distributed machine learning that minimizes communication overhead while maintaining convergence guarantees."
      }
    ],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:xiaohang.tang@example.com",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=example",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://linkedin.com/in/xiaohang-tang",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://twitter.com/xiaohang_tang",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://xiaohangtang.com",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default XiaohangTang;