import { Link } from "@tanstack/react-router";
import { CubeMark } from "@/components/cube-mark";
import { CONTACT } from "@/lib/content";
import { useLanguage } from "@/lib/language";

export function SiteFooter() {
  const { c } = useLanguage();
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link to="/" className="inline-flex items-center gap-2">
            <CubeMark className="size-7" />
            <span className="font-display text-sm font-semibold tracking-[0.18em]">RMD26</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{c.footer.thesisLine}</p>
        </div>
        <div className="font-mono text-xs text-subtle">
          <p>
            © {new Date().getFullYear()} {CONTACT.name}. {c.footer.rights}
          </p>
          <p className="mt-1">{CONTACT.address}</p>
        </div>
      </div>
    </footer>
  );
}
