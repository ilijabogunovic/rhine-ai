import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Neurips2026 = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/news" className="text-primary hover:underline text-sm mb-8 inline-block">
            &larr; Back to News
          </Link>

          <div className="mb-8">
            <span className="text-sm font-medium text-accent-vibrant">Publication</span>
            <span className="text-sm text-muted-foreground ml-4">September 2026</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Rhine AI Lab Has Four Papers Accepted to NeurIPS 2026
          </h1>

          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
            We are excited to announce that four papers from the Rhine AI Lab have been accepted to the Conference on Neural Information Processing Systems (NeurIPS) 2026.
          </p>

          <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
            Accepted Papers
          </h2>

          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  GDSD: Reinforcement Learning as Guided Denoiser Self-Distillation for Diffusion Language Models
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground mb-3">
                  Xiaohang Tang, Keyue Jiang, Che Liu, Qifang Zhao, Xiaoxiao Xu, Sangwoong Yoon, Ilija Bogunovic
                </p>
                <a href="https://arxiv.org/abs/2605.29398" target="_blank" rel="noopener noreferrer" className="text-accent-vibrant hover:underline">
                  Read the paper on arXiv
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Meta-Learning Preferences for Multilingual LLM Alignment
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground mb-3">
                  Jiaying Lin, Seongho Son, Nam Phuong Tran, Long Tran-Thanh, Ilija Bogunovic, Debmalya Mandal
                </p>
                <a href="https://arxiv.org/abs/2607.13315" target="_blank" rel="noopener noreferrer" className="text-accent-vibrant hover:underline">
                  Read the paper on arXiv
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  Re-evaluating Confidence Remasking in Masked Diffusion Language Models
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground mb-3">
                  Stipe Frkovic, Metod Jazbec, Dan Zhang, Christian A. Naesseth, Ilija Bogunovic, Eric Nalisnick
                </p>
                <a href="https://arxiv.org/abs/2606.12232" target="_blank" rel="noopener noreferrer" className="text-accent-vibrant hover:underline">
                  Read the paper on arXiv
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  LLM-WikiRace: A Benchmark for Planning and Reasoning over Real-World Knowledge Graphs
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground mb-3">
                  Juliusz Ziomek, William Bankes, Lorenz Wolf, Shyam Sundhar Ramesh, Xiaohang Tang, Ilija Bogunovic
                </p>
                <a href="https://arxiv.org/abs/2602.16902" target="_blank" rel="noopener noreferrer" className="text-accent-vibrant hover:underline">
                  Read the paper on arXiv
                </a>
              </CardContent>
            </Card>
          </div>

          <p className="font-body text-lg text-muted-foreground leading-relaxed mt-8">
            Congratulations to all authors and collaborators. We look forward to presenting this work at NeurIPS 2026!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Neurips2026;
