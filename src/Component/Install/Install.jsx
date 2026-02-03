import React from "react";

const Install = () => {
  return (
    <div className="w-7xl mx-auto">
      <div>
        <div className="mt-16 text-center mb-8">
          <h2 className="text-3xl font-bold   ">Our All Applications</h2>
          <p className="pt-4 text-sm opacity-70">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* sort */}
        <div className="flex justify-between items-center mb-6 ">
          <h3>0 App Found</h3>
          <select defaultValue="Pick a color" className="select">
            <option disabled={true}>Sort by size</option>
            <option>High</option>
            <option>Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Install;
