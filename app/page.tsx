import Hero from "@/components/Hero";
import WhatIsVerdictr from "@/components/WhatIsVerdictr";
import Benefits from "@/components/Benefits";
import Applications from "@/components/Applications";
import GettingStarted from "@/components/GettingStarted";
import Infrastructure from "@/components/Infrastructure";
import Motivation from "@/components/Motivation";
import Contributions from "@/components/Contributions";

export const metadata = {
  title: "Home - Verdictr",
  description: "Homepage for Verdictr. Made by Shriyan Yamali.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsVerdictr />
      <GettingStarted />
      <Motivation />
      <Infrastructure />
      <Benefits />
      <Applications />
      <Contributions />
    </>
  );
}
