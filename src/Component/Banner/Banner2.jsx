import React from "react";
import HeroImg from "../../assets/hero.png";

const Banner2 = () => {
  return (
    <div className="mt-100 relative ">
      <div className="absolute -top-86 z-0 left-1/2 -translate-x-1/2">
        <img className="w-2xl " src={HeroImg} alt="" />
      </div>
      <div className="bg-gradient-to-l from-[#9F62F2] to-[#632EE3] pb-16">
        <h2 className="text-3xl font-bold pt-16 text-center text-white pb-10">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex gap-26 justify-center items-center text-center">
          {/* 1st */}
          <div className="text-white">
            <p className="opacity-60 pb-4 text-sm">Total Downloads</p>
            <span className="text-5xl font-bold">29.6M</span>
            <p className="opacity-60 pt-4 text-sm">21% more than last month</p>
          </div>
          {/* 2nd */}
          <div className="text-white">
            <p className="opacity-60 pb-4 text-sm">Total Reviews</p>
            <span className="text-5xl font-bold">906K</span>
            <p className="opacity-60 pt-4 text-sm">46% more than last month</p>
          </div>
          {/* 3rd */}
          <div className="text-white">
            <p className="opacity-60 pb-4 text-sm">Active Apps</p>
            <span className="text-5xl font-bold">132+</span>
            <p className="opacity-60 pt-4 text-sm">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
