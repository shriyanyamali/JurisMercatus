"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

const normalizeString = (str) => {
  return str.toLowerCase().replace(/[^\w\s]/g, "").trim();
};

const highlightText = (text, searchTerm) => {
  if (!searchTerm.trim()) return text;

  const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedTerm})`, "gi");

  return text.replace(regex, "<mark>$1</mark>");
};

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedYear, setSelectedYear] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;

  useEffect(() => {
    fetch("/market-definitions.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error fetching the JSON data:", error));
  }, []);

  useEffect(() => {
    const normalizedSearchTerm = normalizeString(searchTerm);

    let filtered = data.filter(
      (item) =>
        (!selectedYear || item.year === selectedYear) &&
        ((item.case_number &&
          normalizeString(item.case_number).includes(normalizedSearchTerm)) ||
          (item.link &&
            normalizeString(item.link).includes(normalizedSearchTerm)) ||
          (item.topic &&
            normalizeString(item.topic).includes(normalizedSearchTerm)) ||
          (item.text &&
            normalizeString(item.text).includes(normalizedSearchTerm)))
    );

    filtered.sort((a, b) => {
      const yearA = parseInt(a.year);
      const yearB = parseInt(b.year);
      return sortOrder === "newest" ? yearB - yearA : yearA - yearB;
    });

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedYear, sortOrder, data]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: window.scrollY }); // prevents scroll jump
  };  

  const handleClear = () => {
    setSearchTerm("");
    setSelectedYear("");
    setSortOrder("newest");
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleGoToPage = (e) => {
    e.preventDefault();
    const pageInput = parseInt(e.target.pageNumber.value);
    if (!isNaN(pageInput) && pageInput >= 1 && pageInput <= totalPages) {
      setCurrentPage(pageInput);
      window.scrollTo({ top: window.scrollY });
    }
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let y = currentYear; y >= 1980; y--) {
      years.push(y);
    }
    return years;
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = filteredData.slice(startIndex, startIndex + itemsPerPage);

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
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2 ml-1">Keyword Search</label>
              <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search Keywords..."
                  className="w-full py-2 px-4 focus:outline-none"
                />
              <button onClick={() => {
                setSearchTerm("");
                setSelectedYear("");
                setSortOrder("newest");
              }} className="px-3 text-gray-600 hover:text-red-600">
                ✕
              </button>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2 ml-1 font-semibold">Filter by Year:</label>
              <select
                value={selectedYear}
                onChange={handleYearChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">All Years</option>
                {generateYearOptions().map((year) => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2 ml-1 font-semibold">Sort by:</label>
              <div className="flex gap-2">
                <button
                  onClick={() => handleSortOrderChange("newest")}
                  className={`p-2 border rounded-lg ${
                    sortOrder === "newest" ? "bg-blue-500 text-white" : "bg-white text-black"
                  }`}
                >
                  Newest First
                </button>
                <button
                  onClick={() => handleSortOrderChange("oldest")}
                  className={`p-2 border rounded-lg ${
                    sortOrder === "oldest" ? "bg-blue-500 text-white" : "bg-white text-black"
                  }`}
                >
                  Oldest First
                </button>
              </div>
            </div>
          </aside>

          <main className="w-3/4 p-4">
            <header className="mb-4">
              <h3 className="ml-2 text-base">
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
              <p className="ml-2 my-4 text-xl">
                {filteredData.length} result{filteredData.length !== 1 ? "s" : ""} found
                {selectedYear ? ` from ${selectedYear}` : ""}
              </p>
            </header>

            {filteredData.length > 0 && (
              <div className="flex items-center gap-4 mb-6 ml-2">
               <button
  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
  disabled={currentPage === 1}
  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
>
  &laquo; Prev
</button>
<button
  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
  disabled={currentPage === totalPages}
  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
>
  Next &raquo;
</button>

                <form onSubmit={handleGoToPage} className="flex items-center gap-2">
                  <input
                    type="number"
                    name="pageNumber"
                    min="1"
                    max={totalPages}
                    placeholder="Page #"
                    className="w-[6rem] p-2 border rounded"
                  />
                  <button type="submit" className="px-3 py-2 bg-blue-500 text-white rounded">
                    Go
                  </button>
                </form>
                <span className="ml-4 text-lg">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            )}

            <section className="grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-10">
              {currentPageData.length ? (
                currentPageData.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white shadow-md rounded-lg border border-gray-300"
                  >
                    <h2 className="font-semibold">
                      Case Number: {item.case_number || ""}
                    </h2>
                    <span className="text-gray-90">Year: {item.year} </span>
                    <p>
                      <Link
                        target="_blank"
                        href={`https://competition-cases.ec.europa.eu/cases/${item.case_number}`}
                        passHref
                      >
                        <span className="text-blue-600 underline">Link to Case</span>
                      </Link>
                    </p>
                    <p>
                      <Link
                        href={item.link}
                        target="_blank"
                        passHref
                        className="my-4"
                      >
                        <span className="text-blue-600 underline">Link to Decision Text</span>
                      </Link>
                    </p>
                    <p className="font-medium my-2">Topic: {item.topic || ""}</p>
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

            {filteredData.length > 0 && (
              <div className="flex items-center gap-4 mt-6 ml-2">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                  &laquo; Prev
                </button>
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                  Next &raquo;
                </button>
                <form onSubmit={handleGoToPage} className="flex items-center gap-2">
                  <input
                    type="number"
                    name="pageNumber"
                    min="1"
                    max={totalPages}
                    placeholder="Page #"
                    className="w-[6rem] p-2 border rounded"
                  />
                  <button type="submit" className="px-3 py-2 bg-blue-500 text-white rounded">
                    Go
                  </button>
                </form>
                <span className="ml-4 text-lg">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}
