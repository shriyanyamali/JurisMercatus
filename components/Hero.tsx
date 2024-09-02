import Image from "next/image";
import Button from "./Button";
import { AnimatedTooltipPreview } from "./demo/demo-animated-tooltip";
import { AnimatedPinDemo } from "./demo/demo-3d-pin";
import { CardSpotlightDemo } from "./demo/demo-card-spotlight";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="mt-[3rem] relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Verdictr</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Verdictr is the #1 way to find market defintions. We have an extensive
          collection of market decisions from over 6000 different cases spanning
          more than a decade.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="regular-12 lg:regular-16 ml-1">
            5 Star Service Guaranteed
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <a href="/search">
            <Button
              type="button"
              title="Try Verdictr Out"
              variant="btn_green"
            />
          </a>

          <a href="/howtouse">
            <Button
              type="button"
              title="How does it work?"
              icon="/play.svg"
              variant="btn_white_text"
            />
          </a>
        </div>
      </div>
      <div className="flex items-start">
        <span className="mt-[4rem] hidden sm:block">
         <CardSpotlightDemo />
        </span>
        <div className="relative">
          <span className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          </span>
          {/* <div className="hidden md:block">
            <AnimatedPinDemo />
          </div> */}
        </div>
      </div>

      {/* <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
