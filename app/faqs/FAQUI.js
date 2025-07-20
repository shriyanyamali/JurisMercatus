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
          question="How much does Verdictr cost?"
          answer="Nothing!"
        />
        <AccordionItem
          index={2}
          question="What are the benefits of Verdictr?"
          answer="Verdictr comes with a myriad of benefits including saving time, ease of access, accuracy, and more."
        />
        <AccordionItem
          index={3}
          question="What are the random characters in the market decision text?"
          answer="While searching, you might encounter special characters such as • or . Such characters are not random 
          but rather just characters that were included in the original decision text PDF. Treat these characters like you would treat
          any other character."
        />
        <AccordionItem
          index={9}
          question="Why are new market decisions not appearing for me?"
          answer="If you notice that after a prolonged period of time, no new market decisions have appeared for you, try clearing you cache by clicking Ctrl + Shift + R on Windows or Cmd + Shift + R on Mac."
        />
        <AccordionItem
          index={4}
          question="Are my searches case or space sensitive?"
          answer="Your searches are not case sensitive but are space sensitive. Make sure that you only add spaces when needed."
        />
        <AccordionItem
          index={5}
          question="Why is the semantic search page taking so long to load?"
          answer="The semantic search page loads all market decisions at once. Because of this, it may take some time for the page 
          to load all of the necessary text and links. However, once the page has loaded, all of the market decisions in our database
          will be accessible."
        />
        <AccordionItem
          index={6}
          question="How are the market decisions extracted?"
          answer="Our market decisions are extracted through a rigorous extraction and filtering system. We start by obtaining the 
            case decision files, where all the market decisions are located. However, these decisions are buried in unnecessary text.
            So after the files are located, we scrape the files and store the scraped text. This text is then filtered twice by
            a fined-tuned large language model. This filtered text is then uploaded into our database and made accessible to you!"
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