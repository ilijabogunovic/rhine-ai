import ProfilePage from "@/components/ProfilePage";

const WilliamBankes = () => {
  const profileData = {
    name: "William Bankes",
    role: "PhD Student",
    affiliation: "Foundation AI CDT at UCL, UCL AI Centre",
    image: "/william-bankes-new.jpg",
    about: [
      "I am a PhD student at University College London, supervised by Prof Ilija Bogunovic. My research interests focus on designing algorithms to better align Large Language Models both at pre- and post-deployment. I am also interested in how data selection can improve the performance of models whilst reducing the compute cost of training them. I have taken time out of my PhD to explore AI safety and various X-risk arguments as a LASR Labs Fellow. Whilst I’m not ‘safety pilled’ I do think there is some really interesting work going on in these areas. I'm always looking for new opportunities to learn and grow, so please don't hesitate to reach out if you'd like to collaborate.",
      "Before my PhD I graduated from Oxford with a Masters degree in Engineering Science, I then spent two years working as an ML Engineer at J. P. Morgan Chase as a Kubrick Consultant before studying for an MSC in Computational Statistics and Machine Learning at UCL.",
      "Outside of my PhD and AI, I enjoy music - singing in a London chamber choir, art - particularly drawing and watercolours, reading, and playing games be they board games, card games, or computer games."
    ],
    researchInterests: [
      {
        title: "Data Selection",
        description: "Active Learning, Data Downsampling, and Efficient Training"
      },
      {
        title: "Alignment and Reasoning",
        description: "Alignment, Reinforcement Learning, and Inference Time Algorithms"
      },
    ],
    publications: [],
    socialLinks: [
      {
        type: "email" as const,
        url: "mailto:williamjamesbankes@gmail.com",
        label: "Email"
      },
      {
        type: "scholar" as const,
        url: "https://scholar.google.com/citations?user=7_YF1goAAAAJ&hl=en",
        label: "Google Scholar"
      },
      {
        type: "linkedin" as const,
        url: "https://www.linkedin.com/in/william-bankes-45a41814a/",
        label: "LinkedIn"
      },
      {
        type: "twitter" as const,
        url: "https://x.com/bankes_william",
        label: "Twitter"
      },
      {
        type: "external" as const,
        url: "https://williambankes.github.io/will-bankes-website/",
        label: "External Website"
      }
    ]
  };

  return <ProfilePage {...profileData} />;
};

export default WilliamBankes;