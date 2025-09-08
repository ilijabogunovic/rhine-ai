import ProfilePage from "@/components/ProfilePage";
import { getImagePath } from "@/utils/imageUtils";

const ColinDoumont = () => {
  const profileData = {
    name: "Colin Doumont",
    role: "PhD Student",
    affiliation: "Tübingen AI Center (with Philipp Hennig)",
    image: getImagePath("/colin-doumont.jpg"),
    about: [
      "Colin is currently a research assistant at UCL (with Ilija Bogunovic), and will soon be starting his PhD in Tübingen (with Philipp Hennig). Before UCL, he spent some time doing research at: the Vector Institute (with Geoff Pleiss), the University of Cambridge (with Henry Moss), Secondmind Ltd. (with Victor Picheny), and ETH Zürich (with Viacheslav Borovitskiy and Andreas Krause).",
      "In general, Colin is interested in mathematically-rich problems, whose solutions lead to real-world benefits for practitioners. So far, this has meant designing different kernels for combinatorial and high-dimensional Bayesian-optimization, as well as developing new data-selection algorithms for diffusion-based LLMs.",
    ],
    researchInterests: [
      {
        title: "Probabilistic Machine-Learning",
        description: "Principled methods that learn distributions rather than point estimates (e.g. Gaussian processes, Bayesian neural-networks or diffusion models)"
      },
      {
        title: "Sequential Decision-Making",
        description: "Algorithms that effectively explore and exploit a reward function over a specific search space (e.g. Bayesian optimization or reinforcement learning)"
      },
      {
        title: "AI for Science",
        description: "Machine-learning methods, especially probabilistic or sequential ones, that advance natural sciences (e.g. climate modeling or molecular search)"
      },
    ],
    publications: [
      {
        title: "Omnipresent Yet Overlooked: Heat Kernels in Combinatorial Bayesian Optimization",
        authors: "Colin Doumont, Victor Picheny, Viacheslav Borovitskiy, Henry B. Moss",
        venue: "[Under review]",
        year: "2025",
        description: "Unifying framework for kernels used in combinatorial Bayesian-optimization",
      },
    ],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:colin@principiae.be",
        label: "Email"
      },
      {
        type: "linkedin" as const,
        url: "https://www.linkedin.com/in/colin-doumont/",
        label: "LinkedIn"
      },
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default ColinDoumont;
