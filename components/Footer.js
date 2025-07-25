import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#FFFAFA] mt-40">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* Veridctr Logo */}
          <div className="mb-6 md:mb-0">
            <div className="ml-2 lg:ml-12 hidden md:flex items-center">
              <img
                src="logo.png"
                className="h-48"
                alt="JurisMercatus Logo"
              />
            </div>
            <span className="md:hidden self-center text-5xl sm:text-7xl font-semibold whitespace-nowrap">
              <span className="text-[#3094FF]">Juris</span><span className="text-[#03cea4]">Mercatus</span>
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6">
            {/* Site Links */}
            <div className="pt-4 lg:pt-0 lg:translate-x-12">
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
            <div className="pt-4 lg:pt-0">
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
                    href="https://github.com/shriyanyamali/market-def-scraper"
                    target="_blank"
                    className="hover:underline"
                  >
                    Market Definitions Scraper
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
            <div className="sm:mr-[6rem]">
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
                href="https://shriyanyamali.tech/"
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
