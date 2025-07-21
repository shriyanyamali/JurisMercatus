"use client";

import React, { useState } from "react";

const AccordionItem = ({ index, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated); // Toggle rotation on click
  };

  return (
    <div className="border-b border-slate-200 lg:w-1/2 w-11/12 mx-auto">
      <button
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        className="w-full flex justify-between items-center py-5 text-xl sm:text-2xl text-slate-800"
      >
        <span className="pl-5 font-medium">{question}</span>
        <span className="relative flex items-start justify-start text-slate-800 transition-transform duration-300 pr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-6 h-6"
            style={{
              transformOrigin: "center",
              transform: isRotated ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.3s",
            }}
          >
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="pb-5 text-lg text-slate-500 px-5">{answer}</div>
      </div>
    </div>
  );
};

const FAQUI = () => {
  return (
    <>
      <h2 className="font-semibold flex items-center justify-center pb-24 pt-40 text-5xl text-center px-12">
        Frequently Asked Questions
      </h2>
      <div>
        <AccordionItem
          index={1}
          question="How much does Verdictr cost to use?"
          answer="Nothing!"
        />
        <AccordionItem
          index={3}
          question="What is semantic search?"
          answer="Semantic search is a search method that matches the meaning of a search query with market definitions,
          rather than matching keywords. For example, if you search &quot;tires&quot;, it might return results related to cars, even though
          tires are never explicitly mentioned in the market definition."
        />
        <AccordionItem
          index={3}
          question="What are the random characters in the market decision text?"
          answer="While searching, you might encounter special characters such as • or . These characters are a result of encoding mismatches.
          They don't affect the meaning or accuracy of the content, so you can simply ignore them and continue as usual."
        />
        <AccordionItem
          index={9}
          question="Why are new market decisions not appearing for me?"
          answer="If you notice that after a prolonged period of time, no new market decisions have appeared for you,
          try clearing you cache by clicking Ctrl + Shift + R on Windows or Cmd + Shift + R on Mac."
        />
        <AccordionItem
          index={5}
          question="Why is the semantic search page taking so long to load?"
          answer="The semantic search page loads all market decisions at once. Because of this, it may take some time for the page 
          to load all of the necessary text and links. However, once the page has loaded, it will load faster the next time around."
        />
        <AccordionItem
          index={5}
          question="Why are some words highlighted in a few of the matches?"
          answer="While Verdictr uses semantic search, if you type a word(s) in your search query which exactly matches the wording of 
          a match, then it will be highlighted."
        />
        <AccordionItem
          index={5}
          question="Why is it taking a long time for matches to be returned?"
          answer="If it is taking a long time to find matches, that indicates that there might not be any high scoring matches.
          Try adjusting your query to something broader."
        />
        <AccordionItem
          index={4}
          question="Are my searches case or space sensitive?"
          answer="Your searches are not case sensitive or space sensitive."
        />
        <AccordionItem
          index={7}
          question="Can I commercialize Verdictr or any of its code?"
          answer="No, Verdictr is provided solely for non-commercial use. You may not use any part of Verdictr in any commercial product. See the Terms & Conditions for more information."
        />
        <AccordionItem
          index={7}
          question="Does Verdictr store my data?"
          answer="No, we do not store your data."
        />
        <AccordionItem
          index={8}
          question="I have a question that isn&rsquo;t listed here. What can I do?"
          answer="While we currently do not have a phone number or any social media, if you have a question or 
            want to reach out, you can do so by emailing yamalishriyan@gmail.com"
        />
      </div>
    </>
  );
};

export default FAQUI;
