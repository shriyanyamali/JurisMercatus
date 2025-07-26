// =============================================================================
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
// =============================================================================

import Link from "next/link";
import React from "react";

export default function GettingStarted() {
  return (
    <section className="max-w-2xl lg:max-w-screen-lg mx-auto px-6 pb-44">
      <div className="flex items-center mb-10 justify-center xs:justify-normal text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
          Getting Started
        </h2>
      </div>
      <ol className="space-y-8">
        <li className="flex items-start">
          <div className="flex-shrink-0 mt-2 md:mt-3 w-10 h-10 rounded-full bg-gradient-to-tr from-[#03cea4] to-[#3080FF] text-white flex items-center justify-center">
            <span className="font-bold">1</span>
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-medium text-gray-900">
              Go to the{" "}
              <Link href="/semantic-search" className="text-blue-500 underline">
                {" "}
                Search Page{" "}
              </Link>
            </h3>
            <p className="mt-1 text-xl text-gray-600">
              Enter any filters you would like. Click on “Search Anything...” or
              scroll to the input field to begin your search.
            </p>
          </div>
        </li>

        <li className="flex items-start">
          <div className="flex-shrink-0 mt-2 md:mt-3 w-10 h-10 rounded-full bg-gradient-to-tr from-[#03cea4] to-[#3080FF] text-white flex items-center justify-center">
            <span className="font-bold">2</span>
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-medium text-gray-900">
              Input Your Topic or Question
            </h3>
            <p className="mt-1 text-xl text-gray-600">
              Enter any topic, question, or statement you’d like to search for.
              Your search does not need to match the exact wording of the market
              definition for you to get a result.
            </p>
          </div>
        </li>

        <li className="flex items-start">
          <div className="flex-shrink-0 mt-2 md:mt-3 w-10 h-10 rounded-full bg-gradient-to-tr from-[#03cea4] to-[#3080FF] text-white flex items-center justify-center">
            <span className="font-bold">3</span>
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-medium text-gray-900">Get Matches</h3>
            <p className="mt-1 text-xl text-gray-600">
              After a couple of seconds, you should get the top 20 matches based
              on your search. If you do not get any results, adjust your filters
              and try again.
            </p>
          </div>
        </li>

        <li className="flex items-start">
          <div className="flex-shrink-0 mt-2 md:mt-3 w-10 h-10 rounded-full bg-gradient-to-tr from-[#03cea4] to-[#3080FF] text-white flex items-center justify-center">
            <span className="font-bold">4</span>
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-medium text-gray-900">
              Check the Scores
            </h3>
            <p className="mt-1 text-xl text-gray-600">
              Each match will have a score ranging from 0.000 to 1.000. A score
              close to 1.000 means that the match is very similar to your
              search. Average scores are between 0.300 and 0.600.
            </p>
          </div>
        </li>

        <li className="flex items-start">
          <div className="flex-shrink-0 mt-2 md:mt-3 w-10 h-10 rounded-full bg-gradient-to-tr from-[#03cea4] to-[#3080FF] text-white flex items-center justify-center">
            <span className="font-bold">5</span>
          </div>
          <div className="ml-4">
            <h3 className="text-2xl font-medium text-gray-900">
              Continue Searching
            </h3>
            <p className="mt-1 text-xl text-gray-600">
              Following the aforementioned steps to conduct another search. If
              you want to see all of the unsorted market definitions, either
              reload the page or click the "Clear Search" button to remove the
              matches from your screen. Please note that clicking the "Clear
              Search" button will also clear all applied filters.
            </p>
          </div>
        </li>
      </ol>
    </section>
  );
}
