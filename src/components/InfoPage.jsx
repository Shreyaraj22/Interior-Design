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
      <div className="flex gap-2 bg-[#ECECEC] h-[30rem]">
        <div className="flex-[6]  rounded">
          <div className="p-8 flex gap-4 justify-evenly">
            <img
              src={img11}
              alt="img"
              className="h-[10rem] w-[15rem] border-1 border-white rounded-2xl  transform transition-transform duration-300 hover:scale-105"
            />
            <img
              src={img22}
              alt="img"
              className="h-[10rem] w-[15rem] border-1 border-white rounded-2xl  transform transition-transform duration-300 hover:scale-105"
            />
            <img
              src={img33}
              alt="img"
              className="h-[10rem] w-[15rem] border-1 border-white rounded-2xl  transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="flex justify-around items-center ">
            <div className="   ">
              <h1 className=" absolute top-[61rem] left-[29rem] font-bold text-xl text-black p-4  transform transition-transform duration-300 hover:scale-105">
                Designing Luxury,Delivering Comfort.
              </h1>

              {/* <p className="absolute p-3 top-[64rem] left-[27rem]">
                {" "}
                From concept to completion, we comfort 
               sophistication <br /> &emsp; &emsp; &emsp; &emsp; &emsp; 
                to bring your vision to life.
              </p> */}

              {/* <div className="relative p-8">
                <div className="absolute top-38 left-[8rem] flex gap-8 ">
                  <button className="bg-gray-800 p-3 font-medium  hover:scale-[1.1] transition duration-300     rounded-2xl text-white whitespace-nowrap">
                    Reviews
                  </button>

                  <button className="bg-gray-800 p-3 font-medium rounded-2xl text-white hover:scale-[1.1] transition duration-300   whitespace-nowrap">
                    Call Us
                  </button>
                </div>
              </div> */}
            </div>
            <div className="grid gap-5 p-5 mt-10 ml-75">
              <ul className="list-disc pl-5">
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
              className="h-[10rem] w-[23rem] absolute left-[3rem] top-[62rem] rounded-2xl  transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="flex-[4] relative border-white bg-gray-600">
          <h1 className="font-bold text-white text-2xl absolute left-[8rem] top-[1rem] transform transition-transform duration-300 hover:scale-105  ">
            Where Design Meets Emotion
          </h1>

          <div className="absolute text-white p-2 left-[4rem] top-[3rem] text-center">
            <p>
              We transform ordinary spaces into extraordinary environments
              <br /> &esmp; that inspire, comfort, and delight.{" "}
            </p>
          </div>

          <img
            src={img77}
            alt="img"
            className="w-[26rem] absolute rounded-2xl shadow-2xl left-[6rem] top-[8rem] h-[17rem] transform transition-transform duration-300 hover:scale-105"
          />

          <button className="bg-amber-600 font-bold absolute left-[15rem] hover:scale-[1.1] transition duration-300 top-[26.5rem]  text-white rounded-xl p-2 px-5  ">
            Let’s Design
          </button>
        </div>
      </div>

      <div className="flex  text-center h-[15rem]">
        {/* <div className="flex-[5] bg-linear-to-r bg-gray-600 flex border-white  gap-6">
          <img
            src={imgg3}
            alt="img"
            className="h-[12rem] w-[20rem] ml-39 mt-6 transform transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-gray-600 rounded-2xl"
          />
        </div> */}

        <div
          className=" w-full p-5 gap-5 bg-gray-400 flex text-xl text-center flex-col justify-center items-center border-white  bg-cover bg-center"
          style={{ backgroundImage: `url(${img77})` }}
        >
          <p className=" font-light text-white">
            Are you Scandinavian design?
          </p>

          <p className=" text-white">
            Because you’re simple, elegant, and irresistible
          </p>

          <button className="  bg-amber-700 p-3 px-4 font-bold hover:scale-[1.1] transition duration-300  rounded-[1rem] text-white">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoPage;
