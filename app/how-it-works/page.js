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

import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <section className="max-w-4xl mx-auto px-6">
      <section className="max-w-2xl lg:max-w-screen-lg mx-auto px-6 pt-40 pb-16 ">
        <h2 className="font-semibold flex items-center justify-center pb-16 text-5xl text-center px-12">
          How It Works
        </h2>
      </section>

      <h2 className="xs:text-center md:text-start font-medium pb-20 text-4xl underline decoration-wavy decoration-[#03cea4]">
        Data Extraction
      </h2>

      <section className="flex flex-col-reverse md:flex-row items-center mb-16 md:gap-12">
        <div className="sm:w-3/5 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">The Process</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            You might be interested extract our data and search the database.
            While we can’t go into full detail, we can give a high level
            overview, which is what we will do below.
          </p>
        </div>
        <div className="md:w-1/2 my-8 md:my-0">
          <Image
            src="/how-it-works/data-pipeline.png"
            alt="data pipeline"
            width={400}
            height={400}
            className="p-8 rounded-2xl bg-gray-200"
            unoptimized
          />
        </div>
      </section>

      <section className="flex flex-col-reverse items-center mb-16 md:flex-row-reverse md:gap-12">
        <div className="sm:w-3/5 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Scrape Cases</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            The process starts with us scraping definition texts from the
            European Commission's Competition Case Search{" "}
            <Link
              href="https://competition-cases.ec.europa.eu/search"
              target="_blank"
              className="underline text-blue-500"
            >
              website
            </Link>
            . We then convert the PDFs into text documents, at which point, most
            cases without market definition are excluded. The scraped text is
            known as text corpus.
          </p>
        </div>
        <div className="md:w-1/2 my-8 md:my-0">
          <Image
            src="/how-it-works/web-scrape.png"
            alt="web scrape"
            width={400}
            height={400}
            className="p-8 rounded-2xl bg-gray-200"
            unoptimized
          />
        </div>
      </section>

      <section className="flex flex-col-reverse items-center mb-16 md:flex-row md:gap-12">
        <div className="sm:w-3/5 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Section Extraction</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            After extracting the text corpus, we run it through a fine-tuned
            model of Google Gemini with a specially designed prompt which
            extracts the section where the market definitions are. At this
            point, if there are any remaining cases without market definitions,
            they are removed.
          </p>
        </div>
        <div className="md:w-1/2 my-8 md:my-0">
          <Image
            src="/how-it-works/data-input.png"
            alt="data input"
            width={400}
            height={400}
            className="rounded-2xl bg-gray-200"
            unoptimized
          />
        </div>
      </section>

      <section className="flex flex-col-reverse items-center mb-16 md:flex-row-reverse md:gap-12">
        <div className="sm:w-3/5 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Definition Extraction</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Then, we run the extracted market definition sections through
            another specially fine-tuned Google Gemini model to extract each
            individual definition, which is aggregated into a single JSON file.
          </p>
        </div>
        <div className="md:w-1/2 my-8 md:my-0">
          <Image
            src="/how-it-works/data-filtering.png"
            alt="data filtering"
            width={400}
            height={400}
            className="p-10 rounded-2xl bg-gray-200"
            unoptimized
          />
        </div>
      </section>

      <h2 className="xs:text-center md:text-start font-medium py-20 text-4xl underline decoration-wavy decoration-[#3094FF]">
        Searching For Market Definitions
      </h2>

      <section className="flex flex-col-reverse items-center my-16 md:flex-row md:gap-12">
        <div className="sm:w-3/5 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Embedding and Indexing</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Once the database is ready, each entry is parsed to extract the
            relevant text fields. These text chunks are then embedded using the
            Pinecone API, transforming them into high-dimensional vectors that
            capture their semantic meaning. These vectors are stored remotely in
            a Pinecone index.
          </p>
        </div>
        <div className="md:w-1/2 my-8 md:my-0">
          <Image
            src="/how-it-works/embedding.png"
            alt="embedding"
            width={400}
            height={400}
            className="p-8 rounded-2xl bg-gray-200"
            unoptimized
          />
        </div>
      </section>

      <section className="flex flex-col-reverse items-center mb-16 md:flex-row-reverse md:gap-12">
        <div className="sm:w-3/5 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Queries</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            When a user submits a query, the OpenAI API converts the query into
            its own vector representation using the same embedding model. This
            query vector is then used to search the Pinecone index, returning
            the closest matches based on semantic similarity rather than exact
            keywords.
          </p>
        </div>
        <div className="md:w-1/2 my-8 md:my-0">
          <Image
            src="/how-it-works/query.png"
            alt="query"
            width={400}
            height={400}
            className="p-12 rounded-2xl bg-gray-200"
            unoptimized
          />
        </div>
      </section>

      <section className="flex flex-col-reverse items-center my-16 md:flex-row md:gap-12">
        <div className="sm:w-3/5 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Matches</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            The returned matches are filtered based on the filters chosen. You
            may receive anywhere from 0 to 20 matches. Each match is given a
            score, representing how similar that match is to the meaning of your
            query (input). The closer the score is to 1.000, the more similar
            the match.
          </p>
        </div>
        <div className="md:w-1/2 my-8 md:my-0">
          <Image
            src="/how-it-works/matches.png"
            alt="matches"
            width={400}
            height={400}
            className="p-8 rounded-2xl bg-gray-200"
            unoptimized
          />
        </div>
      </section>
    </section>
  );
}
