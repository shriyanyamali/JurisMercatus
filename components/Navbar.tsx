"use client";

import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const pathname = usePathname();

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-30
        transition-shadow duration-300
        ${isScrolled ? "bg-[#F2F0EF] shadow-md" : "bg-transparent shadow-none"}
      `}
    >
      <div className="max-container padding-container flex items-center justify-between px-6 lg:px-4 gap-6 my-3">
        {/* LOGO */}
        <Link
          href="/"
          className="cursor-pointer flex-shrink-0 p-2 sm:p-4 text-4xl font-bold text-black"
        >
          Verdictr
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex items-center gap-16">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.key} className="relative">
                <div className="group">
                  <Link
                    href={link.href}
                    className={`
                      text-lg font-medium transition-colors duration-200
                      ${
                        isActive
                          ? "text-[#3080FF]"
                          : "text-gray-700 group-hover:text-[#3080FF]"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-0.5 bg-[#3080FF]
                      ${
                        isActive
                          ? "w-full scale-x-100"
                          : "w-0 group-hover:w-full"
                      }
                      transition-all duration-300 origin-left
                      block
                    `}
                  />
                </div>
              </li>
            );
          })}
        </ul>

        {/* DESKTOP CONTACT BUTTON */}
        <div className="hidden lg:block">
          <div className="hidden lg:block">
            <Link
              href="mailto:yamalishriyan@gmail.com"
              target="_blank"
              className="
          group
          relative
          inline-flex items-center justify-center
          bg-gray-900 text-white font-regular
          rounded-full
          pl-[2rem] pr-[4.5rem] py-[1.2rem]      
          text-[1rem] leading-none   
          hover:bg-white border hover:border-gray-900 hover:text-gray-900
          transition duration-300 ease-in-out
        "
            >
              Contact
              <Send
                className="
                absolute right-2
                bg-white rounded-full p-2
                text-black w-10 h-10
                transition duration-300 ease-in-out
                group-hover:bg-gray-900
                group-hover:text-white
                overflow-visible
              "
              />
            </Link>
          </div>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button onClick={toggleMenu} className="lg:hidden p-2">
          <Image
            src={isMenuOpen ? "/cross.svg" : "/menu.svg"}
            alt="menu"
            width={28}
            height={28}
            className="w-7 h-7 transition-transform duration-200"
            style={{
              transform: isMenuOpen ? "rotate(90deg)" : "none",
              transformOrigin: "center",
            }}
          />
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`
          overflow-hidden bg-[F2F0EF] lg:hidden
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "max-h-screen" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col gap-6 p-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className={`
                    block text-2xl font-medium transition-colors duration-200
                    ${
                      isActive
                        ? "text-[#3080FF] underline"
                        : "text-gray-700 hover:text-[#3080FF]"
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
