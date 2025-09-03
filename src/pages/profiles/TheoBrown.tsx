import ProfilePage from "@/components/ProfilePage";
import { getAuthorPublications } from "@/utils/publicationUtils";

const TheoBrown = () => {
    const profileData = {
        name: "Theo Brown",
        role: "PhD Student",
        affiliation: "UCL AI Centre (with Prof. Sarah Spurgeon), UK Atomic Energy Authority (with Dr. Lorenzo Zanisi)",
        image: "/theo-brown-profile.jpg",
        about: [
            "Theo is a PhD student at UCL, jointly supervised with Prof. Sarah Spurgeon (Electronic & Electrical Engineering). He is a visiting researcher at the UK's national lab for nuclear fusion research (UKAEA), where he works with the plasma scenario development team for the UK's next-generation fusion device.",
            "Motivated by challenging problems from nuclear fusion and plasma physics, Theo's research involves developing new ML methods for robust, efficient optimization and online control, with a focus on situations where gathering data is expensive.",
        ],
        researchInterests: [
            {
                title: "Probabilistic machine learning",
                description: "Principled ML methods that learn distributions rather than point estimates, including Bayesian optimization, Gaussian processes and generative modelling"
            },
            {
                title: "Physics-Informed ML",
                description: "Incorporating prior knowledge from physics and geometry into learning-based algorithms"
            },
            {
                title: "Robust Optimization and Control",
                description: "Algorithms that provably maintain performance under modifications to the environment"
            },
            {
                title: "Scientific Computing",
                description: "Computational methods for large-scale, multi-fidelity physics simulations"
            }
        ],
        publications: getAuthorPublications("Theodore Brown").concat([
            {
                title: "Multi-objective Bayesian Optimization for design of Pareto-optimal current drive profiles in STEP",
                authors: "Theodore Brown, Stephen Marsden, Vignesh Gopakumar, Alexander Terenin, Hong Ge, Francis Casson",
                venue: "IEEE Transactions on Plasma Science",
                type: "Conference Paper",
                year: "2024",
                arxivLink: "https://arxiv.org/abs/2310.02669v3",
                pdfFile: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10507168",
                githubLink: "https://github.com/theo-brown/jetto-mobo",
                description: "We apply multi-objective Bayesian optimisation to design electron-cyclotron heating profiles for the UK's next fusion reactor, the Spherical Tokamak for Energy Production. Our optimiser generates sets of solutions representing optimal tradeoffs between objectives, enabling decision makers to understand the compromises made in each design. The solutions from our method score higher than those generated in previous work by a genetic algorithm; however, the key result is that our method returns a purposefully diverse range of optimal solutions, providing more information to tokamak designers without incurring additional computational cost.",
            }
        ]
        )
        ,
        socialLinks: [
            {
                type: "email" as const,
                url: "mailto:theodore.brown@ucl.ac.uk",
                label: "Email"
            },
            {
                type: "scholar" as const,
                url: "https://scholar.google.com/citations?user=m4LY31gAAAAJ",
                label: "Google Scholar"
            },
            {
                type: "linkedin" as const,
                url: "https://linkedin.com/in/theo-brown-uk",
                label: "LinkedIn"
            },
            {
                type: "github" as const,
                url: "https://github.com/theo-brown",
                label: "Github"
            },
            {
                type: "external" as const,
                url: "https://theobrown.com",
                label: "External Website"
            }
        ]
    };

    return <ProfilePage {...profileData} />;
};

export default TheoBrown;
