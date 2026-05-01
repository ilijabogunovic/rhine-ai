import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Icml2026 = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-primary hover:underline text-sm mb-8 inline-block">
            &larr; Back to Home
          </Link>

          <div className="mb-8">
            <span className="text-sm font-medium text-accent-vibrant">Publication</span>
            <span className="text-sm text-muted-foreground ml-4">May 2026</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Three Rhine AI Lab Papers Accepted to ICML 2026 🇰🇷
          </h1>

          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
            We are excited to announce that three papers from the Rhine AI Lab have been accepted to the International Conference on Machine Learning (ICML) 2026, taking place in Seoul, South Korea.
          </p>

          <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
            Accepted Papers
          </h2>

          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Multi-Task GRPO: Reliable LLM Reasoning Across Tasks
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">
                  Shyam Sundhar Ramesh, Xiaotong Ji, Matthieu Zimmer, Sangwoong Yoon, Zhiyong Wang, Haitham Bou Ammar, Aurelien Lucchi, Ilija Bogunovic
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  RSPO: Regularized Self-Play Alignment of Large Language Models
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">
                  Xiaohang Tang, Sangwoong Yoon, Seongho Son, Huizhuo Yuan, Quanquan Gu, Ilija Bogunovic
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Robust Bayesian Optimisation with Unbounded Corruptions
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">
                  Abdelhamid Ezzerg, Ilija Bogunovic, Jeremias Knoblauch
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="font-body text-lg text-muted-foreground leading-relaxed mt-8">
            Congratulations to all authors and collaborators. We look forward to presenting this work in Seoul!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Icml2026;
