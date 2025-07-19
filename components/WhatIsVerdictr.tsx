// components/WhatIsVerdictr.tsx
import React from "react";

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
    <>
      <section
        id="what-is-verdictr"
        className="max-w-screen-lg mx-auto py-24 3xl:pt-44 3xl:pb-24"
      >
        <div className="flex items-center mb-10">
          <h2 className="text-6xl font-bold text-gray-900">
            What is Verdictr?
          </h2>
        </div>

        <p className="text-xl text-gray-700 max-w-4xl mb-16 leading-relaxed">
          Verdictr is a market definition database aggregated from the European
          Commission's merger and antitrust case decisions. It brings all the
          definitions together on one page and uses natural language searches,
          so your query doesn't need to exactly match the wording in the
          decisions.
        </p>
      </section>

      <section
        id="why-use-verdictr"
        className="max-w-screen-lg mx-auto pb-24"
      >
        <div className="flex items-center mb-10">
          <h2 className="text-6xl font-bold text-gray-900">
            Why Use Verdictr?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-gray-200 p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-3xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-600 leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
