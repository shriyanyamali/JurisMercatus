import React from "react";
import { Scale, Search, Database } from "lucide-react";

const features = [
  {
    title: "A Decade of Cases",
    description:
      "Verdictr's database contains every market definition from the last 10 years.",
  },
  {
    title: "Saves Time",
    description:
      "Verdictr eliminates the need to manually search through the EU’s market definition database.",
  },
  {
    title: "Open Access",
    description:
      "Verdictr is fully open source: its website and database code are freely available on GitHub.",
  },
  {
    title: "Completely Free",
    description:
      "Verdictr is 100% free to use, with no fees, subscriptions, or costs.",
  },
];

export default function WhatIsVerdictr() {
  return (
      <section
        id="what-is-verdictr"
        className="max-w-2xl lg:max-w-screen-lg mx-auto px-6 py-24 3xl:pt-44 text-center"
      >
        <div className="flex items-center mb-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
            What is Verdictr?
          </h2>
        </div>

        <p className="text-lg lg:text-xl lg:text-start text-gray-700 lg:max-w-4xl mb-16 leading-relaxed">
          Verdictr is a market definition database aggregated from the European
          Commission's merger and antitrust case decisions. It brings all the
          definitions together on one page and uses natural language searches,
          so your query doesn't need to exactly match the wording in the
          decisions.
        </p>
      </section>
  );
}
