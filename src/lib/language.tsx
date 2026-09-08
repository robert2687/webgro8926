import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { copy, type Lang } from "@/lib/content";

const STORAGE_KEY = "rmd26-lang";

type Copy = {
  nav: Record<string, string>;
  hero: Record<string, string>;
  stats: { value: string; label: string }[];
  thesis: Record<string, string>;
  work: Record<string, string>;
  experience: Record<string, string>;
  skills: Record<string, string>;
  about: { kicker: string; title: string; body: string[] };
  contact: Record<string, string>;
  footer: Record<string, string>;
  project: Record<string, string>;
  notFound: Record<string, string>;
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  c: Copy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStored(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "sk" || stored === "en" ? stored : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    setLangState(readStored());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "sk" ? "sk" : "en";
  }, [lang]);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, c: copy[lang] as Copy }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
