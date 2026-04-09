import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import ProtectedDownload from "@/components/ProtectedDownload";

const Teaching = () => {
  return (
    <Layout>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              78174 - Modern Reinforcement Learning: From Agents to LLMs
            </h1>
            <p className="font-body text-lg text-muted-foreground">
              Spring 2026 | University of Basel
            </p>
          </div>

          <div className="space-y-8">
            {/* Logistics */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Logistics
                </h2>
                <ul className="space-y-2 font-body text-muted-foreground">
                  <li><strong className="text-foreground">Course Instructor:</strong> <a href="/team/ilija-bogunovic" className="text-accent-vibrant hover:underline">Prof. Ilija Bogunovic</a></li>
                  <li><strong className="text-foreground">Institution:</strong> Department of Mathematics & Computer Science, University of Basel</li>
                  <li><strong className="text-foreground">Format:</strong> Lectures + practical exercise sessions (Jupyter/Colab)</li>
                  <li><strong className="text-foreground">Time & Location:</strong> Fridays, 14:00–17:00 — Seminar room 00.003 (ground floor), Spiegelgasse 1</li>
                </ul>
              </CardContent>
            </Card>

            {/* Course Overview */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Course Overview
                </h2>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    This course is a modern, technically rigorous introduction to reinforcement learning (RL), with a focus on how RL ideas power contemporary AI systems, for example, the post-training and alignment pipelines behind large language models (LLMs) such as <strong className="text-foreground">ChatGPT</strong>, <strong className="text-foreground">Gemini</strong>, and <strong className="text-foreground">Claude</strong>.
                  </p>
                  <p>
                    We will start from the foundations (MDPs, dynamic programming, value-based and policy-based methods), build up to deep RL (function approximation, actor–critic, PPO), and then connect these tools to modern post-training and agentic settings: imitation learning, preference learning, and fine-tuning and RL-style optimization for LLMs (including supervised fine-tuning, DPO-style objectives, and PPO-style methods), as well as emerging themes around reasoning-oriented training and evaluation.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Topics */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  High-level Topics
                </h2>
                <ul className="space-y-2 font-body text-muted-foreground list-disc list-inside">
                  <li>Formal RL foundations and planning: MDPs, value functions, Bellman operators, dynamic programming (value iteration and policy iteration)</li>
                  <li>Learning in MDPs: Monte Carlo and temporal-difference learning, bias/variance trade-offs, bootstrapping, and exploration</li>
                  <li>Function approximation: linear approximation and neural networks, stability issues, and practical diagnostics</li>
                  <li>Policy optimization: policy gradient theorem, baselines, actor–critic methods, advantage estimation, and PPO-style updates</li>
                  <li>Learning from data and feedback: imitation learning, preference modeling, reward modeling, and practical optimization objectives</li>
                  <li>LLM post-training and alignment: supervised fine-tuning, preference optimization (DPO-style methods), PPO-style RLHF, and evaluation</li>
                  <li>Reasoning-oriented post-training: GRPO-style objectives, reinforcement learning for reasoning models, alignment-focused optimization, and practical engineering techniques such as LoRA and efficient fine-tuning pipelines</li>
                </ul>
                <p className="mt-4 font-body text-sm text-muted-foreground italic">
                  Note: As this course is being offered for the first time in Spring 2026, some elements are likely to change over the first offering.
                </p>
              </CardContent>
            </Card>

            {/* Learning Objectives */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Learning Objectives
                </h2>
                <p className="font-body text-muted-foreground mb-4">By the end of the course, students should be able to:</p>
                <ol className="space-y-2 font-body text-muted-foreground list-decimal list-inside">
                  <li>Derive key RL objectives and algorithms (Bellman equations, policy gradients, actor–critic) and translate them into working implementations.</li>
                  <li>Implement and debug modern policy-optimization methods in practice (PPO-style updates, advantage estimation, KL/ratio control, and other stabilization tricks).</li>
                  <li>Understand LLM post-training pipelines end-to-end: supervised fine-tuning, preference modeling, and RLHF-style optimization, including what is being optimized and what can go wrong.</li>
                  <li>Compare and reason about preference-optimization objectives used for LLM alignment (e.g., DPO-style methods and related variants such as GRPO), including their assumptions, trade-offs, and failure modes.</li>
                  <li>Understand and implement core methods used to train reasoning-oriented models.</li>
                </ol>
              </CardContent>
            </Card>

            {/* Prerequisites */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Prerequisites
                </h2>
                <ul className="space-y-2 font-body text-muted-foreground list-disc list-inside">
                  <li>Strong Python programming (NumPy + basic PyTorch familiarity)</li>
                  <li>Linear algebra, probability, and multivariable calculus (gradients)</li>
                  <li>Prior ML background (basic neural nets / optimization / transformers) recommended</li>
                </ul>
              </CardContent>
            </Card>

            {/* Grading */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Grading (tentative)
                </h2>
                <p className="font-body text-muted-foreground">
                  <strong className="text-foreground">Final exam:</strong> 100%
                </p>
              </CardContent>
            </Card>

            {/* Practical Exercises */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Practical Exercises
                </h2>
                <div className="font-body text-muted-foreground space-y-4">
                  <p>A major component of the course is hands-on implementation in Colab/Jupyter notebooks.</p>
                  <p>Each assignment will typically include:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>A <strong className="text-foreground">coding</strong> part (implement/extend an algorithm, run experiments)</li>
                    <li>A short <strong className="text-foreground">conceptual</strong> part (derive key equations, interpret results)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Lectures Schedule */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Lectures
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full font-body text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 text-foreground font-semibold">Week</th>
                        <th className="text-left py-2 px-2 text-foreground font-semibold">Date</th>
                        <th className="text-left py-2 px-2 text-foreground font-semibold">Topic</th>
                        <th className="text-left py-2 px-2 text-foreground font-semibold">Material</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50"><td className="py-2 px-2">1</td><td className="py-2 px-2">Feb 20, 2026</td><td className="py-2 px-2">Introduction; MDPs & Bellman equations</td><td className="py-2 px-2"><ProtectedDownload href="/lectures/lecture1.pdf" filename="lecture1.pdf" password="rl">Slides</ProtectedDownload> / <ProtectedDownload href="/lectures/lecture1_annotated.pdf" filename="lecture1_annotated.pdf" password="rl">Annotated</ProtectedDownload></td></tr>
                      <tr className="border-b border-border/50 bg-muted/30"><td className="py-2 px-2">2</td><td className="py-2 px-2">Feb 27, 2026</td><td className="py-2 px-2 italic">No class</td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">3</td><td className="py-2 px-2">Mar 6, 2026</td><td className="py-2 px-2">MC & TD Learning; Model-free Control</td><td className="py-2 px-2"><ProtectedDownload href="/lectures/lecture2.pdf" filename="lecture2.pdf" password="rl">Slides</ProtectedDownload> / <ProtectedDownload href="/lectures/lecture2_annotated.pdf" filename="lecture2_annotated.pdf" password="rl">Annotated</ProtectedDownload> / <ProtectedDownload href="/lectures/td_value_propagation_demo.html" filename="td_value_propagation_demo.html" password="rl">Demo</ProtectedDownload></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">4</td><td className="py-2 px-2">Mar 13, 2026</td><td className="py-2 px-2">Function Approximation & Deep RL</td><td className="py-2 px-2"><ProtectedDownload href="/lectures/lecture3.pdf" filename="lecture3.pdf" password="rl">Slides</ProtectedDownload> / <ProtectedDownload href="/lectures/lecture3_annotated.pdf" filename="lecture3_annotated.pdf" password="rl">Annotated</ProtectedDownload> / <ProtectedDownload href="/lectures/td_fa_demo.html" filename="td_fa_demo.html" password="rl">Demo</ProtectedDownload> / <ProtectedDownload href="/lectures/linear_td_convergence.pdf" filename="linear_td_convergence.pdf" password="rl">Note</ProtectedDownload></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">5</td><td className="py-2 px-2">Mar 20, 2026</td><td className="py-2 px-2">Policy Gradients & Actor-Critic</td><td className="py-2 px-2"><ProtectedDownload href="/lectures/lecture4.pdf" filename="lecture4.pdf" password="rl">Slides</ProtectedDownload> / <ProtectedDownload href="/lectures/lecture4_annotated.pdf" filename="lecture4_annotated.pdf" password="rl">Annotated</ProtectedDownload></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">6</td><td className="py-2 px-2">Mar 27, 2026</td><td className="py-2 px-2">PPO, TRPO & Modern Policy Optimization</td><td className="py-2 px-2"><ProtectedDownload href="/lectures/lecture5.pdf" filename="lecture5.pdf" password="rl">Slides</ProtectedDownload></td></tr>
                      <tr className="border-b border-border/50 bg-muted/30"><td className="py-2 px-2">7</td><td className="py-2 px-2">Apr 3, 2026</td><td className="py-2 px-2 italic">No class</td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">8</td><td className="py-2 px-2">Apr 10, 2026</td><td className="py-2 px-2">Imitation Learning & Offline RL</td><td className="py-2 px-2"><ProtectedDownload href="/lectures/lecture6.pdf" filename="lecture6.pdf" password="rl">Slides</ProtectedDownload></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">9</td><td className="py-2 px-2">Apr 17, 2026</td><td className="py-2 px-2"></td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">10</td><td className="py-2 px-2">Apr 24, 2026</td><td className="py-2 px-2"></td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50 bg-muted/30"><td className="py-2 px-2">11</td><td className="py-2 px-2">May 1, 2026</td><td className="py-2 px-2 italic">No class</td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">12</td><td className="py-2 px-2">May 8, 2026</td><td className="py-2 px-2"></td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50 bg-muted/30"><td className="py-2 px-2">13</td><td className="py-2 px-2">May 15, 2026</td><td className="py-2 px-2 italic">No class</td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">14</td><td className="py-2 px-2">May 22, 2026</td><td className="py-2 px-2"></td><td className="py-2 px-2"></td></tr>
                      <tr><td className="py-2 px-2">15</td><td className="py-2 px-2">May 29, 2026</td><td className="py-2 px-2"></td><td className="py-2 px-2"></td></tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Exercises Schedule */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Exercises
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full font-body text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-2 text-foreground font-semibold">Week</th>
                        <th className="text-left py-2 px-2 text-foreground font-semibold">Date</th>
                        <th className="text-left py-2 px-2 text-foreground font-semibold">Topic</th>
                        <th className="text-left py-2 px-2 text-foreground font-semibold">Material</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50 bg-muted/30"><td className="py-2 px-2">1</td><td className="py-2 px-2">Feb 20, 2026</td><td className="py-2 px-2 italic">No class</td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50 bg-muted/30"><td className="py-2 px-2">2</td><td className="py-2 px-2">Feb 27, 2026</td><td className="py-2 px-2 italic">No class</td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">3</td><td className="py-2 px-2">Mar 6, 2026</td><td className="py-2 px-2">MDPs & Dynamic Programming</td><td className="py-2 px-2"><ProtectedDownload href="/exercises/Exercise1.ipynb" filename="Exercise1.ipynb" password="rl">Exercise 1</ProtectedDownload> / <ProtectedDownload href="/exercises/Exercise1_SOLUTION.ipynb" filename="Exercise1_SOLUTION.ipynb" password="rl">Solution</ProtectedDownload></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">4</td><td className="py-2 px-2">Mar 13, 2026</td><td className="py-2 px-2">MC & TD Learning; Model-free Control</td><td className="py-2 px-2"><ProtectedDownload href="/exercises/Exercise2.ipynb" filename="Exercise2.ipynb" password="rl">Exercise 2</ProtectedDownload> / <ProtectedDownload href="/exercises/Exercise2_SOLUTION.ipynb" filename="Exercise2_SOLUTION.ipynb" password="rl">Solution</ProtectedDownload> / <ProtectedDownload href="/exercises/importance-sampling.pdf" filename="Importance Sampling.pdf" password="rl">Note</ProtectedDownload></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">5</td><td className="py-2 px-2">Mar 20, 2026</td><td className="py-2 px-2">Function Approximation & Deep Q-Learning</td><td className="py-2 px-2"><ProtectedDownload href="/exercises/Exercise3.ipynb" filename="Exercise3.ipynb" password="rl">Exercise 3</ProtectedDownload> / <ProtectedDownload href="/exercises/Exercise3_SOLUTION.ipynb" filename="Exercise3_SOLUTION.ipynb" password="rl">Solution</ProtectedDownload> / <ProtectedDownload href="/exercises/DQN_Atari_Training.ipynb" filename="DQN_Atari_Training.ipynb" password="rl">Atari Demo</ProtectedDownload></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">6</td><td className="py-2 px-2">Mar 27, 2026</td><td className="py-2 px-2">Policy Gradients & Actor-Critic</td><td className="py-2 px-2"><ProtectedDownload href="/exercises/Exercise4.ipynb" filename="Exercise4.ipynb" password="rl">Exercise 4</ProtectedDownload> / <ProtectedDownload href="/exercises/Exercise4_SOLUTION.ipynb" filename="Exercise4_SOLUTION.ipynb" password="rl">Solution</ProtectedDownload></td></tr>
                      <tr className="border-b border-border/50 bg-muted/30"><td className="py-2 px-2">7</td><td className="py-2 px-2">Apr 3, 2026</td><td className="py-2 px-2 italic">No class</td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">8</td><td className="py-2 px-2">Apr 10, 2026</td><td className="py-2 px-2">GAE, TRPO & PPO</td><td className="py-2 px-2"><ProtectedDownload href="/exercises/Exercise5.ipynb" filename="Exercise5.ipynb" password="rl">Exercise 5</ProtectedDownload></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">9</td><td className="py-2 px-2">Apr 17, 2026</td><td className="py-2 px-2"></td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">10</td><td className="py-2 px-2">Apr 24, 2026</td><td className="py-2 px-2"></td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50 bg-muted/30"><td className="py-2 px-2">11</td><td className="py-2 px-2">May 1, 2026</td><td className="py-2 px-2 italic">No class</td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">12</td><td className="py-2 px-2">May 8, 2026</td><td className="py-2 px-2"></td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50 bg-muted/30"><td className="py-2 px-2">13</td><td className="py-2 px-2">May 15, 2026</td><td className="py-2 px-2 italic">No class</td><td className="py-2 px-2"></td></tr>
                      <tr className="border-b border-border/50"><td className="py-2 px-2">14</td><td className="py-2 px-2">May 22, 2026</td><td className="py-2 px-2"></td><td className="py-2 px-2"></td></tr>
                      <tr><td className="py-2 px-2">15</td><td className="py-2 px-2">May 29, 2026</td><td className="py-2 px-2"></td><td className="py-2 px-2"></td></tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* AI Policy */}
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  AI Policy (draft)
                </h2>
                <div className="font-body text-muted-foreground space-y-4">
                  <p>You may use AI assistants for learning and for debugging during assignments, <strong className="text-foreground">but</strong>:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>You must be able to explain and reproduce key parts of your solution.</li>
                    <li>Any in-class evaluation (if applicable) is <strong className="text-foreground">closed-book</strong> and <strong className="text-foreground">no AI tools</strong>.</li>
                    <li>If you use AI tools, treat them like a tutor: verify outputs, cite assumptions, and make sure you understand what you submit.</li>
                  </ul>
                  <p className="text-sm italic">(Exact policy and evaluation format will be finalized once grading is finalized.)</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Teaching;
