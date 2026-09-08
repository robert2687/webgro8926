import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Section, SectionHead } from "@/components/section";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/content";
import { useLanguage } from "@/lib/language";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const { c } = useLanguage();
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !EMAIL_RE.test(email) || !message) {
      setStatus("err");
      return;
    }
    const subject = encodeURIComponent(`RMD26 — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setStatus("ok");
    form.reset();
  }

  return (
    <Section id="contact" className="border-t border-line py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHead kicker={c.contact.kicker} title={c.contact.title} lead={c.contact.lead} />
          <p className="mb-5 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">{c.contact.or}</p>
          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex min-h-11 items-center gap-3 text-sm text-fg transition-colors duration-150 hover:text-accent"
              >
                <Mail className="size-4 text-accent" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.phoneHref}
                className="flex min-h-11 items-center gap-3 text-sm text-fg transition-colors duration-150 hover:text-accent"
              >
                <Phone className="size-4 text-accent" />
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex min-h-11 items-center gap-3 text-sm text-muted">
              <MapPin className="size-4 text-accent" />
              {CONTACT.address}
            </li>
          </ul>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl bg-surface p-6 hairline sm:p-8" noValidate>
          <label className="block">
            <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">{c.contact.name}</span>
            <input
              name="name"
              autoComplete="name"
              required
              className="mt-2 h-11 w-full rounded-md bg-surface-2 px-3 text-sm text-fg outline-none ring-0 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] focus:shadow-[0_0_0_1px_var(--color-accent)]"
            />
          </label>
          <label className="mt-4 block">
            <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">{c.contact.email}</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-2 h-11 w-full rounded-md bg-surface-2 px-3 text-sm text-fg outline-none shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] focus:shadow-[0_0_0_1px_var(--color-accent)]"
            />
          </label>
          <label className="mt-4 block">
            <span className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">{c.contact.message}</span>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-y rounded-md bg-surface-2 px-3 py-3 text-sm text-fg outline-none shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-fg)_12%,transparent)] focus:shadow-[0_0_0_1px_var(--color-accent)]"
            />
          </label>
          {status === "err" ? <p className="mt-3 text-sm text-warn">{c.contact.error}</p> : null}
          {status === "ok" ? <p className="mt-3 text-sm text-ok">{c.contact.sent}</p> : null}
          <Button type="submit" className="mt-6 w-full sm:w-auto">
            {c.contact.send}
          </Button>
        </form>
      </div>
    </Section>
  );
}
