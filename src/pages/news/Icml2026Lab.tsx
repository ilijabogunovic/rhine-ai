import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Icml2026Lab = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/news" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>

          <div className="mb-10">
            <span className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 rounded-full">
              Conference
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-2">
              Rhine AI Lab at ICML 2026 in Seoul 🇰🇷
            </h1>
            <p className="text-muted-foreground">July 2026</p>
          </div>

          <div className="mb-10">
            <p className="font-body text-foreground leading-relaxed text-lg">
              Rhine AI Lab will be at ICML 2026 in Seoul with three main-conference and several workshop papers.
              The accepted works span LLM reasoning, self-play alignment, robust Bayesian optimization,
              agentic software engineering, and diffusion language models.
            </p>
            <p className="font-body text-foreground leading-relaxed text-lg mt-4">
              If you are attending ICML, come find us to discuss the papers, exchange ideas, and say hello.
            </p>
            <img
              src="/news/RhineAI_ICML2026_landscape.svg"
              alt="Rhine AI Lab papers and workshop presentations at ICML 2026"
              className="w-full h-auto rounded-xl mt-8 shadow-card"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Icml2026Lab;
