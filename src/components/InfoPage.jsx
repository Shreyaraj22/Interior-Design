import React from "react";
import img11 from "../assets/img11.jpg";
import img22 from "../assets/img22.jpg";
import img33 from "../assets/img33.jpg";
import img44 from "../assets/img44.jpg";
import imgg3 from "../assets/imgg3.jpg";
import img55 from "../assets/img55.jpg";
import img66 from "../assets/img66.png";
import img77 from "../assets/img77.png";

const InfoPage = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 ml-3 mt-5 bg-[#ECECEC]">
        <div className="w-[50rem] grid md:grid-cols-1 rounded">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <img
              src={img11}
              alt="img"
              className="h-[10rem] w-full object-cover border border-white rounded-2xl transform transition-transform duration-300 hover:scale-105"
            />
            <img
              src={img22}
              alt="img"
              className="h-[10rem] w-full object-cover border border-white rounded-2xl transform transition-transform duration-300 hover:scale-105"
            />
            <img
              src={img33}
              alt="img"
              className="h-[10rem] w-full object-cover border border-white rounded-2xl transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-3 p-5 mt4">
              <h1 className="font-bold text-xl text-black p-2 transform transition-transform duration-300 hover:scale-105">
                Designing Luxury,Delivering Comfort.
              </h1>

              <ul className="list-disc pl-6">
                <li>Enhances Aesthetic Appeal</li>
                <li>Improves Functionality</li>
                <li>Increases Property Value</li>
                <li>Better Space Utilization</li>
                <li>Creates Comfortable & Healthy Environment</li>
              </ul>
            </div>

            <img
              src={img44}
              alt="picture"
              className="h-[14rem] w-[24rem] object-cover rounded-2xl mt-6 transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="w-[32rem] grid md:grid-cols-1 p-2 ml-38  bg-gray-600">
          <h1 className="font-bold pt-2 p-2 text-white text-2xl text-center transform transition-transform duration-300 hover:scale-105">
            Where Design Meets Emotion
          </h1>

          <p className="text-white text-center px-4">
            We transform ordinary spaces into extraordinary environments
            <br />
            that inspire, comfort, and delight.
          </p>

          <img
            src={img77}
            alt="img"
            className="h-[14rem]  w-[22rem]  mt-2 mb-2 ml-19 rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
          />
<button className="bg-amber-700 p-3 px-3 font-bold hover:scale-[1.1] transition duration-300 rounded-2xl w-[10rem] ml-42 text-white">
            Let's Design
          </button>
        </div>
      </div>

      <div className="grid h-[15rem] mt-5">
        <div
          className="w-full p-5 gap-5 bg-gray-400 flex text-xl text-center flex-col justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${img77})` }}
        >
          <p className="font-light text-white">Are you Scandinavian design?</p>

          <p className="text-white">
            Because you’re simple, elegant, and irresistible
          </p>

          <button className="bg-amber-700 p-3 px-4 font-bold hover:scale-[1.1] transition duration-300 rounded-xl text-white">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoPage;
