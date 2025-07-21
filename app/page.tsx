import Hero from "@/components/Hero";
import WhatIsVerdictr from "@/components/WhatIsVerdictr";
import Benefits from "@/components/Benefits";
import Applications from "@/components/Applications";
import Instructions from "@/components/Instructions";
import Infrastructure from "@/components/Infrastructure";

export const metadata = {
  title: "Home - Verdictr",
  description: "Homepage for Verdictr. Made by Shriyan Yamali.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsVerdictr />
      <Infrastructure />
      <Instructions />
      <Benefits />
      <Applications />
    </>
  );
}
