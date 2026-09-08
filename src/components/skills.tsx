import { Section, SectionHead } from "@/components/section";
import { LANGUAGES, SKILL_GROUPS, t } from "@/lib/content";
import { useLanguage } from "@/lib/language";

function skillLabel(item: string | { en: string; sk: string }, lang: "en" | "sk") {
  return typeof item === "string" ? item : t(item, lang);
}

export function Skills() {
  const { lang, c } = useLanguage();
  return (
    <Section className="border-t border-line py-20 sm:py-28">
      <SectionHead kicker={c.skills.kicker} title={c.skills.title} />
      <div className="grid gap-6 lg:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <article key={group.title.en} className="rounded-xl bg-surface p-6 hairline">
            <h3 className="font-display text-lg font-semibold tracking-tight">{t(group.title, lang)}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => {
                const label = skillLabel(item, lang);
                return (
                  <li
                    key={label}
                    className="rounded-sm bg-surface-2 px-3 py-1.5 font-mono text-[11px] tracking-wide text-fg"
                  >
                    {label}
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
        <article className="rounded-xl bg-surface p-6 hairline">
          <h3 className="font-display text-lg font-semibold tracking-tight">{c.skills.languages}</h3>
          <ul className="mt-4 divide-y divide-line">
            {LANGUAGES.map((langItem) => (
              <li key={langItem.level + langItem.name.en} className="flex items-baseline justify-between py-3">
                <span className="text-sm text-fg">{t(langItem.name, lang)}</span>
                <span className="font-mono text-xs text-muted">
                  {langItem.level} · {t(langItem.note, lang)}
                </span>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-xl bg-surface p-6 hairline">
          <h3 className="font-display text-lg font-semibold tracking-tight">{c.skills.education}</h3>
          <p className="mt-4 font-display text-xl font-semibold tracking-tight">{c.skills.school}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{c.skills.schoolNote}</p>
        </article>
      </div>
    </Section>
  );
}
