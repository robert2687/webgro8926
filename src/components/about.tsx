import { Section, SectionHead } from "@/components/section";
import { useLanguage } from "@/lib/language";

export function About() {
  const { c } = useLanguage();
  return (
    <Section id="about" className="border-t border-line py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHead kicker={c.about.kicker} title={c.about.title} />
        <div className="space-y-5 text-base leading-relaxed text-muted">
          {c.about.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
