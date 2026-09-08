import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHead } from "@/components/section";
import { PROJECTS, t } from "@/lib/content";
import { useLanguage } from "@/lib/language";

export function Projects() {
  const { lang, c } = useLanguage();
  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  return (
    <Section id="work" className="border-t border-line py-20 sm:py-28">
      <SectionHead kicker={c.work.kicker} title={c.work.title} lead={c.work.lead} />

      <Link
        to="/work/$slug"
        params={{ slug: featured.slug }}
        className="group grid overflow-hidden rounded-xl bg-surface hairline lg:grid-cols-2"
      >
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
          <img
            src={featured.cover}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            width={1792}
            height={1008}
          />
        </div>
        <div className="flex flex-col justify-between gap-8 p-6 sm:p-10">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
              {featured.year} · {featured.tags.join(" · ")}
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg">
              {t(featured.title, lang)}
            </h3>
            <p className="mt-2 text-sm text-muted">{t(featured.kicker, lang)}</p>
            <p className="mt-4 text-base leading-relaxed text-muted">{t(featured.summary, lang)}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm text-fg">
            {c.work.open}
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </Link>

      <ul className="mt-6 grid gap-6 md:grid-cols-2">
        {rest.map((project) => (
          <li key={project.slug}>
            <Link
              to="/work/$slug"
              params={{ slug: project.slug }}
              className="group flex h-full flex-col overflow-hidden rounded-xl bg-surface hairline"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.cover}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  width={1792}
                  height={1008}
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] tracking-[0.16em] text-accent uppercase">
                  {project.year} · {project.tags[0]}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-fg">
                  {t(project.title, lang)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{t(project.summary, lang)}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-fg">
                  {c.work.open}
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
