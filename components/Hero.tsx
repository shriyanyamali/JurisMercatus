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
import { MoveUpRight, Github } from "lucide-react";
import AnimatedUnderline from "@/components/AnimatedUnderline";

export default function Hero() {
  return (
    <section
      className="
        max-w-screen-xl mx-auto
        px-4
        flex flex-col items-center
        space-y-16
        3xl:pt-40 xl:pt-24 3xl:pb-4 py-24
      "
    >
      <div className="hero-map mb-12" />

      <div className="flex flex-col items-center text-center space-y-12">
        <h1
          className="
          font-semibold
          text-5xl xs:text-[3.75rem] lg:text-[5rem]
          leading-[1.4]
          text-gray-900 
          [word-spacing:0.15em]
        "
        >
          {/* <span className="block font-bold bg-gradient-to-r from-[#3080FF] via-[#3080FF] to-[#3080FF] bg-clip-text text-transparent">
            JurisMercatus:
          </span> */}
          A Database Of <AnimatedUnderline /> Searchable Market Definitions
        </h1>

        <p
          className="
          mt-0  
          text-xl sm:text-2xl
          leading-relaxed
          max-w-4xl
          text-black
          font-medium
          [word-spacing:0.15em]re
          "
        >
          <span
            className="
         underline decoration-wavy decoration-2 
         decoration-[#03cea4]"
          >
            4000+
          </span>
          {""} market decisions.{" "}
          <span
            className="
         underline decoration-wavy decoration-2 
         decoration-[#03cea4]"
          >
            600
          </span>{" "}
          unique cases.{" "}
          <span
            className="
         underline decoration-wavy decoration-2 
         decoration-[#03cea4]"
          >
            100%
          </span>{" "}
          Free.
        </p>

        <div className="flex gap-4 !mt-14">
          <Link
            href="/semantic-search"
            className="
            group
            relative
            inline-flex items-center justify-center
            bg-[#03cea4] text-white font-regular
            rounded-xl
            pl-6 pr-16 xs:pl-10 xs:pr-20 py-[1.2rem]
            xs:text-base leading-none   
            hover:bg-[#03ce87] border border-gray-900 hover:text-gray-900
            transition duration-300 ease-in-out
          "
          >
            Try It Out
            <MoveUpRight
              className="
                absolute right-2
                bg-white rounded-xl p-2
                text-black w-10 h-10
                transition duration-300 ease-in-out
                group-hover:bg-gray-900
                group-hover:text-white
              "
            />
          </Link>

          <Link
            href="https://github.com/shriyanyamali/JurisMercatus"
            target="_blank"
            rel="noopener noreferrer"
            className="
                group
                relative
                inline-flex items-center justify-center
                bg-[#3094FF] text-white font-regular
                rounded-xl
                pl-8 pr-[4.5rem] xs:pl-10 xs:pr-20 py-[1.2rem]
                xs:text-base leading-none  
                hover:bg-[#3080FF] border border-gray-900
                hover:text-gray-900
                transition duration-300 ease-in-out
              "
          >
            GitHub
            <Github
              className="
              absolute right-2
              bg-white rounded-xl p-2
              text-black w-10 h-10
              transition duration-300 ease-in-out
              group-hover:bg-gray-900
              group-hover:text-white
            "
            />
          </Link>
        </div>

        <div className="text-lg items-center space-x-2 mt-8 font-semibold text-gray-800">
          Created by{" "}
          <Link
            className="underline underline-offset-4"
            href="https://shriyanyamali.com/"
            target="_blank"
          >
            Shriyan Yamali
          </Link>
        </div>
      </div>
    </section>
  );
}
