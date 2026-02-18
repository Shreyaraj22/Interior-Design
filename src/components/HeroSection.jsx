import React from "react";
import living from "../assets/living.jpg";
import hero from "../assets/hero.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      <div
        className=" bg-cover opacity-[0.9] text-center h-screen "
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="flex relative flex-col gap-20">
          <h1 className="text-xl md:text-7xl font-bold  text-white absolute top-[10rem] left-[2rem]">
            Transforming Spaces Into Stunning Experiences
          </h1>
          <p className="text-lg text-center text-gray- w-[95rem] absolute top-[20rem] left-[2rem] ">
            We design elegant, functional and personalized interiors that
            reflect your <br /> lifestyle and elevate your everyday living and
            timeless interior spaces tailored to your vision.
          </p>
          <div className=" flex gap-10 text-center ml-[20rem] absolute left-[13rem] top-[26rem] text-xl">
            <button className="bg-amber-600 text-black  text-white  py-4 px-10 rounded-xl  hover:text-white hover:bg-black ">
              Explore Design
            </button>
            <button className="hover:bg-amber-600 text-black bg-gray-100 hover:text-white py-4 px-10 hover:text-black  rounded-xl flex justify-center items-center gap-2  ">
              Book consultation <FaLongArrowAltRight className="text-gray-600 "   />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-8"></div> */}