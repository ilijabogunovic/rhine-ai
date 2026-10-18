import Layout from "@/components/layout/Layout";
import { CategoryTag } from "@/components/brand/Tags";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


const Macroscopic2026 = () => {
  return (
    <Layout>
      <div className="wrap pb-[var(--section)] pt-10">
        <div>
          <Link to="/news" className="link t-1 mb-10 inline-flex items-center font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>

          <div className="mb-10">
            <h1 className="t-4 font-semibold text-ink mb-2">
              Macroscopic Ventures supports RHINE AI research through a research gift
            </h1>
            <p className="t-1 mt-4 text-ink-soft">June 2026 <CategoryTag type="Announcement" className="ml-2" /></p>
          </div>

          <div className="max-w-none mb-10">
          <img src="/other_images/macroscopic_ventures.jpg" alt="Macroscopic Ventures Logo" className="w-auto h-auto mb-6" />
            <p className="font-body text-ink leading-relaxed text-lg">
            We are grateful to Macroscopic Ventures for supporting our research through a generous research gift.
            </p>
          </div>

          <div className="max-w-none mb-10">
            <p className="font-body text-ink leading-relaxed text-lg">
            This support will help advance our work on reliable and human-aligned AI systems, with a particular focus on developing open-source post-training algorithms for language models. Our goal is to make AI systems more robust, adaptable, and pluralistic — able to align with diverse human values while remaining practically useful for the wider research community.
            </p>
          </div>

          <div className="max-w-none mb-10">
            <p className="font-body text-ink leading-relaxed text-lg">
            We thank Macroscopic Ventures for their trust and support, and for their commitment to supporting projects aimed at building a future guided by reason and compassion.
            </p>
          </div>


          
        </div>
      </div>
    </Layout>
  );
};

export default Macroscopic2026;
