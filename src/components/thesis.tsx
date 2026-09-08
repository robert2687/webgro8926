import { Section, SectionHead } from "@/components/section";
import { useLanguage } from "@/lib/language";

export function Thesis() {
  const { c } = useLanguage();
  return (
    <Section id="thesis" className="border-t border-line py-20 sm:py-28">
      <SectionHead kicker={c.thesis.kicker} title={c.thesis.title} />
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="mx-auto w-full overflow-hidden rounded-xl hairline">
          <img
            src="/media/hero-cube.jpg"
            alt=""
            className="aspect-square w-full object-cover"
            width={1792}
            height={1008}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-lg bg-surface p-6 hairline">
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">{c.thesis.sphereTitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{c.thesis.sphereBody}</p>
          </article>
          <article className="rounded-lg bg-surface p-6 hairline">
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">{c.thesis.cubeTitle}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{c.thesis.cubeBody}</p>
          </article>
          <p className="font-display text-2xl font-semibold tracking-tight text-fg sm:col-span-2 sm:text-3xl">
            {c.thesis.closer}
          </p>
        </div>
      </div>
    </Section>
  );
}
