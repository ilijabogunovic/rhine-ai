import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import paperThumbnail1 from "@/assets/paper-thumbnail-1.jpg";
import paperThumbnail2 from "@/assets/paper-thumbnail-2.jpg";
import paperThumbnail3 from "@/assets/paper-thumbnail-3.jpg";
import paperThumbnail4 from "@/assets/paper-thumbnail-4.jpg";
import paperThumbnail5 from "@/assets/paper-thumbnail-5.jpg";

const publications = [
  {
    year: "2025",
    title: "wd1: Weighted Policy Optimization for Reasoning in Diffusion Language Models",
    authors: "X Tang, R Dolga, S Yoon, I Bogunovic",
    venue: "arXiv preprint arXiv:2507.08838",
    type: "Preprint",
    abstract: "We present wd1, a novel weighted policy optimization approach that enhances reasoning capabilities in diffusion-based language models through sophisticated training strategies. Our method introduces adaptive weighting mechanisms that dynamically adjust policy gradients based on reasoning complexity and uncertainty estimates. We demonstrate significant improvements in mathematical reasoning, logical inference, and multi-step problem solving across diverse benchmarks. The approach leverages diffusion processes to generate more coherent and contextually appropriate responses while maintaining computational efficiency. Experimental results show substantial gains over baseline methods in both accuracy and reasoning quality, with particular strengths in handling complex multi-step problems that require sustained logical thinking.",
    thumbnail: paperThumbnail1
  },
  {
    year: "2025",
    title: "Robust Multi-Objective Controlled Decoding of Large Language Models",
    authors: "S Son, W Bankes, S Yoon, SS Ramesh, X Tang, I Bogunovic",
    venue: "arXiv preprint arXiv:2503.08796",
    type: "Preprint",
    abstract: "This work addresses the challenge of multi-objective controlled decoding in large language models, providing robust methods for steering model outputs across multiple objectives simultaneously. We introduce a novel framework that balances competing objectives such as truthfulness, helpfulness, and safety during the generation process. Our approach employs constrained optimization techniques with uncertainty quantification to ensure reliable performance across diverse deployment scenarios. The method incorporates adaptive regularization that adjusts based on the complexity and potential risks of different generation contexts. Comprehensive experiments demonstrate superior performance in maintaining coherent outputs while satisfying multiple constraints, with particular improvements in scenarios requiring careful balance between informativeness and safety considerations.",
    thumbnail: paperThumbnail2
  },
  {
    year: "2025",
    title: "This Is Your Doge, If It Please You: Exploring Deception and Robustness in Mixture of LLMs",
    authors: "L Wolf, S Yoon, I Bogunovic",
    venue: "arXiv preprint arXiv:2503.05856",
    type: "Preprint",
    abstract: "We investigate deception and robustness properties in mixture of experts language models, exploring how multiple models can be combined while maintaining trustworthiness and reliability. This study examines the emergent behaviors that arise when different language models with varying capabilities and biases are combined through mixture architectures. We develop novel detection methods for identifying potential deceptive outputs and propose robustness guarantees for mixture systems. The work includes both theoretical analysis of information aggregation in multi-model systems and empirical evaluation on benchmarks designed to test model honesty and consistency. Our findings reveal important trade-offs between model diversity and reliability, providing practical guidelines for deploying mixture systems in high-stakes applications.",
    thumbnail: paperThumbnail3
  },
  {
    year: "2025",
    title: "Game-Theoretic Regularized Self-Play Alignment of Large Language Models",
    authors: "X Tang, S Yoon, S Son, H Yuan, Q Gu, I Bogunovic",
    venue: "arXiv preprint arXiv:2503.00030",
    type: "Preprint",
    abstract: "We develop a game-theoretic framework for self-play alignment in large language models, using regularization techniques to improve model behavior through strategic interactions. Our approach models the alignment process as a multi-agent game where different versions of the model compete and cooperate to achieve desired behaviors. The framework incorporates sophisticated regularization mechanisms that prevent exploitation and ensure convergence to beneficial equilibria. We introduce novel algorithms that balance exploration and exploitation in the policy space while maintaining safety constraints. Extensive experiments demonstrate significant improvements in model helpfulness, harmlessness, and honesty compared to standard fine-tuning approaches. The method shows particular promise for scenarios requiring nuanced understanding of human preferences and complex ethical considerations.",
    thumbnail: paperThumbnail4
  },
  {
    year: "2025",
    title: "Almost Surely Safe Alignment of Large Language Models at Inference-Time",
    authors: "X Ji, SS Ramesh, M Zimmer, I Bogunovic, J Wang, HB Ammar",
    venue: "arXiv preprint arXiv:2502.01208",
    type: "Preprint",
    abstract: "This paper presents theoretical and practical methods for ensuring almost sure safety in large language model alignment during inference, providing probabilistic guarantees for model behavior. We develop a comprehensive framework that combines online monitoring, adaptive intervention, and probabilistic safety certificates to maintain alignment properties with high confidence. The approach includes novel algorithms for real-time safety assessment and corrective mechanisms that can intervene when potential safety violations are detected. Our theoretical analysis provides formal guarantees on the probability of maintaining safe behavior over extended deployment periods. Empirical evaluation demonstrates the effectiveness of our methods across diverse scenarios, with particular attention to edge cases and adversarial inputs that might compromise model safety.",
    thumbnail: paperThumbnail5
  }
];

const Publications = () => {
  const newestPublications = publications.slice(0, 5);
  
  const publicationsByYear = publications.reduce((acc, paper) => {
    if (!acc[paper.year]) {
      acc[paper.year] = [];
    }
    acc[paper.year].push(paper);
    return acc;
  }, {} as Record<string, typeof publications>);

  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => parseInt(b) - parseInt(a));
  
  const renderPublications = (publicationList: typeof publications) => (
    <div className="space-y-10">
      {publicationList.map((paper, index) => (
        <div key={index} className="flex gap-6">
          <div className="flex-shrink-0">
            <img 
              src={paper.thumbnail} 
              alt={`${paper.title} paper preview`}
              className="w-48 h-64 object-cover rounded border border-border shadow-sm"
            />
          </div>
          <div className="flex-1 space-y-3">
            <h2 className="font-display text-xl font-semibold text-accent-vibrant hover:text-accent-vibrant/80 transition-colors cursor-pointer">
              {paper.title}
            </h2>
            <p className="font-body text-muted-foreground text-sm">
              {paper.authors}
            </p>
            <p className="font-body text-muted-foreground italic text-sm">
              {paper.venue}, {paper.year}
            </p>
            <p className="font-body text-foreground leading-relaxed">
              {paper.abstract}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPublicationsByYear = () => (
    <div className="space-y-12">
      {sortedYears.map(year => (
        <div key={year}>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
            {year}
          </h2>
          <div className="space-y-8">
            {publicationsByYear[year].map((paper, index) => (
              <div key={index} className="space-y-3">
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {paper.authors}
                </p>
                <h3 className="font-display text-lg font-semibold text-accent-vibrant hover:text-accent-vibrant/80 transition-colors">
                  {paper.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  In: {paper.venue}, {paper.year}.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-body text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer">
                    Links
                  </span>
                  <span className="text-muted-foreground">|</span>
                  <span className="font-body text-accent-vibrant hover:text-accent-vibrant/80 cursor-pointer">
                    BibTeX
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="flex justify-between items-start mb-8">
              <div className="text-center flex-1">
                <h1 className="font-display text-4xl font-bold text-foreground mb-4">
                  Publications
                </h1>
                <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                  Research contributions to the scientific community through peer-reviewed 
                  publications in top-tier conferences and journals.
                </p>
              </div>
              
              <div className="bg-muted/50 rounded-lg p-4 ml-8">
                <p className="font-body text-foreground text-sm mb-3">
                  For an up to date publication list:
                </p>
                <a 
                  href="https://scholar.google.com/citations?user=xMvt3NEAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent-vibrant text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-accent-vibrant/90 transition-colors"
                >
                  Google Scholar
                </a>
              </div>
            </div>
          </div>

          <Tabs defaultValue="newest" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="newest">Newest Publications</TabsTrigger>
              <TabsTrigger value="all">All Publications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="newest">
              {renderPublications(newestPublications)}
            </TabsContent>
            
            <TabsContent value="all">
              {renderPublicationsByYear()}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Publications;