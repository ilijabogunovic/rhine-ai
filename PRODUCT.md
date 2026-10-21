# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

In priority order (all four confirmed as audiences):

1. **University & press**: UniBas and UCL colleagues, media, and the general public looking up who the lab is and what it does.
2. **Funders & industry**: grant bodies (e.g. SNSF), companies, and partners assessing the lab's credibility and direction.
3. **Research peers**: ML/RL researchers checking papers, people, and collaboration fit.
4. **Prospective students & postdocs**: PhD, postdoc, and MSc candidates deciding whether to apply via Join Us.

## Product Purpose

Public website of Rhine AI (Bogunovic Lab), served at rhinelab.ai. It presents the lab's research directions, team, publications, news, teaching, blog, and open positions.

Success means two things:

- **Lab identity is clear**: a visitor grasps what makes Rhine AI distinct (its focus and its affiliations) quickly.
- **Easy to keep updated**: lab members can add news, papers, and people with minimal friction.

## Positioning

Rhine AI (Reasoning, Human-aligned Intelligence and Novel Exploration) is led by Ilija Bogunovic and sits jointly in the Department of Mathematics and Computer Science (DMI) at the University of Basel and the Centre for Artificial Intelligence at University College London. It develops agentic AI systems that reason, adapt, and self-evolve, built on sequential decision making and generative AI.

Three research directions:

- **Agentic AI Systems**: self-evolving LLM-based agents that reason, adapt, and operate in complex environments.
- **Reinforcement Learning**: sequential decision making under uncertainty, with an emphasis on robustness, efficiency, and alignment.
- **Exploration & Discovery**: foundation models that explore hypothesis spaces and accelerate discovery.

## Operating Context

- Routes: home, about, team (with individual profile pages), publications, news (with per-item pages), blog, teaching, join us, contact.
- Content is maintained by lab members directly in the repo. Publications come from a Google Scholar BibTeX export converted by `bibtex-converter.cjs` (see `README-publications.md`). News items and profiles are individual TSX pages under `src/pages/news/` and `src/pages/profiles/`.
- Join Us applications ask for a CV with publications, three referee contacts, and a cover letter.

## Capabilities and Constraints

- Stack: React 18 + TypeScript, Vite, Tailwind CSS, shadcn/ui, React Router.
- Deployment: static build to GitHub Pages (`gh-pages -d dist`, custom domain via `CNAME`). There is no backend, so all content lives in repo files. This is a binding constraint.
- Open: content authoring currently means editing TSX per news item or profile. Whether to move to data files is undecided.

## Brand Commitments

- The name **Rhine AI** and the **RHINE acronym** expansion (Reasoning, Human-aligned Intelligence and Novel Exploration) are binding.
- The **dual affiliation** with the University of Basel (DMI) and the UCL Centre for Artificial Intelligence must stay visible.
- The header illustration is `public/rhine-ai-header-sunset.png` (with a `.webp`): the Rhine in Basel at sunset.

## Evidence on Hand

- Real publications (BibTeX pipeline), team photos in `public/`, PDF thumbnails and covers, and news items (ICLR 2026, ICML 2026, NeurIPS 2026, SNSF project grant 2026, among others).
- There are no testimonials, metrics, or partner logos in the repo. Do not fabricate them.

## Product Principles

1. Identity first: within one look, a visitor should know who Rhine AI is, what it researches, and that it spans Basel and UCL.
2. Credibility through real work: papers, people, and news carry the case. Never invent claims.
3. Low-friction upkeep: any design must keep adding a paper, news item, or person simple for non-designers working in the repo.
4. Serve the broad reader: the site should be legible to press, funders, and the public, not only to ML specialists, without diluting the research.
