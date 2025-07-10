"use client";

import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-30
        transition-shadow duration-300
        ${isScrolled
          ? "bg-white shadow-md"
          : "bg-transparent shadow-none"}
      `}
    >
      <div className="max-container padding-container flex items-center justify-between p-2 lg:p-0">
        {/* LOGO */}
        <Link href="/" className="cursor-pointer flex-shrink-0 mr-4 p-0">
          <Image
            src="verdictr-logo.png"
            alt="Verdictr logo"
            width={100}
            height={48}
            className="rounded-full"
            priority
          />
        </Link>

        {/* desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.key} className="relative group">
              <Link
                href={link.href}
                className={`
                  text-xl font-medium transition-colors duration-200
                  ${isScrolled ? "text-gray-700 hover:text-green-600"
                               : "text-gray-700 hover:text-green-600"}
                `}
              >
                {link.label}
              </Link>
              <span
                className={`
                  absolute bottom-0 left-0 h-0.5 w-full bg-green-600
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300 origin-left
                `}
              />
            </li>
          ))}
        </ul>

        {/* invisible Sign In (holds width) */}
        <div className="hidden lg:flex items-center invisible pointer-events-none">
          <Button
            type="button"
            title="Sign In"
            icon="/user.svg"
            variant="btn_primary"
          />
        </div>

        {/* mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2"
        >
          <Image
            src={isMenuOpen ? "/cross.svg" : "/menu.svg"}
            alt="menu"
            width={28}
            height={28}
            className={`
              w-7 h-7 transform transition-transform duration-200
            `}
            style={{
              transform: isMenuOpen ? "rotate(90deg)" : "none",
              transformOrigin: "center",
            }}
          />
        </button>
      </div>

      {/* mobile dropdown */}
      <div
        className={`
          overflow-hidden bg-white lg:hidden
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? "max-h-screen" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col gap-6 p-6">
          {NAV_LINKS.map(link => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="
                  block text-gray-700 text-2xl font-medium
                  transition-colors duration-200 hover:text-green-600
                "
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
