import React from "react";

const benefitsData = [
  {
    feature: "Market Definitions",
    your: "4 000+ definitions",
    other: "Every market definition in EU history",
  },
  {
    feature: "Search Flexibility",
    your: "Supports natural language searching",
    other: "No search function",
  },
  {
    feature: "Database Access",
    your: "Complete access to full database and code",
    other: "Limited access to database",
  },
  {
    feature: "UI/UX Improvements",
    your: "Weekly",
    other: "Rarely",
  },
];

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

export default function Benefits() {
  return (
    <>
      <section className="max-w-2xl lg:max-w-screen-lg mx-auto px-4 sm:px-6 pb-44 text-center">
        <div className="flex items-center mb-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
            Verdictr vs. EC's Case Search
          </h2>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 text-sm sm:text-base">
            <thead className="bg-gray-100">
              <tr>
                <th className="border-b border-gray-200 px-4 py-2 text-center whitespace-nowrap">
                  Feature
                </th>
                <th className="border-b border-gray-200 px-4 py-2 text-center whitespace-nowrap">
                  Verdictr
                </th>
                <th className="border-b border-gray-200 px-4 py-2 text-center whitespace-nowrap">
                  EC's Case Search
                </th>
              </tr>
            </thead>
            <tbody>
              {benefitsData.map((row, idx) => (
                <tr key={idx} className="even:bg-gray-100 even:text-black text-gray-700">
                  <td className="border-b border-gray-200 px-4 py-3 text-center whitespace-nowrap">
                    {row.feature}
                  </td>
                  <td className="border-b border-gray-200 px-4 py-3 text-center whitespace-nowrap">
                    {row.your}
                  </td>
                  <td className="border-b border-gray-200 px-4 py-3 text-center whitespace-nowrap">
                    {row.other}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section
        id="why-use-verdictr"
        className="max-w-2xl lg:max-w-screen-lg mx-auto px-6 text-center"
      >
        <div className="flex items-center mb-10">
          <h2 className="text-6xl font-bold text-gray-900">
            Why Use Verdictr?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-gray-200 bg-white p-8 rounded-lg hover:shadow-md transition-shadow duration-300"
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
