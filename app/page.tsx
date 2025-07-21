import Hero from "@/components/Hero";
import WhatIsVerdictr from "@/components/WhatIsVerdictr";
import Benefits from "@/components/Benefits";
import Applications from "@/components/Applications";
import HowToUse from "@/components/HowToUse";
import Technologies from "@/components/Technologies";

export const metadata = {
  title: "Home - Verdictr",
  description: "Homepage for Verdictr. Made by Shriyan Yamali.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsVerdictr />
      <Technologies />
      <HowToUse />
      <Benefits />
      <Applications />
    </>
  );
}
