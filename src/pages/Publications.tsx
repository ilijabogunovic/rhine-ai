import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const publications = [
  {
    year: "2024",
    title: "Group robust preference optimization in reward-free rlhf",
    authors: "SS Ramesh, Y Hu, I Chaimalas, V Mehta, PG Sessa, H Bou Ammar, I Bogunovic",
    venue: "Advances in Neural Information Processing Systems 37",
    type: "Conference Paper",
    abstract: "We present a novel approach to group robust preference optimization in reward-free reinforcement learning from human feedback, addressing challenges in multi-agent systems and preference learning...",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=280&fit=crop"
  },
  {
    year: "2021",
    title: "Misspecified gaussian process bandit optimization",
    authors: "I Bogunovic, A Krause",
    venue: "Advances in neural information processing systems 34",
    type: "Conference Paper",
    abstract: "This work studies Gaussian process bandit optimization under model misspecification, providing theoretical analysis and practical algorithms for robust optimization in uncertain environments...",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=280&fit=crop"
  },
  {
    year: "2021",
    title: "Risk-averse heteroscedastic bayesian optimization",
    authors: "A Makarova, I Usmanova, I Bogunovic, A Krause",
    venue: "Advances in Neural Information Processing Systems 34",
    type: "Conference Paper",
    abstract: "We develop risk-averse Bayesian optimization methods that account for heteroscedastic noise, enabling more robust optimization in settings with varying uncertainty levels...",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=280&fit=crop"
  },
  {
    year: "2021",
    title: "Stochastic linear bandits robust to adversarial attacks",
    authors: "I Bogunovic, A Losalka, A Krause, J Scarlett",
    venue: "International Conference on Artificial Intelligence and Statistics",
    type: "Conference Paper",
    abstract: "We investigate stochastic linear bandit algorithms that maintain performance guarantees even under adversarial corruption, providing both theoretical analysis and empirical validation...",
    thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=200&h=280&fit=crop"
  },
  {
    year: "2021",
    title: "DP-Sniper: Black-Box Discovery of Differential Privacy Violations using Classifiers",
    authors: "B Bichsel, S Steffen, I Bogunovic, M Vechev",
    venue: "Security and Privacy Conference",
    type: "Conference Paper",
    abstract: "DP-Sniper is a novel black-box method for discovering differential privacy violations in machine learning systems using classifier-based approaches, providing practical tools for privacy auditing...",
    thumbnail: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=200&h=280&fit=crop"
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
              className="w-32 h-44 object-cover rounded border border-border shadow-sm"
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