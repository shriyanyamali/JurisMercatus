import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import AnimatedUnderline from "@/components/AnimatedUnderline";

export default function Hero() {
  return (
    <section
      className="
        max-w-screen-xl mx-auto
        px-4
        flex flex-col items-center
        space-y-16
        pt-40 lg:pb-20
      "
    >
      <div className="hero-map mb-12" />

      <div className="flex flex-col items-center text-center space-y-8">
        <h1
          className="
          font-semibold
          text-[60px] lg:text-[84px]
          leading-[1.4]
          text-gray-900 
          [word-spacing:0.15em]
        "
        >
          <span className="font-bold bg-gradient-to-r from-[#3b317b] via-[#133591] to-[#200f7c] bg-clip-text text-transparent">
            Verdictr:
          </span>
          {""} The {""}
          <AnimatedUnderline />
         {""} To Find Market Definitions
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

        <Link
          href="/search"
          className="
          group
          !mt-14
          relative
          inline-flex items-center justify-center
          bg-[#03cea4] text-white font-regular
          rounded-full
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
      bg-white rounded-full p-2
      text-black w-10 h-10
      transition duration-300 ease-in-out
      group-hover:bg-gray-900
      group-hover:text-white
    "
          />
        </Link>
      </div>
    </section>
  );
}
