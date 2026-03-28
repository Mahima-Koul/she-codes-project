import React, { useState } from "react";
import schemesData from "../data/schemes.json";

export default function Schemes() {
  const [search, setSearch] = useState("");
  const [incomeFilter, setIncomeFilter] = useState("all");
  const [educationFilter, setEducationFilter] = useState("all");

  const filteredSchemes = schemesData.filter((scheme) => {
    const matchesSearch =
      scheme.name.toLowerCase().includes(search.toLowerCase()) ||
      scheme.tags.join(" ").toLowerCase().includes(search.toLowerCase());

    const matchesIncome =
      incomeFilter === "all" || scheme.filters.incomeGroup === incomeFilter;

    const matchesEducation =
      educationFilter === "all" ||
      scheme.filters.educationLevel.includes(educationFilter);

    return matchesSearch && matchesIncome && matchesEducation;
  });

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900">
          Government Schemes for Women Education
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          Browse and filter schemes based on eligibility and benefits.
        </p>

        {/* Filters */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search scheme by name or tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-slate-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-700 outline-none"
          />

          <select
            value={incomeFilter}
            onChange={(e) => setIncomeFilter(e.target.value)}
            className="border border-slate-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-700 outline-none"
          >
            <option value="all">All Income Groups</option>
            <option value="low">Low Income</option>
            <option value="middle">Middle Income</option>
            <option value="high">High Income</option>
          </select>

          <select
            value={educationFilter}
            onChange={(e) => setEducationFilter(e.target.value)}
            className="border border-slate-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-700 outline-none"
          >
            <option value="all">All Education Levels</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="higher-secondary">Higher Secondary</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
            <option value="diploma">Diploma</option>
            <option value="literacy">Literacy</option>
          </select>
        </div>

        {/* Schemes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden"
            >
              <img
                src={scheme.image}
                alt={scheme.name}
                className="w-full h-40 object-cover"
              />

              <div className="p-5">
                <h2 className="text-lg font-bold text-slate-900">
                  {scheme.name}
                </h2>

                <p className="text-sm text-slate-600 mt-2">
                  {scheme.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {scheme.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href={scheme.officialLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-800 font-semibold hover:underline"
                  >
                    Official Website →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSchemes.length === 0 && (
          <p className="text-center text-slate-600 mt-10">
            No schemes found matching your filters.
          </p>
        )}
      </div>
    </div>
  );
}