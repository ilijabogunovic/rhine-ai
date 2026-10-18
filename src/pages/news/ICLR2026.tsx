import Layout from "@/components/layout/Layout";
import { CategoryTag } from "@/components/brand/Tags";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const papers = [
  {
    title: "wd1: Weighted Policy Optimization for Reasoning in Diffusion Language Models",
    authors: "Xiaohang Tang, Rares Dolga, Sangwoong Yoon, Ilija Bogunovic",
    description:
      "Improving the reasoning capabilities of diffusion-based large language models (dLLMs) through reinforcement learning remains an open problem due to the intractability of likelihood functions. We introduce wd1, a weighted policy optimization algorithm that addresses this challenge by reducing the use of approximated likelihoods. Our approach demonstrates superior performance on reasoning benchmarks while maintaining computational efficiency in diffusion model training.",
    arxiv: "https://arxiv.org/abs/2507.08838",
    github: "https://github.com/xiaohangt/wd1",
    blog: "https://ucl-diffusion-reasoning.github.io/wd1-demo/",
  },
  {
    title: "Robust Multi-Objective Controlled Decoding of Large Language Models",
    authors: "Seongho Son, William Bankes, Sangwoong Yoon, Shyam Sundhar Ramesh, Xiaohang Tang, Ilija Bogunovic",
    description:
      "Test-time alignment of Large Language Models to human preferences typically relies on predefined weights or averages, leading to unbalanced outcomes across multiple objectives. We introduce Robust Multi-Objective Decoding (RMOD), a novel inference-time algorithm that optimizes worst-case rewards through a maximin game formulation. RMOD achieves equitable alignment across diverse objectives with minimal computational overhead, outperforming baselines by up to 20% while maintaining efficiency for contemporary LLMs.",
    arxiv: "https://arxiv.org/abs/2503.08796",
    github: "https://github.com/williambankes/robust-multi-objective-decoding",
    video: "https://recorder-v3.slideslive.com/?share=108956&s=5022e321-8033-420d-9f2c-eacd91eea12b",
  },
];

const ICLR2026 = () => {
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
              Rhine AI at ICLR 2026 in Rio 🇧🇷
            </h1>
            <p className="t-1 mt-4 text-ink-soft">April 2026 <CategoryTag type="Announcement" className="ml-2" /></p>
          </div>

          <div className="max-w-none mb-10">
            <p className="font-body text-ink leading-relaxed text-lg">
              Rhine AI students and collaborators presented two papers at the International
              Conference on Learning Representations (ICLR) 2026 in Rio de Janeiro, Brazil.
              We appreciate all the interest and feedback we received at the poster session.
              Big congratulations to the authors for the excellent work!
            </p>
          </div>

          <h2 className="t-3 font-semibold text-ink pt-8 mb-6">
            wd1: Weighted Policy Optimization for Reasoning in Diffusion Language Models
          </h2>

          <img src="/iclr2026/wd1_1.jpg" alt="wd1 paper" className="w-full h-auto mb-6" />

          <h2 className="t-3 font-semibold text-ink pt-8 mb-6">
            Robust Multi-Objective Controlled Decoding of Large Language Models
          </h2>

          <img src="/iclr2026/rmod.jpg" alt="RMOD paper" className="w-full h-auto mb-6" />

          <h2 className="t-3 font-semibold text-ink pt-8 mb-6">
            Details of Presented Papers
          </h2>

          <div className="space-y-6">
            {papers.map((paper, index) => (
              <Card key={index}>
                <CardHeader>
                  <h3 className="t-2 font-body font-semibold text-ink">
                    {paper.title}
                  </h3>
                  <p className="font-body text-sm text-carmine">{paper.authors}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-ink-soft leading-relaxed mb-4">
                    {paper.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <a href={paper.arxiv} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        arXiv
                      </Button>
                    </a>
                    {paper.github && (
                      <a href={paper.github} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          GitHub
                        </Button>
                      </a>
                    )}
                    {paper.blog && (
                      <a href={paper.blog} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          Blog
                        </Button>
                      </a>
                    )}
                    {paper.video && (
                      <a href={paper.video} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          Video
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ICLR2026;
