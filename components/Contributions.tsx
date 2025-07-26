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

export default function Contributions() {
  return (
    <section className="max-w-2xl lg:max-w-screen-lg mx-auto px-6">
      <div className="flex items-center mb-10 text-center xs:text-start">
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
          Contributions
        </h2>
      </div>

      <p className="text-lg lg:text-xl lg:text-start text-gray-700 lg:max-w-4xl mb-16 leading-relaxed">
        JurisMercatus and its constituent repositories were developed by Shriyan
        Yamali, who designed the interface and implemented the application. This
        project was conducted under the advisement of Professor Thibault
        Schrepel.
      </p>
    </section>
  );
}
