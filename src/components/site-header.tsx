import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CubeMark } from "@/components/cube-mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { useLanguage } from "@/lib/language";

const LINKS = [
  { href: "/#work", key: "work" as const },
  { href: "/#thesis", key: "thesis" as const },
  { href: "/#experience", key: "experience" as const },
  { href: "/#about", key: "about" as const },
  { href: "/#contact", key: "contact" as const },
];

export function SiteHeader() {
  const { lang, setLang, c } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled
          ? "border-line bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-fg"
          onClick={() => setOpen(false)}
        >
          <CubeMark className="size-8" />
          <span className="font-display text-sm font-semibold tracking-[0.18em]">RMD26</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-150 hover:text-fg"
            >
              {c.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle lang={lang} setLang={setLang} />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-bg px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-11 items-center text-base text-fg"
                  onClick={() => setOpen(false)}
                >
                  {c.nav[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function LangToggle({ lang, setLang }: { lang: "en" | "sk"; setLang: (l: "en" | "sk") => void }) {
  return (
    <div
      className="flex h-9 items-center rounded-sm p-0.5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_14%,transparent)]"
      role="group"
      aria-label="Language"
    >
      {(["en", "sk"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={cn(
            "h-8 min-w-9 rounded-[6px] px-2 font-mono text-[11px] tracking-wider uppercase transition-[background-color,color] duration-150",
            lang === code ? "bg-fg text-accent-fg" : "text-muted hover:text-fg",
          )}
          aria-pressed={lang === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
