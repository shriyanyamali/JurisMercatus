import { Metadata } from 'next';
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import WhatIsVerdictr from '@/components/WhatIsVerdictr';

export const metadata: Metadata = {
  title: 'Verdictr',
};

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
