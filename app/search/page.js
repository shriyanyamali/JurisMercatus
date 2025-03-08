"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

const normalizeString = (str) => {
  return str
    .toLowerCase()
    .replace(/[\s\W_]+/g, " ")
    .trim();
};

const highlightText = (text, searchTerm) => {
  if (!searchTerm.trim()) return text;

  const normalizedSearchTerm = normalizeString(searchTerm);
  const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedTerm})`, "gi");

  return text.replace(regex, "<mark>$1</mark>");
};

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/market-definitions.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error("Error fetching the JSON data:", error));
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const normalizedSearchTerm = normalizeString(term);

    const filtered = data.filter(
      (item) =>
        (item.case_number &&
          normalizeString(item.case_number).includes(normalizedSearchTerm)) ||
        (item.link &&
          normalizeString(item.link).includes(normalizedSearchTerm)) ||
        (item.topic &&
          normalizeString(item.topic).includes(normalizedSearchTerm)) ||
        (item.text && normalizeString(item.text).includes(normalizedSearchTerm))
    );

    setFilteredData(filtered);
  };

  const handleClear = () => {
    setSearchTerm("");
    setFilteredData(data);
  };

  return (
    <>
      <Head>
        <title>Search - Verdictr</title>
        <meta
          name="Search"
          content="Verdictr, Search, Key, Keywords, Competition Case, Competition Law, Law"
        />
      </Head>
      <div className="flex flex-col min-h-screen font-sans">
        <div className="mt-2 flex flex-1">
          <aside className="w-1/4 p-4 bg-white shadow-md">
            <div className="flex items-center bg-gray-100 rounded-lg p-2 mb-4">
              <button
                onClick={handleClear}
                className="mt-12 border-none bg-transparent text-gray-600 cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </button>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search Keywords..."
                className="py-2 flex-1 px-3 rounded-lg border border-gray-300 ml-2"
              />
              <button className="border-none bg-transparent text-gray-600 cursor-pointer">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <footer className="mt-auto text-center text-sm text-black">
              <p>Copyright &copy; {new Date().getFullYear()} Verdictr. All rights reserved.</p>
            </footer>
          </aside>
          <main className="w-3/4 p-4">
            <header className="mb-4">
              <h3 className="text-base">
                Data from{" "}
                <Link
                  target="_blank"
                  href="https://competition-cases.ec.europa.eu/"
                  passHref
                >
                  <span className="font-medium text-blue-600 underline">
                    competition-cases.ec.europa.eu
                  </span>
                </Link>
              </h3>
              {/* <h3 className="text-base">
                Problems?{" "}
                <Link
                  href="mailto:srujanshriyan@gmail.com"
                  target="_blank"
                  className="font-medium text-blue-600 underline"
                >
                  Contact <span>srujanshriyan@gmail.com</span>
                </Link>
              </h3> */}
            </header>
            <section className="grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-10">
              {filteredData.length ? (
                filteredData.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white shadow-md rounded-lg border border-gray-300"
                  >
                    <h2 className="text-lg font-semibold">
                      Case Number: {item.case_number || ""}
                    </h2>
                    <p>
                      <Link
                        target="_blank"
                        href={`https://competition-cases.ec.europa.eu/cases/${item.case_number}`}
                        passHref
                      >
                        <span className="text-blue-600 underline">
                          Link to Case
                        </span>
                      </Link>
                    </p>
                    <p>
                      <Link
                        href={item.link}
                        target="_blank"
                        passHref
                        className="my-4"
                      >
                        <span className="text-blue-600 underline">
                          Link to Decision Text
                        </span>
                      </Link>
                    </p>
                    <p className="font-medium my-2 ">
                      Topic: {item.topic || ""}
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: highlightText(item.text, searchTerm),
                      }}
                    ></div>
                  </div>
                ))
              ) : (
                <p>No results found.</p>
              )}
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
