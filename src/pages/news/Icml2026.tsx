import Layout from "@/components/layout/Layout";
import { CategoryTag } from "@/components/brand/Tags";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Icml2026 = () => {
  return (
    <Layout>
      <div className="wrap pb-[var(--section)] pt-10">
        <div>
          <Link to="/" className="link t-1 mb-10 inline-block font-medium">
            &larr; Back to Home
          </Link>

          <h1 className="t-4 font-semibold text-ink mb-6">
            Three Rhine AI Lab Papers Accepted to ICML 2026 🇰🇷
          </h1>

          <div className="mb-8 mt-4">
            <CategoryTag type="Publication" />
            <span className="t-1 ml-3 text-ink-soft">May 2026</span>
          </div>

          <p className="t-2 text-ink-soft leading-relaxed mb-8">
            We are excited to announce that three papers from the Rhine AI Lab have been accepted to the International Conference on Machine Learning (ICML) 2026, taking place in Seoul, South Korea.
          </p>

          <h2 className="t-3 font-semibold text-ink pt-8 mb-6">
            Accepted Papers
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="t-2 font-body font-semibold text-ink">
                  Multi-Task GRPO: Reliable LLM Reasoning Across Tasks
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-ink-soft">
                  Shyam Sundhar Ramesh, Xiaotong Ji, Matthieu Zimmer, Sangwoong Yoon, Zhiyong Wang, Haitham Bou Ammar, Aurelien Lucchi, Ilija Bogunovic
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="t-2 font-body font-semibold text-ink">
                  RSPO: Regularized Self-Play Alignment of Large Language Models
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-ink-soft">
                  Xiaohang Tang, Sangwoong Yoon, Seongho Son, Huizhuo Yuan, Quanquan Gu, Ilija Bogunovic
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="t-2 font-body font-semibold text-ink">
                  Robust Bayesian Optimisation with Unbounded Corruptions
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-ink-soft">
                  Abdelhamid Ezzerg, Ilija Bogunovic, Jeremias Knoblauch
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="t-2 text-ink-soft leading-relaxed mt-8">
            Congratulations to all authors and collaborators. We look forward to presenting this work in Seoul!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Icml2026;
