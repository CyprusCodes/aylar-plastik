import en from "@/messages/en";
import tr from "@/messages/tr";
import type { Locale } from "@/types/i18n";

export const translations = {
  en,
  tr,
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}
