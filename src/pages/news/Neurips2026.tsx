import Layout from "@/components/layout/Layout";
import { CategoryTag } from "@/components/brand/Tags";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Neurips2026 = () => {
  return (
    <Layout>
      <div className="wrap pb-[var(--section)] pt-10">
        <div>
          <Link to="/news" className="link t-1 mb-10 inline-block font-medium">
            &larr; Back to News
          </Link>

          <h1 className="t-4 font-semibold text-ink mb-6">
            Rhine AI Lab Has Four Papers Accepted to NeurIPS 2026
          </h1>

          <div className="mb-8 mt-4">
            <CategoryTag type="Publication" />
            <span className="t-1 ml-3 text-ink-soft">September 2026</span>
          </div>

          <p className="t-2 text-ink-soft leading-relaxed mb-8">
            We are excited to announce that four papers from the Rhine AI Lab have been accepted to the Conference on Neural Information Processing Systems (NeurIPS) 2026.
          </p>

          <h2 className="t-3 font-semibold text-ink pt-8 mb-6">
            Accepted Papers
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <h3 className="t-2 font-body font-semibold text-ink">
                  GDSD: Reinforcement Learning as Guided Denoiser Self-Distillation for Diffusion Language Models
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-ink-soft mb-3">
                  Xiaohang Tang, Keyue Jiang, Che Liu, Qifang Zhao, Xiaoxiao Xu, Sangwoong Yoon, Ilija Bogunovic
                </p>
                <a href="https://arxiv.org/abs/2605.29398" target="_blank" rel="noopener noreferrer" className="link">
                  Read the paper on arXiv
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="t-2 font-body font-semibold text-ink">
                  Meta-Learning Preferences for Multilingual LLM Alignment
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-ink-soft mb-3">
                  Jiaying Lin, Seongho Son, Nam Phuong Tran, Long Tran-Thanh, Ilija Bogunovic, Debmalya Mandal
                </p>
                <a href="https://arxiv.org/abs/2607.13315" target="_blank" rel="noopener noreferrer" className="link">
                  Read the paper on arXiv
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="t-2 font-body font-semibold text-ink">
                  Re-evaluating Confidence Remasking in Masked Diffusion Language Models
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-ink-soft mb-3">
                  Stipe Frkovic, Metod Jazbec, Dan Zhang, Christian A. Naesseth, Ilija Bogunovic, Eric Nalisnick
                </p>
                <a href="https://arxiv.org/abs/2606.12232" target="_blank" rel="noopener noreferrer" className="link">
                  Read the paper on arXiv
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="t-2 font-body font-semibold text-ink">
                  LLM-WikiRace: A Benchmark for Planning and Reasoning over Real-World Knowledge Graphs
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-body text-ink-soft mb-3">
                  Juliusz Ziomek, William Bankes, Lorenz Wolf, Shyam Sundhar Ramesh, Xiaohang Tang, Ilija Bogunovic
                </p>
                <a href="https://arxiv.org/abs/2602.16902" target="_blank" rel="noopener noreferrer" className="link">
                  Read the paper on arXiv
                </a>
              </CardContent>
            </Card>
          </div>

          <p className="t-2 text-ink-soft leading-relaxed mt-8">
            Congratulations to all authors and collaborators. We look forward to presenting this work at NeurIPS 2026!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Neurips2026;
