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

export default function WhatIsJurisMercatus() {
  return (
    <section
      id="what-is-jurismercatus"
      className="max-w-2xl lg:max-w-screen-lg mx-auto px-3 sm:px-6 py-24 3xl:pt-44 text-center"
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
