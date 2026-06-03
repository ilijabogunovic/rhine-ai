import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


const Macroscopic2026 = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/news" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>

          <div className="mb-10">
            <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded-full">
              Announcement
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-2">
              Macroscopic Ventures supports RHINE AI research through a research gift
            </h1>
            <p className="text-muted-foreground">June 2026</p>
          </div>

          <div className="prose prose-lg max-w-none mb-10">
          <img src="/other_images/macroscopic_ventures.jpg" alt="Macroscopic Ventures Logo" className="w-auto h-auto rounded-lg mb-6" />
            <p className="font-body text-foreground leading-relaxed text-lg">
            We are grateful to Macroscopic Ventures for supporting our research through a generous research gift.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-10">
            <p className="font-body text-foreground leading-relaxed text-lg">
            This support will help advance our work on reliable and human-aligned AI systems, with a particular focus on developing open-source post-training algorithms for language models. Our goal is to make AI systems more robust, adaptable, and pluralistic — able to align with diverse human values while remaining practically useful for the wider research community.
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-10">
            <p className="font-body text-foreground leading-relaxed text-lg">
            We thank Macroscopic Ventures for their trust and support, and for their commitment to supporting projects aimed at building a future guided by reason and compassion.
            </p>
          </div>


          
        </div>
      </div>
    </Layout>
  );
};

export default Macroscopic2026;
