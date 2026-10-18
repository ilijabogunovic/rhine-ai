import Layout from "@/components/layout/Layout";
import { CategoryTag } from "@/components/brand/Tags";
import { Link } from "react-router-dom";

const SnsfProjectGrant2026 = () => {
  return (
    <Layout>
      <div className="wrap pb-[var(--section)] pt-10">
        <div>
          <Link to="/news" className="link t-1 mb-10 inline-block font-medium">
            &larr; Back to News
          </Link>

          <h1 className="t-4 font-semibold text-ink mb-6">
            Ilija Bogunovic Receives SNSF Project Grant for Research on Diffusion Language Models
          </h1>

          <div className="mb-8 mt-4">
            <CategoryTag type="Announcement" />
            <span className="t-1 ml-3 text-ink-soft">September 2026</span>
          </div>

          <div className="space-y-6">
            <p className="t-2 text-ink leading-relaxed">
              Ilija Bogunovic has been awarded a Project Grant by the Swiss National Science Foundation (SNSF) for the project <em>Foundations of Post-Training for Reasoning in Diffusion Large Language Models</em>.
            </p>
            <p className="t-2 text-ink leading-relaxed">
              The four-year project starts in January 2027 and will be carried out at the Rhine AI Lab, University of Basel. It will investigate the foundations of post-training methods for improving reasoning in diffusion language models.
            </p>
            <p className="t-2 text-ink leading-relaxed">
              PhD and postdoc openings connected to the project will be announced soon.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SnsfProjectGrant2026;
