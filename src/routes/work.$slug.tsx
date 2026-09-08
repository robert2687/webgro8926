import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { getProject, t } from "@/lib/content";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectPage,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.project.title.en} — RMD26`
          : "Work — RMD26",
      },
    ],
  }),
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const { lang, c } = useLanguage();

  return (
    <SiteShell>
      <article className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-6xl pt-8">
          <Button asChild variant="link" size="sm" className="px-0">
            <Link to="/" hash="work">
              <ArrowLeft className="size-4" />
              {c.project.back}
            </Link>
          </Button>

          <p className="mt-8 font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
            {project.year} · {project.tags.join(" · ")}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-[-0.03em] text-fg sm:text-5xl">
            {t(project.title, lang)}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{t(project.kicker, lang)}</p>
        </div>

        <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-xl hairline">
          <img
            src={project.cover}
            alt=""
            className="aspect-[16/8] w-full object-cover"
            width={1792}
            height={1008}
          />
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-[1fr_18rem] lg:gap-16">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight">{c.project.overview}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{t(project.summary, lang)}</p>
            <div className="mt-6 space-y-4">
              {t(project.body, lang).map((para) => (
                <p key={para} className="text-base leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-xl bg-surface p-5 hairline">
              <p className="font-mono text-[11px] tracking-[0.16em] text-subtle uppercase">{c.project.stack}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="rounded-xl bg-surface p-5 hairline">
              {project.metrics.map((m) => (
                <div key={m.value} className="flex items-baseline justify-between border-t border-line py-2 first:border-t-0 first:pt-0">
                  <dt className="text-sm text-muted">{t(m.label, lang)}</dt>
                  <dd className="font-mono text-sm text-fg tabular-nums">{m.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </article>
    </SiteShell>
  );
}
