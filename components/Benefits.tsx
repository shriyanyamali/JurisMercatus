// -------------------------------------------------------------------------------
//
// JurisMercatus - Market definition database with semantic search
//
// Copyright (C) 2025 Shriyan Yamali
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
// Contact: yamalishriyan@gmail.com
//
// -------------------------------------------------------------------------------

import React from "react";

const benefitsData = [
  {
    feature: "Market Definitions",
    your: "4 000+ definitions",
    other: "All market definitions, but buried in PDFs",
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
      "JurisMercatus's database contains every market definition from the last 10 years.",
  },
  {
    title: "Saves Time",
    description:
      "JurisMercatus eliminates the need to manually search through the EU’s market definition database.",
  },
  {
    title: "Open Access",
    description:
      "JurisMercatus is fully open source: its website and database code are freely available on GitHub.",
  },
  {
    title: "Completely Free",
    description:
      "JurisMercatus is 100% free to use, with no fees, subscriptions, or costs.",
  },
];

export default function Benefits() {
  return (
    <>
      <section className="max-w-2xl lg:max-w-screen-lg mx-auto px-4 sm:px-6 pb-44">
        <div className="flex items-center mb-10 text-center xs:text-start">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
            JurisMercatus vs. EC's Search
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
                  JurisMercatus
                </th>
                <th className="border-b border-gray-200 px-4 py-2 text-center whitespace-nowrap">
                  EC's Case Search
                </th>
              </tr>
            </thead>
            <tbody>
              {benefitsData.map((row, idx) => (
                <tr key={idx} className="even:bg-gray-100 text-black">
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
        id="why-use-jurismercatus"
        className="max-w-2xl lg:max-w-screen-lg mx-auto px-3 sm:px-6 pb-44 text-center"
      >
        <div className="flex items-center mb-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
            Why Use JurisMercatus?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border border-gray-200 bg-white p-8 rounded-lg"
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3">
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
