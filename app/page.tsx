import { Metadata } from 'next';
import WhatIsVerdictr from '@/components/WhatIsVerdictr';
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export const metadata = {
  title: 'Home - Verdictr',
  description: 'Homepage for Verdictr. Made by Shriyan Yamali.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsVerdictr />
      <Camp />
      <Guide />
      <Features />
    </>
  );
}
