// -------------------------------------------------------------------------------
//
// JurisMercatus - Market definition database with semantic search
//
// Copyright (C) 2025 Shriyan Yamali
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
// Contact: yamalishriyan@gmail.com
//
// -------------------------------------------------------------------------------

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
