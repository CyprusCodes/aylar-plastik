"use client";

import { useLanguage } from "@/context/LanguageContext";
import { PolicyLayout } from "./PolicyLayout";

export function CookiePolicyContent() {
  const { t } = useLanguage();

  return (
    <PolicyLayout
      badge={t.policyPages.cookie.badge}
      title={t.policyPages.cookie.title}
      intro={t.policyPages.cookie.intro}
      sections={t.policyPages.cookie.sections}
      contactTitle={t.policyPages.cookie.contactTitle}
      contactBody={t.policyPages.cookie.contactBody}
    />
  );
}
