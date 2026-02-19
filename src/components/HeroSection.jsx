import React from "react";
import living from "../assets/living.jpg";
import hero from "../assets/hero.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <div
        className=" bg-cover opacity-[0.9] text-center h-[38rem] "
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="flex relative flex-col gap-10 p-10  ">
          <h1 className="text-xl md:text-7xl font-bold  text-white mt-15">
            Transforming Spaces Into Stunning Experiences
          </h1>
          <p className="text-lg text-center text-gray-200 ">
            We design elegant, functional and personalized interiors that
            reflect your <br /> lifestyle and elevate your everyday living and
            timeless interior spaces tailored to your vision.
          </p>
          <div className=" flex gap-10  text-center md:ml-[28rem]  text-xl">
            <button className="bg-amber-600 text-black  text-white  py-4 px-10 rounded-xl  hover:text-white hover:bg-black ">
              Explore Design
            </button>
            <button className="hover:bg-amber-600 text-black bg-gray-100 hover:text-white py-4 px-5    hover:text-black  rounded-xl flex justify-center items-center gap-2  ">
              Book consultation <FaLongArrowAltRight className="text-gray-600 "   />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
