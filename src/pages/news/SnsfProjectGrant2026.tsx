import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const SnsfProjectGrant2026 = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/news" className="text-primary hover:underline text-sm mb-8 inline-block">
            &larr; Back to News
          </Link>

          <div className="mb-8">
            <span className="text-sm font-medium text-accent-vibrant">Announcement</span>
            <span className="text-sm text-muted-foreground ml-4">September 2026</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ilija Bogunovic Receives SNSF Project Grant for Research on Diffusion Language Models
          </h1>

          <div className="space-y-6">
            <p className="font-body text-lg text-foreground leading-relaxed">
              Ilija Bogunovic has been awarded a Project Grant by the Swiss National Science Foundation (SNSF) for the project <em>Foundations of Post-Training for Reasoning in Diffusion Large Language Models</em>.
            </p>
            <p className="font-body text-lg text-foreground leading-relaxed">
              The four-year project starts in January 2027 and will be carried out at the Rhine AI Lab, University of Basel. It will investigate the foundations of post-training methods for improving reasoning in diffusion language models.
            </p>
            <p className="font-body text-lg text-foreground leading-relaxed">
              PhD and postdoc openings connected to the project will be announced soon.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SnsfProjectGrant2026;
