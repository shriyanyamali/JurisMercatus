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

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FFFAFA] mt-40">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* Veridctr Logo Text Mobile */}
        <div className="mb-6 md:mb-4 lg:mb-0 md:text-center">
          <span className="lg:hidden inline-block text-5xl sm:text-7xl font-semibold whitespace-nowrap">
            <span className="text-[#3094FF]">Juris</span>
            <span className="text-[#03cea4]">Mercatus</span>
          </span>
        </div>

        <div className="md:flex md:justify-between">
          {/* Veridctr Logo */}
          <div className="hidden lg:flex lg:items-end">
            <div className="text-center">
              <span className="text-5xl xl:text-6xl font-semibold whitespace-nowrap">
                <span className="text-[#3094FF]">Juris</span>
                <span className="text-[#03cea4]">Mercatus</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-8 sm:gap-6">
            {/* Site Links */}
            <div className="pt-4 lg:pt-0">
              <h2 className="mb-6 text-base font-semibold text-gray-900 uppercase">
                Site Links
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/semantic-search" className="hover:underline">
                    Semantic Search
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/how-it-works" className="hover:underline">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="/faqs" className="hover:underline">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Repository Links */}
            <div className="pt-4 lg:pt-0 lg:-translate-x-4 xl:-translate-x-8">
              <h2 className="mb-6 text-base font-semibold text-gray-900 uppercase">
                Code Repositories
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/shriyanyamali/JurisMercatus"
                    target="_blank"
                    className="hover:underline"
                  >
                    UI & Search
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/shriyanyamali/Lextract"
                    target="_blank"
                    className="hover:underline"
                  >
                    Lextract
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/shriyanyamali/pinecone-def-search"
                    target="_blank"
                    className="hover:underline"
                  >
                    Pinecone Definitions Search
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="md:ml-8 lg:ml-0 -translate-y-6 xs:-translate-y-0 xs:pt-2 md:pt-4 lg:pt-0">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/terms" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="/license" className="hover:underline">
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright and Credits */}
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            Copyright &copy; {new Date().getFullYear()} JurisMercatus. All
            rights reserved.
          </span>

          <br className="md:hidden" />

          <span
            className="
          hidden xs:inline-block sm:hidden text-sm md:inline-block
           text-gray-500 sm:text-center
           "
          >
            <span>
              Created by{" "}
              <Link
                className="underline underline-offset-4"
                href="https://shriyanyamali.com/"
                target="_blank"
              >
                Shriyan Yamali
              </Link>
            </span>

            <span className="hidden xs:inline-block mx-4">•</span>

            <span>
              Advised by{" "}
              <Link
                className="underline underline-offset-4"
                href="https://thibaultschrepel.com/"
                target="_blank"
              >
                Dr. Thibault Schrepel
              </Link>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
