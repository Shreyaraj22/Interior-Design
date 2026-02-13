import React from "react";
import living from "../assets/living.jpg";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row border border-gray-600">
        <div className="w-full md:w-1/3 relative bg-gray-600 text-white flex items-center justify-center min-h-[18rem] md:min-h-[40rem]">
          <h1
            className="
            text-xl md:text-2xl font-bold 
            absolute left-4 md:left-[2rem] 
            top-8 md:top-[8rem] hover:underline
          "
          >
            Transforming <br />
            Spaces Into Stunning <br />
            Experiences
          </h1>

          <p
            className="
            text-sm md:text-base
            absolute left-4 md:left-[2rem] 
            top-[10rem] md:top-[18rem]  
          "
          >
            We design elegant, 
            functional, <br /> and  personalized interiors  <br />
            that reflect  your lifestyle<br />
            and elevate your everyday <br />  living and 
            timeless  <br /> interior spaces tailored to <br /> your vision.
          </p>
        </div>

        <div
          className="w-full md:w-[84rem] h-[22rem] md:h-[40rem] relative bg-cover bg-center"
          style={{ backgroundImage: `url(${living})` }}
        >
          {/* <button
            className="
            bg-gray-600/50 backdrop-blur-sm
            p-2 px-4 text-base md:text-xl
            absolute top-[10rem] md:top-[18rem]
            left-[50%] md:left-[26rem]
            -translate-x-1/2 md:translate-x-0
            text-white font-light
            hover:text-2xl hover:bg-gray-600
          "
          >
            Our Work
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
