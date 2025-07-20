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
        3xl:pt-40 xl:pt-24 py-20
      "
    >
      <div className="hero-map mb-12" />

      <div className="flex flex-col items-center text-center space-y-12">
        <h1
          className="
          font-semibold
          text-[60px] lg:text-[5rem]
          leading-[1.4]
          text-gray-900 
          [word-spacing:0.15em]
        "
        >
          <span className="font-bold bg-gradient-to-r from-[#3080FF] via-[#3080FF] to-[#3080FF] bg-clip-text text-transparent">
            Verdictr:
          </span>
          {""} A <AnimatedUnderline /> Database Of Market Definitions
            
        </h1>

        <p
          className="
          mt-0  
          text-xl sm:text-2xl
          leading-relaxed
          max-w-4xl
          text-black
          font-medium
          [word-spacing:0.15em]
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
            href="/search"
            className="
            group
            relative
            inline-flex items-center justify-center
            bg-[#03cea4] text-white font-regular
            rounded-xl
            pl-[2.5rem] pr-[5rem] py-[1.2rem]
            text-[1rem] leading-none   
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
            href="https://github.com/shriyanyamali/Verdictr"
            target="_blank"
            rel="noopener noreferrer"
            className="
                group
                relative
                inline-flex items-center justify-center
                bg-[#3094FF] text-white font-regular
                rounded-xl
                pl-[2.5rem] pr-[5rem] py-[1.2rem]
                text-[1rem] leading-none   
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

        <div className="text-lg flex items-center space-x-2 mt-8 font-semibold text-gray-800">
          <Link
            className="underline underline-offset-4"
            href="https://shriyanyamali.tech/"
            target="_blank"
          >
            Shriyan Yamali
          </Link>
          <span>•</span>
          <Link
            className="underline underline-offset-4"
            href="https://thibaultschrepel.com/"
            target="_blank"
          >
            Dr. Schrepel
          </Link>
        </div>
      </div>
    </section>
  );
}
