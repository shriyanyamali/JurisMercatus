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

import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JurisMercatus",
  description:
    "Search feature for EU competition case relevant market decisions",
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* After removing the banner, delete top-20 md:top-14 from Navbar.tsx and replace it with top-0 */}

        <div className="fixed top-0 left-0 w-full bg-blue-600 text-white text-lg md:text-xl font-medium text-center py-2 sm:py-4 z-50">
          <div className="mx-4 lg:mx-0">
            Notice: The search function is temporarily unavailable working as we pursue funding.
          </div>
        </div>

        {/* Between navbar and context; remove when removing banner */}
        
        <div className="h-12"></div>

        <Navbar />

        <main className="relative overflow-hidden">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
