import Hero from "@/components/Hero";
import WhatIsJurisMercatus from "@/components/WhatIsJurisMercatus";
import Benefits from "@/components/Benefits";
import Applications from "@/components/Applications";
import GettingStarted from "@/components/GettingStarted";
import Infrastructure from "@/components/Infrastructure";
import Motivation from "@/components/Motivation";
import Contributions from "@/components/Contributions";

export const metadata = {
  title: "Home - JurisMercatus",
  description: "Homepage for JurisMercatus. Made by Shriyan Yamali.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsJurisMercatus />
      <GettingStarted />
      <Motivation />
      <Infrastructure />
      <Benefits />
      <Applications />
      <Contributions />
    </>
  );
}
