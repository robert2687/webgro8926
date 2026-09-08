import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/content";
import { useLanguage } from "@/lib/language";

export function Hero() {
  const { c } = useLanguage();
  return (
    <section className="relative overflow-hidden">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,color-mix(in_oklab,var(--color-accent)_14%,transparent),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
        <div>
          <p className="hero-rise font-mono text-[11px] tracking-[0.24em] text-accent uppercase" style={{ animationDelay: "40ms" }}>
            {c.hero.kicker}
          </p>
          <h1
            className="hero-rise mt-4 font-display text-5xl font-semibold tracking-[-0.04em] text-fg sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "90ms" }}
          >
            {c.hero.title}
          </h1>
          <p
            className="hero-rise mt-5 max-w-xl text-lg leading-snug text-fg/90 sm:text-xl"
            style={{ animationDelay: "140ms" }}
          >
            {c.hero.role}
          </p>
          <p
            className="hero-rise mt-4 max-w-xl text-base leading-relaxed text-muted"
            style={{ animationDelay: "190ms" }}
          >
            {c.hero.lead}
          </p>
          <div className="hero-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <Button asChild size="lg">
              <a href="#work">
                {c.hero.ctaWork}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href={CONTACT.cvHref} download>
                <Download className="size-4" />
                {c.hero.ctaCv}
              </a>
            </Button>
            <Button asChild variant="link" size="lg">
              <a href="#contact">{c.hero.ctaContact}</a>
            </Button>
          </div>
        </div>
        <div className="hero-rise relative" style={{ animationDelay: "180ms" }}>
          <img
            src="/media/hero-cube.jpg"
            alt="Ice-blue wireframe cube containing a dark sphere — the RMD26 mark"
            className="aspect-square w-full rounded-xl object-cover"
            width={1792}
            height={1008}
          />
        </div>
      </div>
    </section>
  );
}

export function StatsBar() {
  const { c } = useLanguage();
  return (
    <div className="border-y border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-4">
        {c.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={i > 0 ? "border-l border-line px-5 py-6 sm:px-8" : "px-5 py-6 sm:px-8"}
          >
            <p className="font-display text-3xl font-semibold tracking-tight text-fg tabular-nums">{stat.value}</p>
            <p className="mt-1 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}