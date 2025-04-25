"use client";

import { useState, useEffect } from "react";
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
  const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escapedTerm})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
};

const policyAreas = [
  "Merger",
  "Antitrust & Cartels",
  "State Aid",
  "Digital Markets Act",
  "Foreign Subsidies",
];

export default function Home() {
  // ——— existing state/hooks ———
  const [data, setData] = useState([]);
  const [pageInput, setPageInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPolicy, setSelectedPolicy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const [showScroll, setShowScroll] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [doNotShow, setDoNotShow] = useState(false);

  // ——— load JSON data ———
  useEffect(() => {
    fetch("/market-definitions.json")
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  // ——— log first few policy areas (optional) ———
  useEffect(() => {
    if (data.length) {
      console.log("First few policy areas:");
      data
        .slice(0, 10)
        .forEach((item) => console.log(`-> "${item.policy_area}"`));
    }
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // ——— filter + sort whenever inputs change ———
  useEffect(() => {
    const norm = normalizeString(searchTerm);
    let filtered = data.filter((item) => {
      const matchesSearch =
        !searchTerm ||
        (item.case_number &&
          normalizeString(item.case_number).includes(norm)) ||
        (item.link && normalizeString(item.link).includes(norm)) ||
        (item.topic && normalizeString(item.topic).includes(norm)) ||
        (item.text && normalizeString(item.text).includes(norm));

      const matchesYear = !selectedYear || item.year === selectedYear;
      const matchesPolicy =
        !selectedPolicy ||
        normalizeString(item.policy_area) === normalizeString(selectedPolicy);

      return matchesSearch && matchesYear && matchesPolicy;
    });

    filtered.sort((a, b) => {
      const yA = parseInt(a.year),
        yB = parseInt(b.year);
      return sortOrder === "newest" ? yB - yA : yA - yB;
    });

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedYear, selectedPolicy, sortOrder, data]);

  // ——— modal: check localStorage on mount ———
  useEffect(() => {
    const hidden =
      typeof window !== "undefined" &&
      localStorage.getItem("hideDeviceWarning");
    if (!hidden) {
      setShowWarning(true);
    }
  }, []);

  const handleCloseWarning = () => {
    if (doNotShow) {
      localStorage.setItem("hideDeviceWarning", "true");
    }
    setShowWarning(false);
  };

  // ——— existing handlers ———
  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleClear = () => {
    setSearchTerm("");
    setSelectedYear("");
    setSelectedPolicy("");
    setSortOrder("newest");
  };

  const handleSortOrderChange = (o) => setSortOrder(o);
  const handleYearChange = (e) => setSelectedYear(e.target.value);
  const handlePolicyChange = (e) => setSelectedPolicy(e.target.value);
  const handlePageChange = (p) => {
    setCurrentPage(p);
    window.scrollTo({ top: window.scrollY });
  };

  const handleGoToPage = (e) => {
    e.preventDefault();
    const pageNum = parseInt(pageInput, 10);
    const total = Math.ceil(filteredData.length / itemsPerPage);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= total) {
      setCurrentPage(pageNum);
      window.scrollTo({ top: window.scrollY });
    }
    setPageInput(""); // ← clear the field
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    return Array.from(
      { length: currentYear - 1979 },
      (_, i) => currentYear - i
    );
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <Head>
        <title>Search - Verdictr</title>
      </Head>

      {/* ——— Warning Modal ——— */}
      {showWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 text-center">
            <h2 className="text-xl font-semibold mb-3">Notice</h2>
            <p className="mb-4">
              This website is best experienced on a laptop or desktop. Some
              features may not be displayed correctly on smaller devices.
            </p>
            <label className="flex items-center justify-center mb-4 space-x-2">
              <input
                type="checkbox"
                className="
                h-4 w-4
                appearance-none
                border-2 border-gray-300
                transition-colors
                hover:border-blue-500
                checked:bg-blue-600 checked:border-blue-600
                relative
                text-sm
                before:content-['✔']
                before:inset-0
                before:absolute
                before:flex before:items-center before:justify-center
                before:text-white before:scale-0
                checked:before:scale-100
                before:transition-transform
              "
                checked={doNotShow}
                onChange={(e) => setDoNotShow(e.target.checked)}
              />
              <span className="my-2">Do not show again</span>
            </label>
            <button
              onClick={handleCloseWarning}
              className="px-4 py-2 bg-blue-500 text-white  hover:bg-white border-2 border-blue-500 hover:text-blue-500 duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col min-h-screen font-sans">
        <div className="mt-2 flex flex-1">
          <aside className="w-1/4 p-4 bg-white shadow-md">
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
            {/* Search Input */}
            <div className="mb-4">
              <label className="block text-lg font-semibold mb-2 ml-1">
                Keyword Search:
              </label>
              <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search Keywords..."
                  className="w-full py-2 px-4"
                />
                <button
                  onClick={handleClear}
                  className="px-3 text-gray-600 hover:text-red-600"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Policy Area Filter Buttons */}
            <div className="mb-4">
              <label className="block text-lg mb-2 ml-1 font-semibold">
                Policy Area:
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedPolicy("")}
                  className={`px-3 py-1 rounded-full border transition
        ${
          selectedPolicy === ""
            ? "border-black border-2 my-1 mx-1 font-semibold"
            : "border-gray-400 my-1 mx-1 text-gray-700 hover:border-2 hover:font-semibold"
        }
      `}
                >
                  All
                </button>
                {policyAreas.map((area) => (
                  <button
                    key={area}
                    onClick={() => setSelectedPolicy(area)}
                    className={`px-3 py-1 rounded-full border transition
          ${
            selectedPolicy === area
              ? "border-black border-2 my-1 mx-1 font-semibold"
              : "border-gray-300 my-1 border-2 mx-1 hover:font-semibold "
          }
          ${
            area === "Antitrust & Cartels"
              ? "text-blue-800 border-blue-400"
              : area === "Merger"
              ? "text-red-700 border-red-400"
              : area === "State Aid"
              ? "text-green-800 border-green-400"
              : area === "Digital Markets Act"
              ? "text-purple-800 border-purple-400"
              : area === "Foreign Subsidies"
              ? "text-orange-800 border-orange-400"
              : ""
          }
        `}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>

            {/* Year Filter */}
            <div className="mb-4">
              <label className="block text-lg mb-2 ml-1 font-semibold ">
                Decision Year:
              </label>
              <select
                value={selectedYear}
                onChange={handleYearChange}
                className="
                w-full p-2 pr-64 border-2 border-gray-300 rounded-lg
                bg-white
                hover:bg-gray-300
                focus:bg-white
                active:bg-white
                focus:outline-none
                "
              >
                <option value="">All Years</option>
                {generateYearOptions().map((year) => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="mb-4">
              <label className="block text-lg mb-2 ml-1 font-semibold">
                Sort by:
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => handleSortOrderChange("newest")}
                  className={`p-2 border rounded-lg ${
                    sortOrder === "newest"
                      ? "bg-blue-500 border-blue-500 border-2 text-white"
                      : "bg-white hover:bg-white border-2 hover:border-blue-500 hover:text-blue-500 duration-300"
                  }`}
                >
                  Newest First
                </button>
                <button
                  onClick={() => handleSortOrderChange("oldest")}
                  className={`p-2 border rounded-lg ${
                    sortOrder === "oldest"
                      ? "bg-blue-500 border-blue-500 border-2 text-white"
                      : "bg-white border-2 hover:border-blue-500 hover:text-blue-500 duration-300"
                  }`}
                >
                  Oldest First
                </button>
              </div>
            </div>
          </aside>

          {/* Main Display */}
          <main className="w-3/4 p-4">
            <header className="mb-4">
              <p className="ml-2 my-4 text-xl">
                {filteredData.length} result
                {filteredData.length !== 1 ? "s" : ""} found
                {selectedYear ? ` from ${selectedYear}` : ""}
              </p>
            </header>

            {filteredData.length > 0 && (
              <div className="flex items-center gap-4 mb-6 ml-2">
                <button
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded border-2 duration-300 disabled:opacity-50 disabled:pointer-events-none hover:bg-white hover:border-blue-500 hover:text-blue-500"
                >
                  &laquo; Prev
                </button>
                <button
                  onClick={() =>
                    handlePageChange(Math.min(currentPage + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded border-2 duration-300 disabled:opacity-50 disabled:pointer-events-none hover:bg-white hover:border-blue-500 hover:text-blue-500"
                >
                  Next &raquo;
                </button>

                <form
                  onSubmit={handleGoToPage}
                  className="flex items-center gap-2"
                >
                  <input
                    type="number"
                    name="pageNumber"
                    min="1"
                    max={totalPages}
                    placeholder="Page #"
                    className="w-[6rem] p-2 border rounded"
                    value={pageInput}
                    onChange={(e) => setPageInput(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-blue-500 text-white rounded hover:text-blue-500 border-2 border-blue-500 hover:bg-white duration-300"
                  >
                    Go
                  </button>
                </form>
                <span className="ml-4 text-lg">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            )}

            {/* Cards Grid */}
            <section className="grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-10">
              {currentPageData.length ? (
                currentPageData.map((item, index) => (
                  <div
                    key={index}
                    className="relative p-4 bg-white shadow-md rounded-lg border border-gray-300"
                  >
                    {/* Top-right label for Policy Area */}
                    <span
                      className={`absolute top-3 right-3 text-sm px-2 py-1 rounded-full font-semibold
                      ${
                        item.policy_area === "Antitrust & Cartels"
                          ? "bg-blue-100 text-blue-800"
                          : item.policy_area === "Merger"
                          ? "bg-red-100 text-red-700"
                          : item.policy_area === "State Aid"
                          ? "bg-green-100 text-green-800"
                          : item.policy_area === "Digital Markets Act"
                          ? "bg-purple-100 text-purple-800"
                          : item.policy_area === "Foreign Subsidies"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-gray-100 text-gray-800"
                      }
                    `}
                    >
                      {item.policy_area}
                    </span>

                    <h2 className="font-semibold">
                      Case Number: {item.case_number || ""}
                    </h2>
                    <span className="text-gray-900">Year: {item.year} </span>
                    <p>
                      <Link
                        href={`https://competition-cases.ec.europa.eu/cases/${item.case_number}`}
                        target="_blank"
                      >
                        <span className="text-blue-600 hover:text-blue-400 underline">
                          Link to Case
                        </span>
                      </Link>
                    </p>
                    <p>
                      <Link href={item.link} target="_blank">
                        <span className="text-blue-600 hover:text-blue-400 underline">
                          Link to Decision Text
                        </span>
                      </Link>
                    </p>
                    <p className="font-medium my-2">
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
                <p></p>
              )}
            </section>

            {filteredData.length > 0 && (
              <div className="flex items-center gap-4 mt-6 ml-2">
                <button
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded border-2 duration-300 disabled:opacity-50 disabled:pointer-events-none hover:bg-white hover:border-blue-500 hover:text-blue-500"
                >
                  &laquo; Prev
                </button>
                <button
                  onClick={() =>
                    handlePageChange(Math.min(currentPage + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded border-2 duration-300 disabled:opacity-50 disabled:pointer-events-none hover:bg-white hover:border-blue-500 hover:text-blue-500"
                >
                  Next &raquo;
                </button>

                <form
                  onSubmit={handleGoToPage}
                  className="flex items-center gap-2"
                >
                  <input
                    type="number"
                    name="pageNumber"
                    min="1"
                    max={totalPages}
                    placeholder="Page #"
                    className="w-[6rem] p-2 border rounded"
                    value={pageInput}
                    onChange={(e) => setPageInput(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-blue-500 text-white rounded hover:text-blue-500 border-2 border-blue-500 hover:bg-white duration-300"
                  >
                    Go
                  </button>
                </form>

                <span className="ml-4 text-lg">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            )}

            {/* scroll-to-top button */}
            <AnimatePresence>
              {showScroll && (
                <motion.button
                  key="scrollTop"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  onClick={scrollToTop}
                  className="
                  fixed bottom-8 right-8
                  w-10 h-14
                  p-3 rounded-full
                  bg-blue-500 text-white
                  shadow-lg
                  hover:bg-blue-600
                  focus:outline-none
                  text-sm
                  "
                  aria-label="Scroll to top"
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