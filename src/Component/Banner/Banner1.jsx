import React from "react";
import AppStore1 from "../../assets/appStore (1).png";
import AppStore2 from "../../assets/appStore (2).png";

const Banner1 = () => {
  return (
    <div className="w-7xl mx-auto">
      <div className="hero mt-20">
        <div className="text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              We Build{" "}
              <span className="bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="py-6 text-gray-500">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex justify-center gap-2">
              <a
                href="https://play.google.com/store/games?hl=en"
                target="_blank"
                rel="noopener norefferer"
                className="flex items-center gap-2 border border-gray-300 p-2 rounded-sm"
              >
                <img className="w-6 h-6" src={AppStore2} alt="" />
                Google Play
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener norefferer"
                className="flex items-center gap-2 border border-gray-300 p-2 rounded-sm"
              >
                <img className="w-6 h-6" src={AppStore1} alt="" />
                AppStore
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
