import React from "react";

export default function WhatIsJurisMercatus() {
  return (
    <section
      id="what-is-jurismercatus"
      className="max-w-2xl lg:max-w-screen-lg mx-auto px-4 sm:px-6 py-24 3xl:pt-44 text-center"
    >
      <div className="flex items-center mb-10">
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
          What is JurisMercatus?
        </h2>
      </div>

      <p className="text-lg lg:text-xl lg:text-start text-gray-700 lg:max-w-4xl mb-16 leading-relaxed">
        JurisMercatus is a market definition database aggregated from the
        European Commission's merger and antitrust case decisions. It brings all
        the definitions together on one page and uses natural language searches,
        so your query doesn't need to exactly match the wording in the
        decisions.
      </p>
    </section>
  );
}
