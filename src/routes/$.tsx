import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
});

function NotFoundPage() {
  const { c } = useLanguage();
  return (
    <SiteShell>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <p className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">{c.notFound.title}</h1>
        <p className="mt-3 max-w-sm text-sm text-muted">{c.notFound.body}</p>
        <Button asChild className="mt-8">
          <Link to="/">{c.notFound.home}</Link>
        </Button>
      </div>
    </SiteShell>
  );
}
