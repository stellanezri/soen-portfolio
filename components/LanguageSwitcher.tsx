"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label="Changer de langue"
      className="rounded-full border border-border px-4 py-2 text-sm text-espresso transition-colors hover:border-camel hover:bg-khaki/40"
    >
      {lang.toUpperCase()}
    </button>
  );
}
