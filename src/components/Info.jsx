import React from "react";
import img66 from "../assets/img66.png";
import img88 from "../assets/img88.png";

const Info = () => {
  return (
    <div className="bg-gray-200 p-6 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-gray-950 sm:text-left">
          <h2 className="font-bold text-2xl md:text-3xl transform transition-transform duration-300 hover:scale-105 text-[[#25343F]] ">
            Where Design Meets Emotion
          </h2>
          <p className="font-light mt-6  text-base md:text-lg">
            We craft timeless, elegant, and functional
            <br className="hidden  md:block" />
            interior spaces tailored to your lifestyle.{" "}
            <br className="hidden md:block" />
            Our passion for design, attention to detail, and{" "}
            <br className="hidden md:block" />
            commitment to quality ensure every project{" "}
            <br className="hidden md:block" />
            reflects comfort, creativity, and sophistication,{" "}
            <br className="hidden md:block" />
            transforming houses into beautiful, inspiring{" "}
            <br className="hidden md:block" />
            homes you’ll truly love.
          </p>
          <button className="bg-amber-700 font-bold text-xl text-white px-6 py-3 mt-6 rounded-xl hover:bg-gray-900 hover:border-2 transition">
            Why Choose Us?
          </button>
        </div>

        <div className="flex justify-center md:justify-start">
          <img
            src={img88}
            alt="img"
            className="h-64 md:h-80 w-full md:w-[22rem] object-cover rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex justify-center md:justify-start">
          <img
            src={img66}
            alt="img"
            className="h-64 md:h-80 w-full md:w-[22rem] object-cover rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
