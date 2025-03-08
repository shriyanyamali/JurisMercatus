import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Here to help
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[500px]">We&rsquo;ve Found The Path For You</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Verdictr is completely free and open access and will stay that way forever. Its the perfect way for you to search through competition cases and has no fees attached.  </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full ">
        <Image 
          src="/glasses.jpg"
          alt="glasses"
          width={1440}
          height={280}
          className="w-3/4 object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute hidden lg:flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Technology Products</p>
              </div>
              <p className="bold-20 mt-2">Searching...</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="bold-16 text-green-50">5 Matches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide