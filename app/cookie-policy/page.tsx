import type { Metadata } from "next";
import { CookiePolicyContent } from "@/components/policy/CookiePolicyContent";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy page for Aylar Plastik website visitors.",
};

export default function CookiePolicyPage() {
  return <CookiePolicyContent />;
}
