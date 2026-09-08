import { Section, SectionHead } from "@/components/section";
import { JOBS, t } from "@/lib/content";
import { useLanguage } from "@/lib/language";

export function Experience() {
  const { lang, c } = useLanguage();
  return (
    <Section id="experience" className="border-t border-line py-20 sm:py-28">
      <SectionHead kicker={c.experience.kicker} title={c.experience.title} lead={c.experience.lead} />
      <ol className="relative">
        {JOBS.map((job, i) => (
          <li
            key={`${job.org}-${job.period}`}
            className="grid gap-2 border-t border-line py-6 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:py-7"
          >
            <p className="font-mono text-xs text-subtle tabular-nums">{job.period}</p>
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight text-fg">{t(job.role, lang)}</h3>
              <p className="mt-1 text-sm text-muted">
                {job.org}
                <span className="text-subtle"> · {t(job.place, lang)}</span>
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{t(job.note, lang)}</p>
            </div>
            {i === JOBS.length - 1 ? <span className="sr-only">End of timeline</span> : null}
          </li>
        ))}
      </ol>
    </Section>
  );
}
