"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="logo"
          width={74}
          height={29}
          className="invisible"
        />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter invisible hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src={isMenuOpen ? "/cross.svg" : "/menu.svg"}
        alt="menu"
        width={isMenuOpen ? 24 : 32} // Adjust sizes here
        height={isMenuOpen ? 24 : 32} // Adjust sizes here
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-800 text-white p-4 flex flex-col gap-8 lg:hidden z-40">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-lg font-semibold cursor-pointer transition-all hover:underline"
              onClick={() => setIsMenuOpen(false)} // Close the menu after a link is clicked
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
