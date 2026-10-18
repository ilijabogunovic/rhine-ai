import type { ReactNode } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/brand/PageHeader";
import Reveal from "@/components/brand/Reveal";
import { Bullet } from "@/components/brand/Tags";
import ProtectedDownload from "@/components/ProtectedDownload";
import TeachingNav from "@/components/brand/TeachingNav";

const Block = ({ id, title, children, wide = false }: { id?: string; title: string; children: ReactNode; wide?: boolean }) => (
  <section id={id} className="scroll-mt-20 grid gap-6 py-14 lg:grid-cols-12 lg:gap-8" aria-labelledby={`${id ?? title}-title`}>
    <h2 id={`${id ?? title}-title`} className="t-3 font-semibold text-ink lg:col-span-3">
      {title}
    </h2>
    <Reveal className={`t-2 space-y-4 text-ink ${wide ? "lg:col-span-9" : "max-w-[66ch] lg:col-span-8"}`}>{children}</Reveal>
  </section>
);

const Bullets = ({ items }: { items: ReactNode[] }) => (
  <ul className="space-y-2.5">
    {items.map((item, i) => (
      <li key={i} className="flex items-baseline gap-3">
        <Bullet />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Schedule = ({ caption, children }: { caption: string; children: ReactNode }) => (
  <div className="-mx-[var(--gutter)] overflow-x-auto px-[var(--gutter)]">
    <table className="t-1 w-full min-w-[40rem] border-collapse text-left [&_tbody_tr]:border-b [&_tbody_tr]:border-beige [&_a]:font-medium">
      <caption className="sr-only">{caption}</caption>
      <thead>
        <tr className="border-b-2 border-ink">
          <th className="py-3 pr-4 font-semibold">Week</th>
          <th className="py-3 pr-4 font-semibold">Date</th>
          <th className="py-3 pr-4 font-semibold">Topic</th>
          <th className="py-3 pr-4 font-semibold">Material</th>
        </tr>
      </thead>
      <tbody className="text-ink">{children}</tbody>
    </table>
  </div>
);

const ModernRL2026 = () => {
  return (
    <Layout>
      <TeachingNav />
      <PageHeader title="Modern Reinforcement Learning" long>
        <p className="t-3 mt-6 font-display text-ink">78174 · From Agents to LLMs</p>
        <p className="t-2 mt-3 text-ink-soft">Spring 2026 | University of Basel</p>
      </PageHeader>

      <div className="wrap pb-[var(--section)]">
        <section className="bg-paper-2 p-7 sm:p-10" aria-labelledby="logistics-title">
          <h2 id="logistics-title" className="t-3 font-semibold text-ink">Logistics</h2>
          <dl className="t-2 mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="font-semibold text-ink">Course Instructor</dt>
              <dd className="mt-1"><a href="/team/ilija-bogunovic" className="link">Prof. Ilija Bogunovic</a></dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Institution</dt>
              <dd className="mt-1 text-ink-soft">Department of Mathematics & Computer Science, University of Basel</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Format</dt>
              <dd className="mt-1 text-ink-soft">Lectures + practical exercise sessions (Jupyter/Colab)</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Time & Location</dt>
              <dd className="mt-1 text-ink-soft">Fridays, 14:00–17:00, Seminar room 00.003 (ground floor), Spiegelgasse 1</dd>
            </div>
          </dl>
        </section>

        <Block title="Course Overview">
          <p>
            This course is a modern, technically rigorous introduction to reinforcement learning (RL), with a focus on how RL ideas power contemporary AI systems, for example, the post-training and alignment pipelines behind large language models (LLMs) such as <strong>ChatGPT</strong>, <strong>Gemini</strong>, and <strong>Claude</strong>.
          </p>
          <p>
            We will start from the foundations (MDPs, dynamic programming, value-based and policy-based methods), build up to deep RL (function approximation, actor–critic, PPO), and then connect these tools to modern post-training and agentic settings: imitation learning, preference learning, and fine-tuning and RL-style optimization for LLMs (including supervised fine-tuning, DPO-style objectives, and PPO-style methods), as well as emerging themes around reasoning-oriented training and evaluation.
          </p>
        </Block>

        <Block title="High-level Topics">
          <Bullets
            items={[
              "Formal RL foundations and planning: MDPs, value functions, Bellman operators, dynamic programming (value iteration and policy iteration)",
              "Learning in MDPs: Monte Carlo and temporal-difference learning, bias/variance trade-offs, bootstrapping, and exploration",
              "Function approximation: linear approximation and neural networks, stability issues, and practical diagnostics",
              "Policy optimization: policy gradient theorem, baselines, actor–critic methods, advantage estimation, and PPO-style updates",
              "Learning from data and feedback: imitation learning, preference modeling, reward modeling, and practical optimization objectives",
              "LLM post-training and alignment: supervised fine-tuning, preference optimization (DPO-style methods), PPO-style RLHF, and evaluation",
              "Reasoning-oriented post-training: GRPO-style objectives, reinforcement learning for reasoning models, alignment-focused optimization, and practical engineering techniques such as LoRA and efficient fine-tuning pipelines",
            ]}
          />
          <p className="t-1 italic text-ink-soft">
            Note: As this course is being offered for the first time in Spring 2026, some elements are likely to change over the first offering.
          </p>
        </Block>

        <Block title="Learning Objectives">
          <p>By the end of the course, students should be able to:</p>
          <ol className="list-decimal space-y-2.5 pl-6 marker:font-semibold marker:text-carmine">
            <li>Derive key RL objectives and algorithms (Bellman equations, policy gradients, actor–critic) and translate them into working implementations.</li>
            <li>Implement and debug modern policy-optimization methods in practice (PPO-style updates, advantage estimation, KL/ratio control, and other stabilization tricks).</li>
            <li>Understand LLM post-training pipelines end-to-end: supervised fine-tuning, preference modeling, and RLHF-style optimization, including what is being optimized and what can go wrong.</li>
            <li>Compare and reason about preference-optimization objectives used for LLM alignment (e.g., DPO-style methods and related variants such as GRPO), including their assumptions, trade-offs, and failure modes.</li>
            <li>Understand and implement core methods used to train reasoning-oriented models.</li>
          </ol>
        </Block>

        <Block title="Prerequisites">
          <Bullets
            items={[
              "Strong Python programming (NumPy + basic PyTorch familiarity)",
              "Linear algebra, probability, and multivariable calculus (gradients)",
              "Prior ML background (basic neural nets / optimization / transformers) recommended",
            ]}
          />
        </Block>

        <Block title="Grading (tentative)">
          <p><strong>Final exam:</strong> 100%</p>
        </Block>

        <Block title="Practical Exercises">
          <p>A major component of the course is hands-on implementation in Colab/Jupyter notebooks.</p>
          <p>Each assignment will typically include:</p>
          <Bullets
            items={[
              <>A <strong>coding</strong> part (implement/extend an algorithm, run experiments)</>,
              <>A short <strong>conceptual</strong> part (derive key equations, interpret results)</>,
            ]}
          />
        </Block>

        <Block id="lectures" title="Lectures" wide>
          <Schedule caption="Lecture schedule and materials">
                      <tr><td className="py-3 pr-4">1</td><td className="py-3 pr-4">Feb 20, 2026</td><td className="py-3 pr-4">Introduction; MDPs & Bellman equations</td><td className="py-3 pr-4"><ProtectedDownload href="/lectures/lecture1.pdf" filename="lecture1.pdf" password="rl">Slides</ProtectedDownload> / <ProtectedDownload href="/lectures/lecture1_annotated.pdf" filename="lecture1_annotated.pdf" password="rl">Annotated</ProtectedDownload></td></tr>
                      <tr className="text-ink-muted"><td className="py-3 pr-4">2</td><td className="py-3 pr-4">Feb 27, 2026</td><td className="py-3 pr-4 italic">No class</td><td className="py-3 pr-4"></td></tr>
                      <tr><td className="py-3 pr-4">3</td><td className="py-3 pr-4">Mar 6, 2026</td><td className="py-3 pr-4">MC & TD Learning; Model-free Control</td><td className="py-3 pr-4"><ProtectedDownload href="/lectures/lecture2.pdf" filename="lecture2.pdf" password="rl">Slides</ProtectedDownload> / <ProtectedDownload href="/lectures/lecture2_annotated.pdf" filename="lecture2_annotated.pdf" password="rl">Annotated</ProtectedDownload> / <ProtectedDownload href="/lectures/td_value_propagation_demo.html" filename="td_value_propagation_demo.html" password="rl">Demo</ProtectedDownload></td></tr>
                      <tr><td className="py-3 pr-4">4</td><td className="py-3 pr-4">Mar 13, 2026</td><td className="py-3 pr-4">Function Approximation & Deep RL</td><td className="py-3 pr-4"><ProtectedDownload href="/lectures/lecture3.pdf" filename="lecture3.pdf" password="rl">Slides</ProtectedDownload> / <ProtectedDownload href="/lectures/lecture3_annotated.pdf" filename="lecture3_annotated.pdf" password="rl">Annotated</ProtectedDownload> / <ProtectedDownload href="/lectures/td_fa_demo.html" filename="td_fa_demo.html" password="rl">Demo</ProtectedDownload> / <ProtectedDownload href="/lectures/linear_td_convergence.pdf" filename="linear_td_convergence.pdf" password="rl">Note</ProtectedDownload></td></tr>
                      <tr><td className="py-3 pr-4">5</td><td className="py-3 pr-4">Mar 20, 2026</td><td className="py-3 pr-4">Policy Gradients & Actor-Critic</td><td className="py-3 pr-4"><ProtectedDownload href="/lectures/lecture4.pdf" filename="lecture4.pdf" password="rl">Slides</ProtectedDownload> / <ProtectedDownload href="/lectures/lecture4_annotated.pdf" filename="lecture4_annotated.pdf" password="rl">Annotated</ProtectedDownload></td></tr>
                      <tr><td className="py-3 pr-4">6</td><td className="py-3 pr-4">Mar 27, 2026</td><td className="py-3 pr-4">PPO, TRPO & Modern Policy Optimization</td><td className="py-3 pr-4"><ProtectedDownload href="/lectures/lecture5.pdf" filename="lecture5.pdf" password="rl">Slides</ProtectedDownload> / <ProtectedDownload href="/lectures/trpo_to_npg.pdf" filename="trpo_to_npg.pdf" password="rl">Note 1</ProtectedDownload> / <ProtectedDownload href="/lectures/ppo_surrogate.pdf" filename="ppo_surrogate.pdf" password="rl">Note 2</ProtectedDownload></td></tr>
                      <tr className="text-ink-muted"><td className="py-3 pr-4">7</td><td className="py-3 pr-4">Apr 3, 2026</td><td className="py-3 pr-4 italic">No class</td><td className="py-3 pr-4"></td></tr>
                      <tr><td className="py-3 pr-4">8</td><td className="py-3 pr-4">Apr 10, 2026</td><td className="py-3 pr-4">Imitation Learning & Offline RL</td><td className="py-3 pr-4"><ProtectedDownload href="/lectures/lecture6.pdf" filename="lecture6.pdf" password="rl">Slides</ProtectedDownload> / <ProtectedDownload href="/lectures/lecture6_annotated.pdf" filename="lecture6_annotated.pdf" password="rl">Annotated</ProtectedDownload></td></tr>
                      <tr><td className="py-3 pr-4">9</td><td className="py-3 pr-4">Apr 17, 2026</td><td className="py-3 pr-4">Preference Learning</td><td className="py-3 pr-4"><ProtectedDownload href="/lectures/lecture7.pdf" filename="lecture7.pdf" password="rl">Slides</ProtectedDownload> / <ProtectedDownload href="/lectures/lecture7_annotated.pdf" filename="lecture7_annotated.pdf" password="rl">Annotated</ProtectedDownload> / <ProtectedDownload href="/lectures/lecture7_demo.ipynb" filename="lecture7_demo.ipynb" password="rl">Demo</ProtectedDownload></td></tr>
                      <tr className="text-ink-muted"><td className="py-3 pr-4">10</td><td className="py-3 pr-4">Apr 24, 2026</td><td className="py-3 pr-4 italic">No class</td><td className="py-3 pr-4"></td></tr>
                      <tr className="text-ink-muted"><td className="py-3 pr-4">11</td><td className="py-3 pr-4">May 1, 2026</td><td className="py-3 pr-4 italic">No class</td><td className="py-3 pr-4"></td></tr>
                      <tr><td className="py-3 pr-4">12</td><td className="py-3 pr-4">May 8, 2026</td><td className="py-3 pr-4">Post-training LLMs 1</td><td className="py-3 pr-4"><ProtectedDownload href="/lectures/lecture8.pdf" filename="lecture8.pdf" password="rl">Slides</ProtectedDownload></td></tr>
                      <tr className="text-ink-muted"><td className="py-3 pr-4">13</td><td className="py-3 pr-4">May 15, 2026</td><td className="py-3 pr-4 italic">No class</td><td className="py-3 pr-4"></td></tr>
                      <tr><td className="py-3 pr-4">14</td><td className="py-3 pr-4">May 22, 2026</td><td className="py-3 pr-4">Post-training LLMs 2</td><td className="py-3 pr-4"><ProtectedDownload href="/lectures/lecture9.pdf" filename="lecture9.pdf" password="rl">Slides</ProtectedDownload></td></tr>
                      <tr><td className="py-3 pr-4">15</td><td className="py-3 pr-4">May 29, 2026</td><td className="py-3 pr-4">Exam Preparation</td><td className="py-3 pr-4"><ProtectedDownload href="/lectures/Modern_RL_Mock_Exam.pdf" filename="Modern_RL_Mock_Exam.pdf" password="rl">Mock Exam</ProtectedDownload> / <ProtectedDownload href="/lectures/Modern_RL_Mock_Exam_solutions.pdf" filename="Modern_RL_Mock_Exam_solutions.pdf" password="rl">Solution</ProtectedDownload></td></tr>
          </Schedule>
        </Block>

        <Block id="exercises" title="Exercises" wide>
          <Schedule caption="Exercise schedule and materials">
                      <tr className="text-ink-muted"><td className="py-3 pr-4">1</td><td className="py-3 pr-4">Feb 20, 2026</td><td className="py-3 pr-4 italic">No class</td><td className="py-3 pr-4"></td></tr>
                      <tr className="text-ink-muted"><td className="py-3 pr-4">2</td><td className="py-3 pr-4">Feb 27, 2026</td><td className="py-3 pr-4 italic">No class</td><td className="py-3 pr-4"></td></tr>
                      <tr><td className="py-3 pr-4">3</td><td className="py-3 pr-4">Mar 6, 2026</td><td className="py-3 pr-4">MDPs & Dynamic Programming</td><td className="py-3 pr-4"><ProtectedDownload href="/exercises/Exercise1.ipynb" filename="Exercise1.ipynb" password="rl">Exercise 1</ProtectedDownload> / <ProtectedDownload href="/exercises/Exercise1_SOLUTION.ipynb" filename="Exercise1_SOLUTION.ipynb" password="rl">Solution</ProtectedDownload></td></tr>
                      <tr><td className="py-3 pr-4">4</td><td className="py-3 pr-4">Mar 13, 2026</td><td className="py-3 pr-4">MC & TD Learning; Model-free Control</td><td className="py-3 pr-4"><ProtectedDownload href="/exercises/Exercise2.ipynb" filename="Exercise2.ipynb" password="rl">Exercise 2</ProtectedDownload> / <ProtectedDownload href="/exercises/Exercise2_SOLUTION.ipynb" filename="Exercise2_SOLUTION.ipynb" password="rl">Solution</ProtectedDownload> / <ProtectedDownload href="/exercises/importance-sampling.pdf" filename="Importance Sampling.pdf" password="rl">Note</ProtectedDownload></td></tr>
                      <tr><td className="py-3 pr-4">5</td><td className="py-3 pr-4">Mar 20, 2026</td><td className="py-3 pr-4">Function Approximation & Deep Q-Learning</td><td className="py-3 pr-4"><ProtectedDownload href="/exercises/Exercise3.ipynb" filename="Exercise3.ipynb" password="rl">Exercise 3</ProtectedDownload> / <ProtectedDownload href="/exercises/Exercise3_SOLUTION.ipynb" filename="Exercise3_SOLUTION.ipynb" password="rl">Solution</ProtectedDownload> / <ProtectedDownload href="/exercises/DQN_Atari_Training.ipynb" filename="DQN_Atari_Training.ipynb" password="rl">Atari Demo</ProtectedDownload></td></tr>
                      <tr><td className="py-3 pr-4">6</td><td className="py-3 pr-4">Mar 27, 2026</td><td className="py-3 pr-4">Policy Gradients & Actor-Critic</td><td className="py-3 pr-4"><ProtectedDownload href="/exercises/Exercise4.ipynb" filename="Exercise4.ipynb" password="rl">Exercise 4</ProtectedDownload> / <ProtectedDownload href="/exercises/Exercise4_SOLUTION.ipynb" filename="Exercise4_SOLUTION.ipynb" password="rl">Solution</ProtectedDownload></td></tr>
                      <tr className="text-ink-muted"><td className="py-3 pr-4">7</td><td className="py-3 pr-4">Apr 3, 2026</td><td className="py-3 pr-4 italic">No class</td><td className="py-3 pr-4"></td></tr>
                      <tr><td className="py-3 pr-4">8</td><td className="py-3 pr-4">Apr 10, 2026</td><td className="py-3 pr-4">GAE, TRPO & PPO</td><td className="py-3 pr-4"><ProtectedDownload href="/exercises/Exercise5.ipynb" filename="Exercise5.ipynb" password="rl">Exercise 5</ProtectedDownload> / <ProtectedDownload href="/exercises/Exercise5_SOLUTION.ipynb" filename="Exercise5_SOLUTION.ipynb" password="rl">Solution</ProtectedDownload></td></tr>
                      <tr><td className="py-3 pr-4">9</td><td className="py-3 pr-4">Apr 17, 2026</td><td className="py-3 pr-4">BC & DAgger</td><td className="py-3 pr-4"><ProtectedDownload href="/exercises/Exercise6.ipynb" filename="Exercise6.ipynb" password="rl">Exercise 6</ProtectedDownload> / <ProtectedDownload href="/exercises/Exercise6_SOLUTION.ipynb" filename="Exercise6_SOLUTION.ipynb" password="rl">Solution</ProtectedDownload></td></tr>
                      <tr className="text-ink-muted"><td className="py-3 pr-4">10</td><td className="py-3 pr-4">Apr 24, 2026</td><td className="py-3 pr-4 italic">No class</td><td className="py-3 pr-4"></td></tr>
                      <tr className="text-ink-muted"><td className="py-3 pr-4">11</td><td className="py-3 pr-4">May 1, 2026</td><td className="py-3 pr-4 italic">No class</td><td className="py-3 pr-4"></td></tr>
                      <tr><td className="py-3 pr-4">12</td><td className="py-3 pr-4">May 8, 2026</td><td className="py-3 pr-4">Preference Learning & Reward Modelling</td><td className="py-3 pr-4"><ProtectedDownload href="/exercises/Exercise7.ipynb" filename="Exercise7.ipynb" password="rl">Exercise 7</ProtectedDownload> / <ProtectedDownload href="/exercises/Exercise7_SOLUTION.ipynb" filename="Exercise7_SOLUTION.ipynb" password="rl">Solution</ProtectedDownload></td></tr>
                      <tr className="text-ink-muted"><td className="py-3 pr-4">13</td><td className="py-3 pr-4">May 15, 2026</td><td className="py-3 pr-4 italic">No class</td><td className="py-3 pr-4"></td></tr>
                      <tr><td className="py-3 pr-4">14</td><td className="py-3 pr-4">May 22, 2026</td><td className="py-3 pr-4">RLHF Optimization: PPO-KL & DPO</td><td className="py-3 pr-4"><ProtectedDownload href="/exercises/Exercise8_Part1.ipynb" filename="Exercise8_Part1.ipynb" password="rl">Exercise 8</ProtectedDownload> / <ProtectedDownload href="/exercises/Exercise8_SOLUTION.ipynb" filename="Exercise8_SOLUTION.ipynb" password="rl">Solution</ProtectedDownload></td></tr>
                      <tr><td className="py-3 pr-4">15</td><td className="py-3 pr-4">May 29, 2026</td><td className="py-3 pr-4">GRPO for Verifiable Reasoning</td><td className="py-3 pr-4"><ProtectedDownload href="/exercises/Exercise9.ipynb" filename="Exercise9.ipynb" password="rl">Exercise 9</ProtectedDownload> / <ProtectedDownload href="/exercises/Exercise9_SOLUTION.ipynb" filename="Exercise9_SOLUTION.ipynb" password="rl">Solution</ProtectedDownload></td></tr>
          </Schedule>
        </Block>

        <Block title="AI Policy (draft)">
          <p>You may use AI assistants for learning and for debugging during assignments, <strong>but</strong>:</p>
          <Bullets
            items={[
              "You must be able to explain and reproduce key parts of your solution.",
              <>Any in-class evaluation (if applicable) is <strong>closed-book</strong> and <strong>no AI tools</strong>.</>,
              "If you use AI tools, treat them like a tutor: verify outputs, cite assumptions, and make sure you understand what you submit.",
            ]}
          />
          <p className="t-1 italic text-ink-soft">(Exact policy and evaluation format will be finalized once grading is finalized.)</p>
        </Block>
      </div>
    </Layout>
  );
};

export default ModernRL2026;
