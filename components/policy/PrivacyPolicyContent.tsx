"use client";

import { useLanguage } from "@/context/LanguageContext";
import { PolicyLayout } from "./PolicyLayout";

export function PrivacyPolicyContent() {
  const { t } = useLanguage();

  return (
    <PolicyLayout
      badge={t.policyPages.privacy.badge}
      title={t.policyPages.privacy.title}
      intro={t.policyPages.privacy.intro}
      sections={t.policyPages.privacy.sections}
      contactTitle={t.policyPages.privacy.contactTitle}
      contactBody={t.policyPages.privacy.contactBody}
    />
  );
}
