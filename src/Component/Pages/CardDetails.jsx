import React, { useState } from "react";
import NoResultImg from "../../assets/App-Error.png";

import { useLoaderData } from "react-router";
import Card from "./Card";

const CardDetails = () => {
  const apps = useLoaderData();
  const appList = Array.isArray(apps) ? apps : apps.apps || [];

  if (!appList.length) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-xl">Loading Apps...</p>
      </div>
    );
  }

  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = searchTerm
    ? appList.filter((card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : appList;
  return (
    <div className="w-7xl mx-auto mb-16">
      <div className="mt-16 text-center mb-8">
        <h2 className="text-3xl font-bold   ">Our All Applications</h2>
        <p className="pt-4 text-sm opacity-70">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">{`(${filteredApps.length}) Apps Found`}</h3>
        {/* search input */}
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="search"
            required
            placeholder="Search Apps"
          />
        </label>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {filteredApps.length > 0
          ? filteredApps.map((card) => <Card key={card.id} card={card} />)
          : searchTerm && (
              <div className="col-span-full flex justify-center mt-10">
                <img
                  className="w-48"
                  src={NoResultImg}
                  alt="No results found"
                />
              </div>
            )}
      </div>
    </div>
  );
};

export default CardDetails;
