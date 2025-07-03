import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const blogPosts = [
  {
    date: "December 12, 2024",
    title: "The Future of Federated Learning: Privacy and Performance",
    author: "Dr. Arun Kumar",
    excerpt: "Exploring how federated learning is reshaping AI development while maintaining user privacy. We dive into the latest advances and challenges in distributed machine learning.",
    readTime: "8 min read",
    category: "Technical"
  },
  {
    date: "December 8, 2024",
    title: "Building Ethical AI: Lessons from Our Bias Detection Research",
    author: "Dr. Sarah Chen",
    excerpt: "Our journey in developing FairNet and what we've learned about creating more equitable AI systems. Key insights for practitioners and researchers.",
    readTime: "12 min read",
    category: "Ethics"
  },
  {
    date: "December 3, 2024",
    title: "AI for Climate Science: Early Results and Future Directions",
    author: "Dr. Miguel Rodriguez",
    excerpt: "How our climate prediction models are performing and what they tell us about the role of AI in understanding climate change.",
    readTime: "10 min read",
    category: "Applications"
  },
  {
    date: "November 28, 2024",
    title: "Open Source AI: Why We Released FairNet to the Community",
    author: "Dr. Jessica Thompson",
    excerpt: "The philosophy behind our decision to open-source our bias detection framework and how the community can contribute to responsible AI development.",
    readTime: "6 min read",
    category: "Community"
  },
  {
    date: "November 20, 2024",
    title: "From Theory to Practice: Implementing Explainable AI in Healthcare",
    author: "Dr. Jessica Thompson",
    excerpt: "Real-world challenges and solutions in deploying explainable AI systems in medical settings. Case studies and practical guidelines.",
    readTime: "15 min read",
    category: "Applications"
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Research Blog
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Insights, discoveries, and perspectives from our AI research team.
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                      {post.category}
                    </span>
                    <div className="text-sm text-muted-foreground">
                      {post.date} • {post.readTime}
                    </div>
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-accent-vibrant">
                    by {post.author}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;