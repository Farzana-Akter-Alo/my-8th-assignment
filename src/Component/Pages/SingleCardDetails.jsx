import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import DwImg from "../../assets/icon-downloads.png";
import RtImg from "../../assets/icon-ratings.png";
import RvImg from "../../assets/icon-review.png";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const SingleCardDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { card } = location.state || {};

  const [isInstalled, setIsInstalled] = useState(() => {
    if (!card?.id) return false;
    return localStorage.getItem(`installed_${card.id}`) === "true";
  });

  const handleInstall = () => {
    setIsInstalled(true);
    localStorage.setItem(`installed_${card.id}`, "true");
    localStorage.setItem(`card_${card.id}`, JSON.stringify(card));
    navigate("/installization", { state: { card, showToast: true } });
  };

  const {
    title,
    image,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
  } = card || {};

  return (
    <div>
      <div className="w-7xl mx-auto ">
        <div className="flex gap-8 mt-16 mb-10 border-b border-gray-300 pb-10">
          <img className="rounded-sm" src={image} alt="" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold pb-2">{title}</h2>
            <p className="pb-6 text-gray-400 font-medium">
              Developed by{" "}
              <span className="font-medium bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
            <hr className="border-t border-gray-300 w-full mb-10" />

            <div className="flex gap-20 pt-10">
              {/* 1st content */}
              <div>
                <img className="w-8" src={DwImg} alt="" />
                <p className="text-gray-400 font-medium">Downloads</p>
                <p className="text-gray-700 font-bold text-2xl">{downloads}</p>
              </div>
              {/* 2nd content */}
              <div>
                <img className="w-8" src={RtImg} alt="" />
                <p className="text-gray-400 font-medium">Average Ratings</p>
                <p className="text-gray-700 font-bold text-2xl">{ratingAvg}</p>
              </div>
              {/* 3rd content */}
              <div>
                <img className="w-8" src={RvImg} alt="" />
                <p className="text-gray-400 font-medium">Total Reviews</p>
                <p className="text-gray-700 font-bold text-2xl">{reviews}</p>
              </div>
            </div>
            <button
              disabled={isInstalled}
              onClick={handleInstall}
              className={`mt-4 text-white text-md px-6 py-2 rounded-sm ${
                isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390]"
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>

        {/* chart start*/}
        {ratings && ratings.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-4">Ratings</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={ratings}
                layout="vertical" // vertical layout makes Y-axis = name
                margin={{ top: 20, right: 20, left: 40, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Bar dataKey="count" fill="#FF8C00" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
        {/* chart end  */}
        <hr className=" border-gray-300 pb-12" />
        {/* description */}
        <div className="pb-10">
          <h3 className="text-xl font-bold mb-4">Description</h3>
          <p className="whitespace-pre-line text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCardDetails;
