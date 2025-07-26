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

"use client";

import React, { useEffect, useState } from "react";

export default function AnimatedUnderline() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const hasAnimated = sessionStorage.getItem("underlineAnimated");

    if (!hasAnimated) {
      setShouldAnimate(true);
      sessionStorage.setItem("underlineAnimated", "true");
    }
  }, []);

  return (
    <span className="relative inline-block">
      <span className="relative z-10">Semantically</span>
      <span
        className={`
          absolute bottom-0 left-0
          w-full h-1/2
          bg-[#03cea4] z-0
          transform origin-left
          ${shouldAnimate ? "animate-underline" : ""}
        `}
      />
    </span>
  );
}
