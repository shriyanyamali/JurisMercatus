"use client";

import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const normalizeString = (str) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .replace(/[^\w\s&]/g, "")
    .trim();
};

const highlightText = (text, searchTerm) => {
  if (!searchTerm.trim()) return text;
  const escaped = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
};

const policyAreas = ["Merger", "Antitrust"];
const ITEMS_PER_PAGE = 20;

export default function SearchPage() {
  const [rawData, setRawData] = useState([]);
  const [rawResults, setRawResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [inputTerm, setInputTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPolicy, setSelectedPolicy] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const [showScroll, setShowScroll] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [doNotShow, setDoNotShow] = useState(false);

  useEffect(() => {
    fetch("/database.json")
      .then((r) => r.json())
      .then(setRawData)
      .catch(console.error);
  }, []);

  // scroll‐to‐top button toggle
  useEffect(() => {
    const onScroll = () => setShowScroll(window.pageYOffset > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // warning modal
  useEffect(() => {
    if (!localStorage.getItem("hideDeviceWarning")) {
      setShowWarning(true);
    }
  }, []);
  const handleCloseWarning = () => {
    if (doNotShow) localStorage.setItem("hideDeviceWarning", "true");
    setShowWarning(false);
  };

  // semantic search on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const q = inputTerm.trim();
    setSearchTerm(q);

    if (!q) {
      setRawResults(null);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(
        `/api/search?q=${encodeURIComponent(q)}&limit=${ITEMS_PER_PAGE}`
      );
      const { matches } = await res.json();
      const enriched = matches.map((m) => ({
        score: m.score,
        ...m.metadata,
      }));
      setRawResults(enriched);
      setCurrentPage(1);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowAll = () => {
    setRawResults(null);
    setInputTerm("");
    setSearchTerm("");
    setSelectedYear("");
    setSelectedPolicy("");
    setSortOrder("newest");
    setCurrentPage(1);
  };

  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    let list = rawResults !== null ? rawResults : rawData;

    list = list.filter((item) => {
      const okYear = !selectedYear || item.year === selectedYear;
      const okPolicy =
        !selectedPolicy ||
        normalizeString(item.policy_area) === normalizeString(selectedPolicy);
      return okYear && okPolicy;
    });

    list.sort((a, b) => {
      const yA = parseInt(a.year),
        yB = parseInt(b.year);
      return sortOrder === "newest" ? yB - yA : yA - yB;
    });

    setFilteredData(list);
    setCurrentPage(1);
  }, [rawData, rawResults, selectedYear, selectedPolicy, sortOrder]);

  useEffect(() => {
    setCurrentPage(1);
  }, [rawResults, selectedYear, selectedPolicy, sortOrder]);

  // pagination
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentPageData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const getResultMessage = () => {
    const count = filteredData.length;
    if (rawResults !== null && searchTerm) {
      const plural = count === 1 ? "result" : "results";
      return `Top ${count} ${plural} found for the search "${searchTerm}"`;
    }
    const plural = count === 1 ? "result found" : "total results found";
    return `${count} ${plural}`;
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Head>
        <title>Search – Verdictr</title>
      </Head>

      {showWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 text-center">
            <h2 className="text-xl font-semibold mb-3">Notice</h2>
            <p className="mb-4">
              This webpage is best experienced on a laptop or desktop. Some
              features may not display correctly on smaller devices.
            </p>
            <label className="flex items-center justify-center mb-4 space-x-2">
              <input
                type="checkbox"
                checked={doNotShow}
                onChange={(e) => setDoNotShow(e.target.checked)}
                className="h-4 w-4 border-2 border-gray-300 checked:bg-blue-600 checked:border-blue-600"
              />
              <span>Do not show again</span>
            </label>
            <button
              onClick={handleCloseWarning}
              className="px-4 py-2 bg-blue-500 text-white hover:bg-white border-2 border-blue-500 hover:text-blue-500 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="pt-20 flex flex-col min-h-screen font-sans">
        <div className="mt-2 flex flex-col md:flex-row flex-1">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 p-4 bg-white shadow-md">
            <h3 className="ml-1 text-lg my-4">
              Data from{" "}
              <Link
                href="https://competition-cases.ec.europa.eu/"
                target="_blank"
              >
                <span className="font-medium text-blue-600 underline">
                  competition-cases.ec.europa.eu
                </span>
              </Link>
            </h3>

            {/* Search Bar */}
            <label className="block text-lg font-semibold mb-2 ml-1">
              Keyword Search:
            </label>
            <form onSubmit={handleSubmit} className="mb-2">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="semantic-search"
                  type="text"
                  value={inputTerm}
                  onChange={(e) => setInputTerm(e.target.value)}
                  placeholder="Search semantically…"
                  className="w-full py-2 pl-10 pr-10 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-blue-500 hover:text-blue-600 duration-300"
                  aria-label="Search"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                    />
                  </svg>
                </button>
              </div>
            </form>

            {/* Filters */}
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2 ml-1">
                Policy Area:
              </label>
              <div className="flex flex-wrap gap-2 ml-1">
                <button
                  onClick={() => setSelectedPolicy("")}
                  className={`px-3 py-1 rounded-full border-2 ${
                    selectedPolicy === ""
                      ? "border-gray-700 font-semibold"
                      : "border-gray-400 hover:border-gray-700 duration-300"
                  }`}
                >
                  All
                </button>
                {policyAreas.map((area) => (
                  <button
                    key={area}
                    onClick={() => setSelectedPolicy(area)}
                    className={`px-3 py-1 rounded-full border-2 ${
                      selectedPolicy === area
                        ? "font-semibold"
                        : "hover:font-semibold duration-300"
                    } ${
                      area === "Antitrust"
                        ? selectedPolicy === area
                          ? "text-blue-700 border-blue-700"
                          : "text-blue-700 border-blue-400 hover:border-blue-700 duration-300"
                        : "text-red-700 border-red-400 hover:border-red-700 duration-300"
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2 ml-1">
                Decision Year:
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full p-2 border-2 border-gray-300 rounded-lg duration-300"
              >
                <option value="">All Years</option>
                {(() => {
                  const thisYear = new Date().getFullYear();
                  return Array.from(
                    { length: thisYear - 2015 },
                    (_, i) => thisYear - i
                  ).map((y) => (
                    <option key={y} value={y.toString()}>
                      {y}
                    </option>
                  ));
                })()}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2 ml-1">
                Sort By:
              </label>
              <div className="flex gap-2 ml-1">
                {["newest", "oldest"].map((o) => (
                  <button
                    key={o}
                    onClick={() => setSortOrder(o)}
                    className={`px-3 py-1 rounded border-2 ${
                      sortOrder === o
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "border-gray-300 hover:border-blue-500 hover:text-blue-500 duration-300"
                    }`}
                  >
                    {o === "newest" ? "Newest First" : "Oldest First"}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <p className="ml-1 text-sm">
                The source code for this site available on{" "}
                <Link
                  href="https://github.com/shriyanyamali/Verdictr"
                  target="_blank"
                >
                  <span className="font-medium text-blue-600 underline">
                    GitHub
                  </span>
                </Link>
                . The market definitions database was built using the program
                stored in the{" "}
                <Link
                  href="https://github.com/shriyanyamali/market-def-scraper"
                  target="_blank"
                >
                  <span className="font-medium text-blue-600 underline">
                    market-def-scraper
                  </span>
                </Link>{" "}
                repository. Check its README file to learn how the exactly the
                data was generated.
              </p>
            </div>
          </aside>

          {/* Main */}
          <main className="w-full md:w-3/4 p-4">

            <header className="mb-4">
              <p className="text-xl ml-2">{getResultMessage()}</p>
            </header>

            {/* Pagination & Clear */}
            {filteredData.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-6">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded border-2 duration-300 disabled:opacity-50 disabled:pointer-events-none hover:bg-white hover:border-blue-500 hover:text-blue-500"
                >
                  « Prev
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded border-2 duration-300 disabled:opacity-50 disabled:pointer-events-none hover:bg-white hover:border-blue-500 hover:text-blue-500"
                >
                  Next »
                </button>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const v = parseInt(e.target.pageNumber.value, 10);
                    if (v >= 1 && v <= totalPages) setCurrentPage(v);
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    name="pageNumber"
                    type="number"
                    min={1}
                    max={totalPages}
                    placeholder="Page #"
                    className="w-20 p-2 border rounded"
                  />
                  <button
                    type="submit"
                    className="px-3 py-[0.375rem] bg-blue-500 text-white rounded border-2 border-blue-500 hover:bg-white hover:text-blue-500 duration-300"
                  >
                    Go
                  </button>
                </form>
                <span className="text-lg ml-4 mt-2">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleShowAll}
                  className="px-4 py-2 border-2 rounded ml-4 hover:bg-gray-100 duration-300"
                >
                  Clear Search
                </button>
              </div>
            )}

            {/* Results and Spinner */}
            {isLoading ? (
              <div className="flex justify-center items-center my-16">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
              </div>
            ) : (
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-6">
                {currentPageData.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative p-4 pt-8 md:pt-12 lg:p-4 bg-white shadow-md rounded-lg border border-gray-300"
                  >
                    <span
                      className={`absolute top-3 right-3 px-2 py-1 rounded-full text-sm font-semibold ${
                        item.policy_area === "Antitrust"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.policy_area}
                    </span>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <h2 className="font-semibold text-base md:text-lg">
                        Case Number: {item.case_number}
                      </h2>
                      {item.score != null && (
                        <span className="px-2 py-1 bg-gray-100 text-sm font-medium rounded mb-1">
                          Score: {item.score.toFixed(3)}
                        </span>
                      )}
                    </div>

                    <span className="text-gray-900">Year: {item.year}</span>
                    <p>
                      <Link
                        href={`https://competition-cases.ec.europa.eu/cases/${item.case_number}`}
                        target="_blank"
                      >
                        <span className="text-blue-600 underline hover:text-blue-400">
                          Link to Case
                        </span>
                      </Link>
                    </p>
                    <p>
                      <Link href={item.link} target="_blank">
                        <span className="text-blue-600 underline hover:text-blue-400">
                          Link to Decision Text
                        </span>
                      </Link>
                    </p>
                    <p className="font-medium my-2">Topic: {item.topic}</p>
                    <div
                      className="text-gray-700"
                      dangerouslySetInnerHTML={{
                        __html: highlightText(item.text, searchTerm),
                      }}
                    />
                  </div>
                ))}
              </section>
            )}

            {/* Scroll‑to‑top */}
            <AnimatePresence>
              {showScroll && (
                <motion.button
                  key="scrollTop"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={scrollToTop}
                  className="
                    fixed bottom-8 right-8
                    w-10 h-14 p-3 rounded-full
                    bg-blue-500 text-white shadow-lg
                    hover:bg-blue-600 focus:outline-none text-sm
                  "
                >
                  ↑
                </motion.button>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </>
  );
}
