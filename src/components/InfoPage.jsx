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
      <div className="flex gap-2 h-[30rem]">
        <div className="flex-[6] border-white rounded">
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

          <div className="flex justify-around items-center">
            <div className="   ">
              <h1 className=" absolute top-[59rem] right-[59rem] font-bold text-lg text-black p-4 hover:underline ">
                Designing Luxury. Delivering Comfort.
              </h1>

              <p className="absolute top-[62rem] right-[61rem]">
                {" "}
                From concept to completion, we comfort <br /> &emsp; &emsp;
                &emsp; &emsp;&emsp; sophistication <br /> &emsp; &emsp; &emsp;
                to bring your vision to life.
              </p>

             

              <div className="relative p-8">

  <div className="absolute top-38 right-26 flex gap-8">
    <button className="bg-gray-800 p-3 font-medium rounded text-white whitespace-nowrap">
      Reviews
    </button>

    <button className="bg-gray-800 p-3 font-medium rounded text-white  whitespace-nowrap">
      Call Us
    </button>
  </div>

</div>

            </div>

            <img
              src={img44}
              alt="picture"
              className="h-[10rem] w-[20rem] absolute left-[29rem] top-[60rem] rounded-2xl  transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="flex-[4] relative border-white bg-gray-600">
          <h1 className="font-bold text-white text-2xl absolute left-[7rem] top-[1rem] hover:underline hover:text-white">
            Where Design Meets Emotion
          </h1>

          <div className="absolute text-white p-2 left-[3rem] top-[3rem] text-center">
            <p>
              We transform ordinary spaces into extraordinary environments
              <br /> &esmp; that inspire, comfort, and delight.{" "}
            </p>
          </div>

          <img
            src={img77}
            alt="img"
            className="w-[26rem] absolute left-[4rem] top-[8rem] h-[17rem] transform transition-transform duration-300 hover:scale-105"
          />

          <button className="bg-gray-900 font-bold absolute left-[14rem] top-[26rem] border-1 text-white rounded-xl p-2 hover:border-white hover:border-2">
            Let’s Design
          </button>
        </div>
      </div>

      <div className="flex gap-2 text-center h-[15rem]">
        <div className="flex-[5] bg-gray-300 flex border-white rounded gap-8">
          <img
            src={imgg3}
            alt="img"
            className="h-[12rem] w-[20rem] ml-39 mt-6 transform transition-transform duration-300 hover:scale-105 hover:border-4 hover:border-gray-600 rounded-2xl"
          />
        </div>

        <div
          className="relative bg-gray-400 flex-[5] text-xl text-center border-white rounded bg-cover bg-center"
          style={{ backgroundImage: `url(${img77})` }}
        >
          <h4 className="absolute left-49 top-19 font-light text-white">
            Are you Scandinavian design?
          </h4>

          <p className="mt-10 text-white">
            Because you’re simple, elegant, and irresistible
          </p>

          <button className="absolute top-35 left-62 bg-gray-600 p-2 font-bold hover:opacity-[.8] border rounded-[1rem] text-white">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoPage;
