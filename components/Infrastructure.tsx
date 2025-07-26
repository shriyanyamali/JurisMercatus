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

import Image from "next/image";

interface Infrastructure {
  name: string;
  icon: string;
  category?: string;
}

export default function TechnologiesSection() {
  const technologies: Infrastructure[] = [
    {
      name: "React",
      icon: "infrastructure-logos/react.svg?height=48&width=48",
    },
    {
      name: "Next.js",
      icon: "infrastructure-logos/nextjs.svg?height=48&width=48",
    },
    {
      name: "TypeScript",
      icon: "infrastructure-logos/typescript.svg?height=48&width=48",
    },
    {
      name: "Tailwind CSS",
      icon: "infrastructure-logos/tailwind.svg?height=48&width=48",
    },
    {
      name: "Python",
      icon: "infrastructure-logos/python.svg?height=48&width=48",
    },
    {
      name: "Pandas",
      icon: "infrastructure-logos/pandas.svg?height=48&width=48",
    },
    {
      name: "Gemini",
      icon: "infrastructure-logos/gemini.svg?height=48&width=48",
    },
    {
      name: "OpenAI",
      icon: "infrastructure-logos/openai.svg?height=48&width=48",
    },
    {
      name: "Pinecone",
      icon: "infrastructure-logos/pinecone.png?height=48&width=48",
    },
    {
      name: "Vercel",
      icon: "infrastructure-logos/vercel.svg?height=48&width=48",
    },
  ];

  return (
    <section className="max-w-2xl lg:max-w-screen-lg mx-auto px-6 pb-44">
      <div className="flex items-center mb-10 text-center xs:text-start">
        <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">
          Infrastructure
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center p-4 rounded-lg bg-white hover:bg-[#d4d4d444] transition-colors duration-200 border-2 border-neutral-200 hover:border-neutral-300"
          >
            <div className="relative w-12 h-12 mb-2">
              <Image
                src={tech.icon || "infrastructure-logos/placeholder.svg"}
                alt={`${tech.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm mt-1 font-medium text-neutral-800 text-center leading-tight">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
