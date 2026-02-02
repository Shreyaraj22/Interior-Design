import React from "react";
import img66 from "../assets/img66.png";
import img88 from "../assets/img88.png";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-3 bg-gray-500 h-[30rem] gap-3 p-10">
        <div className="font-bold text-2xl text-white  ">
          Where Design Meets Emotion
          <p className=" font-light mt-8 text-xl text-white  ">
            We craft timeless, elegant, and functional <br />
            interior spaces tailored to your lifestyle.
            <br />
            Our passion for design,attention to detail, and <br />
            commitment to quality ensure every project <br />
            reflects comfort, creativity, and sophistication,
            <br /> transforming houses into beautiful, inspiring <br /> homes
            you’ll truly love.
          </p>
          <button className="bg-gray-800 font-extralight text-white p-4 mt-[3rem] rounded " >Why Choose Us?</button>
        </div>
        <div>
          <img src={img88} alt="img" className="  h-[20rem] w-[22rem]     " /> </div>
          <div><img src={img66} alt="img" className=" h-[20rem] w-[22rem]     " />
        </div>
      </div>
    </>
  );
};

export default Footer;
