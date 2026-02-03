import React from "react";
import AppError from "../../assets/error-404.png";

const Error = () => {
  return (
    <div className="w-7xl mx-auto mt-20">
      <div className="">
        <img className="mx-auto w-sm" src={AppError} alt="" />
      </div>
      <div className="text-center">
        <h3 className="text-4xl font-bold pb-4">Oops, page not found!</h3>
        <p className="text-sm text-gray-500">
          The page you are looking for is not available.
        </p>
        <button
          onClick={() => window.history.back()}
          className=" border px-6 py-2 mt-6 mb-20  text-white font-medium rounded-sm bg-gradient-to-l from-[#9F62F2] to-[#632EE3] "
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error;
