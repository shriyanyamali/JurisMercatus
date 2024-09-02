"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="Image"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "How Data is Extracted",
    description: (
      <>
        <p>
          Verdictr is incredibly easy to use. After navigating to the{" "}
          <a href="/search" className="text-blue-500">
            keyword search page
          </a>
          &nbsp; go to the search box and start searching! However, you might
          want to know how we extract our data. While we can&rsquo;t go into full detail,
          we can explain the basic process. This process starts with us scraping decision texts 
          from the European Commission's websites. After scraping these texts, we use 
          highly intelligent and fined tuned large language models to analyze the data. 
          After the data has been analyzed, we clean the data and upload it to our database.
        </p>
      </>
    ),
    badge: "How Data is Extracted",
    image: "https://images.unsplash.com/photo-1553895501-af9e282e7fc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Searching Practices",
    description: (
      <>
        <p>
          Before you start searching, you might want to know how the regex
          works. When you input a word, you will only get exact matches back.
          For example, if you enter "Bi ke" into the search bar, you will not
          get matches with the text "Bike" back, only matches with the text "Bi
          ke." That is because the searches are space sensitive. However, the
          searches are not case sensitive; both "Bike" and "bike" will yield the
          same results. You might run into special characters within you market
          decisons. If you find yourself in this spot, note that special
          characters are included in the search function. There are more
          do&rsquo;s and don&rsquo;ts than the ones discussed above. For more
          information, visit our&nbsp;
          <a href="/frequently-asked-questions" className="text-blue-500">
            FAQs page.
          </a>
        </p>
      </>
    ),
    badge: "Searching Practices",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Searchable Data",
    description: (
      <>
        <p>
          We have extracted 5 main data values from market decision; the case
          number, link to case, link to decision text, topic, and market
          decision text. The case number—the number assigned by the European
          Commission to identify cases—is the case number of the case where the
          market decision is located. The link to case is the link to the case's
          page on the European Commission's website. The link to decision text
          is the link to a PDF that contains the market decision. The topic is
          the general idea of what the market decision. For example, the
          decision text "A computer is an electronic device for storing and
          processing data, typically in binary form, according to instructions
          given to it in a variable program" might have a topic of "Computers."
          The market decision text is the text extracted from the decision text
          PDF. The market decision text has undergone minor filtering, where
          some special characters and misplaced spaces were removed. You will
          not get results if you add the data values in your search. For
          example, if you search for "Case Number: M.4696" you will not get any
          results, however, if you search for "M.4696" you will get results for
          any market decisions extracted from case M.4696.
        </p>
      </>
    ),
    badge: "Searchable Data",
    image:
      "https://images.unsplash.com/photo-1505744386214-51dba16a26fc?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
