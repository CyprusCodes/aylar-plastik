import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/components/policy/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy page for Aylar Plastik website visitors.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
