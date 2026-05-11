import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProductsSection } from "@/sections/ProductsSection";
import { SubscribeSection } from "@/sections/SubscribeSection";
import { ReferencesSection } from "@/sections/ReferencesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <SubscribeSection />
      <ReferencesSection />
    </>
  );
}
