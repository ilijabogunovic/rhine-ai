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
    abstract: "We present FairNet, a comprehensive framework for detecting and mitigating bias in deep neural networks..."
  },
  {
    year: "2024",
    title: "Federated Learning with Privacy-Preserving Gradient Compression",
    authors: "A. Kumar, L. Zhang, S. Chen",
    venue: "Neural Information Processing Systems (NeurIPS)",
    type: "Conference Paper",
    abstract: "This paper introduces a novel approach to federated learning that maintains privacy while significantly reducing communication overhead..."
  },
  {
    year: "2023",
    title: "Climate Prediction Models Using Multi-Modal Deep Learning",
    authors: "M. Rodriguez, J. Thompson, K. Williams",
    venue: "Nature Machine Intelligence",
    type: "Journal Article",
    abstract: "We develop advanced neural architectures that integrate satellite imagery, weather data, and climate models for improved prediction accuracy..."
  },
  {
    year: "2023",
    title: "Explainable AI for Medical Diagnosis: A Comprehensive Survey",
    authors: "J. Thompson, S. Chen, A. Kumar",
    venue: "IEEE Transactions on Medical Imaging",
    type: "Survey Paper",
    abstract: "This survey examines the current state of explainable AI in medical applications, highlighting key challenges and future directions..."
  }
];

const Publications = () => {
  const newestPublications = publications.filter(paper => paper.year === "2024");
  
  const renderPublications = (publicationList: typeof publications) => (
    <div className="space-y-6">
      {publicationList.map((paper, index) => (
        <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow duration-300">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
              <div className="flex-1">
                <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                  {paper.title}
                </h2>
                <p className="font-body text-muted-foreground mb-1">
                  {paper.authors}
                </p>
                <p className="font-body text-sm text-accent-vibrant font-medium">
                  {paper.venue} • {paper.type}
                </p>
              </div>
              <span className="font-body text-sm text-muted-foreground font-medium">
                {paper.year}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="font-body text-muted-foreground">
              {paper.abstract}
            </p>
          </CardContent>
        </Card>
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
              {renderPublications(publications)}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Publications;