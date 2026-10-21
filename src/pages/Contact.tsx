import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/brand/PageHeader";
import Reveal from "@/components/brand/Reveal";

const Contact = () => {
  return (
    <Layout>
      <PageHeader
        title="Contact"
        intro="Get in touch with our research group for collaborations, questions, or administrative matters."
      />

      <section className="wrap grid gap-14 pb-[var(--section)] lg:grid-cols-12" aria-label="How to reach us">
        <Reveal className="space-y-14 lg:col-span-6">
          <div>
            <h2 className="t-3 font-semibold text-ink">Reach out</h2>
            <p className="t-2 mt-3 text-ink-soft">To reach out, please contact:</p>
            <a href="mailto:ilija.bogunovic@unibas.ch" className="btn mt-5">
              Email Ilija Bogunovic <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>

          <div>
            <h2 className="t-3 font-semibold text-ink">Administrative contact</h2>
            <p className="t-2 mt-3 text-ink-soft">For administrative questions, please reach out to:</p>
            <a href="mailto:barbara.wenger@unibas.ch" className="link t-2 mt-2 inline-block font-medium">
              Barbara Wenger
            </a>
          </div>

          <div>
            <h2 className="t-3 font-semibold text-ink">Follow us</h2>
            <ul className="t-2 mt-3 flex flex-wrap gap-x-8 gap-y-2">
              <li>
                <a href="https://x.com/ilijabogunovic" target="_blank" rel="noopener noreferrer" className="link font-medium">
                  Twitter ↗
                </a>
              </li>
              <li>
                <a
                  href="https://scholar.google.com/citations?user=xMvt3NEAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link font-medium"
                >
                  Google Scholar ↗
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="rounded-2xl bg-paper-2 p-7 sm:p-10 lg:col-span-6">
          <h2 className="t-3 font-semibold text-ink">Address</h2>
          <address className="t-2 mt-3 not-italic text-ink">
            <span className="font-semibold">Department of Mathematics and Computer Science</span>
            <br />
            Spiegelgasse 1
            <br />
            4051 Basel
            <br />
            Switzerland
          </address>
          <p className="t-2 mt-4 text-ink-soft">Located in the heart of Basel, just steps away from the beautiful Rhine River!</p>
          <a
            href="https://maps.google.com/?q=Spiegelgasse+1,+4051+Basel,+Switzerland"
            target="_blank"
            rel="noopener noreferrer"
            className="link t-2 mt-4 inline-block font-medium"
          >
            View on Google Maps ↗
          </a>
        </Reveal>
      </section>
    </Layout>
  );
};

export default Contact;
