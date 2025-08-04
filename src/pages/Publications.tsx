import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const publications = [
  {
    year: "2024",
    title: "FairNet: A Novel Framework for Bias Detection in Neural Networks",
    authors: "S. Chen, M. Rodriguez, A. Kumar, J. Thompson",
    venue: "International Conference on Machine Learning (ICML)",
    type: "Conference Paper",
    abstract: "We present FairNet, a comprehensive framework for detecting and mitigating bias in deep neural networks...",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=280&fit=crop"
  },
  {
    year: "2024",
    title: "Federated Learning with Privacy-Preserving Gradient Compression",
    authors: "A. Kumar, L. Zhang, S. Chen",
    venue: "Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    abstract: "This paper introduces a novel approach to federated learning that maintains privacy while significantly reducing communication overhead...",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=280&fit=crop"
  },
  {
    year: "2023",
    title: "Climate Prediction Models Using Multi-Modal Deep Learning",
    authors: "M. Rodriguez, J. Thompson, K. Williams",
    venue: "Nature Machine Intelligence",
    type: "Journal Article",
    abstract: "We develop advanced neural architectures that integrate satellite imagery, weather data, and climate models for improved prediction accuracy...",
    thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=280&fit=crop"
  },
  {
    year: "2023",
    title: "Explainable AI for Medical Diagnosis: A Comprehensive Survey",
    authors: "J. Thompson, S. Chen, A. Kumar",
    venue: "IEEE Transactions on Medical Imaging",
    type: "Survey Paper",
    abstract: "This survey examines the current state of explainable AI in medical applications, highlighting key challenges and future directions...",
    thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=200&h=280&fit=crop"
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
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Publications
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              Our research contributions to the scientific community through peer-reviewed 
              publications in top-tier conferences and journals.
            </p>
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