import React from "react";
import Card from "./Card";

const Cards = ({ apps }) => {
  const appsDAta = apps;
  return (
    <div className="w-7xl mx-auto ">
      {/* card content */}
      <div className="text-center mt-16 mb-8">
        <h2 className="text-3xl font-bold">Trending Apps</h2>
        <p className="pt-4 text-sm opacity-70">Explore All Trending Apps on the Market developed by us</p>
      </div>

      {/* card */}
      <div className="grid grid-cols-4 gap-4">
        {appsDAta.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <div className="text-center">
        <button className=" px-6 py-2 mt-10 mb-20  text-white font-medium rounded-sm bg-gradient-to-l from-[#9F62F2] to-[#632EE3]">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Cards;
