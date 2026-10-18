import { Link } from "react-router-dom";
import { newsItems as allNewsItems } from "@/pages/News";
import { publications } from "@/pages/Publications";
import { getPaperThumbnail } from "@/components/PDFThumbnail";
import { CategoryTag } from "@/components/brand/Tags";
import Reveal from "@/components/brand/Reveal";
import { renderMathText } from "@/lib/mathText";

const newsItems = allNewsItems.slice(0, 8);
const recentPapers = publications.slice(0, 6);

const SmartLink = ({ url, className, children }: { url: string; className?: string; children: React.ReactNode }) =>
  url.startsWith("http") ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link to={url} className={className}>
      {children}
    </Link>
  );

const CategoryHead = ({ id, title, count, to, label }: { id: string; title: string; count: string; to: string; label: string }) => (
  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pb-10">
    <h2 id={id} className="t-4 font-semibold text-ink">
      {title}
    </h2>
    <p className="t-1 text-ink-soft">
      {count} ·{" "}
      <Link to={to} className="link font-medium">
        {label}
      </Link>
    </p>
  </div>
);

const NewsSection = () => (
  <section className="wrap pb-[var(--section)]" aria-label="Latest work">
    <div aria-labelledby="papers-title">
      <CategoryHead id="papers-title" title="Recent papers" count={`${publications.length} papers`} to="/publications" label="All publications" />
      <Reveal as="ul" mode="rows" className="grid gap-x-16 gap-y-9 lg:grid-cols-2">
        {recentPapers.map((paper) => {
          const thumb = getPaperThumbnail(paper.pdfFile);
          return (
            <li key={paper.title}>
              <a
                href={paper.arxivLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[4rem_1fr] gap-5"
              >
                <span className="block h-[5.25rem] w-16 overflow-hidden bg-white">
                  {thumb && (
                    <img
                      src={thumb}
                      alt=""
                      width={64}
                      height={84}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  )}
                </span>
                <span className="block">
                  <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <span className="t-2 font-semibold leading-snug text-ink transition-colors group-hover:text-carmine">
                      {paper.title}
                    </span>
                    <span className="t-1 shrink-0 tabular-nums text-ink-soft sm:order-none">{paper.year}</span>
                  </span>
                  <span className="t-1 mt-1.5 block max-w-[52ch] text-ink-soft">{paper.venue}</span>
                </span>
              </a>
            </li>
          );
        })}
      </Reveal>
    </div>

    <div className="pt-[var(--section)]" aria-labelledby="news-title">
      <CategoryHead id="news-title" title="News" count={`${allNewsItems.length} stories`} to="/news" label="All news" />
      <Reveal as="ul" mode="rows" className="grid gap-x-16 gap-y-10 lg:grid-cols-2">
        {newsItems.map((item) => (
          <li key={item.title}>
            <SmartLink url={item.url} className="group block">
              <span className="flex items-center gap-3">
                <CategoryTag type={item.type} />
                <span className="t-1 text-ink-soft">{item.date}</span>
              </span>
              <span className="t-2 mt-2.5 block font-semibold leading-snug text-ink transition-colors group-hover:text-carmine">
                {renderMathText(item.title)}
              </span>
              <span className="t-1 mt-1.5 line-clamp-3 block max-w-[60ch] text-ink-soft">{item.excerpt}</span>
            </SmartLink>
          </li>
        ))}
      </Reveal>
    </div>
  </section>
);

export default NewsSection;
