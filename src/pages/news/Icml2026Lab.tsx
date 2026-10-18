import Layout from "@/components/layout/Layout";
import { CategoryTag } from "@/components/brand/Tags";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Icml2026Lab = () => {
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
              Rhine AI Lab at ICML 2026 in Seoul 🇰🇷
            </h1>
            <p className="t-1 mt-4 text-ink-soft">July 2026 <CategoryTag type="Conference" className="ml-2" /></p>
          </div>

          <div className="mb-10">
            <p className="font-body text-ink leading-relaxed text-lg">
              Rhine AI Lab will be at ICML 2026 in Seoul with three main-conference and several workshop papers.
              The accepted works span LLM reasoning, self-play alignment, robust Bayesian optimization,
              agentic software engineering, and diffusion language models.
            </p>
            <p className="font-body text-ink leading-relaxed text-lg mt-4">
              If you are attending ICML, come find us to discuss the papers, exchange ideas, and say hello.
            </p>
            <img
              src="/news/RhineAI_ICML2026_landscape.svg"
              alt="Rhine AI Lab papers and workshop presentations at ICML 2026"
              className="w-full h-auto mt-8"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Icml2026Lab;
