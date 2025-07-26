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
import { Scale, Search, Database } from "lucide-react";

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

export default function Motivation() {
  return (
    <section
      id="motivation"
      className="max-w-2xl lg:max-w-screen-lg mx-auto px-6 pb-44"
    >
      <div className="flex items-center mb-10 text-center xs:text-start">
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
          The Motivation
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-white border border-gray-200 p-8 rounded-2xl">
          <Scale className="w-12 h-12 mb-4 text-indigo-600" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Essential Role
          </h3>
          <div className="text-gray-600 text-center">
            Market decisions define the product and geographic boundaries
            crucial for EU competition law.
          </div>
        </div>

        <div className="flex flex-col items-center bg-white border border-gray-200 p-8 rounded-2xl">
          <Search className="w-12 h-12 mb-4 text-indigo-600" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Discovery Challenge
          </h3>
          <div className="text-gray-600 text-center">
            The EC buries each decision in long, separate PDFs, making finding
            market definitions laborious and time-consuming.
          </div>
        </div>

        <div className="flex flex-col items-center bg-white border border-gray-200 p-8 rounded-2xl">
          <Database className="w-12 h-12 mb-4 text-indigo-600" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Our Solution
          </h3>
          <div className="text-gray-600 text-center">
            JurisMercatus, which compiles ten years of market definitions into
            one open-source, semantically searchable database.
          </div>
        </div>
      </div>
    </section>
  );
}
