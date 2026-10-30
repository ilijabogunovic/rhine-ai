import Layout from "@/components/layout/Layout";
import { CategoryTag } from "@/components/brand/Tags";
import { Link } from "react-router-dom";

const ErcStartingGrant2026 = () => {
  return (
    <Layout>
      <div className="wrap pb-[var(--section)] pt-10">
        <div>
          <Link to="/news" className="link t-1 mb-10 inline-block font-medium">
            &larr; Back to News
          </Link>

          <h1 className="t-4 font-semibold text-ink mb-6">
            Ilija Bogunovic Receives ERC Starting Grant for Research on Aligning Large Language Models
          </h1>

          <div className="mb-8 mt-4">
            <CategoryTag type="Announcement" />
            <span className="t-1 ml-3 text-ink-soft">October 2026</span>
          </div>

          <div className="space-y-6">
            <p className="t-2 text-ink leading-relaxed">
              Ilija Bogunovic has been awarded a Starting Grant from the European Research Council (ERC) for the project <em>AlgoAlign: Efficient and Pluralistic Alignment for Reliable Large Language Models</em>.
            </p>
            <p className="t-2 text-ink leading-relaxed">
              The five-year project will be carried out at the Rhine AI Lab, University of Basel. It will investigate the algorithmic foundations of post-training for large language models. It will develop efficient methods that improve their reasoning and align them with the diverse and sometimes conflicting preferences of different users and groups. The aim is to make these models more reliable, capable, and representative.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ErcStartingGrant2026;
