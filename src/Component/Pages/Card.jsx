import React from "react";
import DwImg from "../../assets/icon-downloads.png";
import RtImg from "../../assets/icon-ratings.png";

const Card = ({ card }) => {
  const { title, image, companyName, downloads, ratingAvg } = card;
  return (
    <div>
      <div className="bg-white w-full rounded-md p-4 ">
        <figure className="rounded-sm overflow-hidden">
          <img className="w-full" src={image} alt="" />
        </figure>
        <p className="py-2">
          {title}-{companyName}
        </p>
        <div className="flex justify-between items-center">
          <button className="flex items-center gap-2 text-green-500 bg-gray-100 text-sm p-2 rounded-sm">
            <img className="w-4" src={DwImg} alt="" />
            {downloads}
          </button>
          <button className="flex items-center gap-2 text-orange-300 bg-gray-100 text-sm p-2 rounded-sm">
            <img className="w-4" src={RtImg} alt="" />
            {ratingAvg}
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Card;
