import React from "react";
import img11 from "../assets/img11.jpg";
import img22 from "../assets/img22.jpg";
import img33 from "../assets/img33.jpg";
import img44 from "../assets/img44.jpg";
import imgg3 from "../assets/imgg3.jpg";
import img55 from "../assets/img55.jpg";
import img66 from "../assets/img66.png";
import img77 from "../assets/img77.png";
import star from "../assets/star.png";
import call from "../assets/call.png";
const InfoPage = () => {
  return (
    <>
      <div className="flex    gap-2 p-2  h-[30rem]">
        <div className="  flex-[6]  border-white rounded ">
          <div className=" p-4  flex gap-4 justify-evenly ">
            <img
              src={img11}
              alt="img"
              className="h-[10rem] w-[10rem] border-1 border-white rounded-2xl"
            />
            <img
              src={img22}
              alt="img"
              className="h-[10rem] w-[10rem] border-1 border-white rounded-2xl"
            />
            <img
              src={img33}
              alt="img"
              className="h-[10rem] w-[10rem] border-1 border-white rounded-2xl"
            />
          </div>
          <div className="flex  justify-around">
            <div className="h-[10rem] text-xl relative top-[1rem] left-[2rem] ">
              <h1 className="font-bold text-black">
                Designing Luxury. Delivering Comfort.
              </h1>
              <h3 className="font-light ">
                From concept to completion, we craft interiors that combine
                creativity,
                <br /> comfort, and sophistication.
              </h3>

              <img
                src={star}
                alt="star"
                className="w-[6rem]  ml-9 mb-[-1rem]"
              />
               <img src={call} alt="call" className="w-[2rem] h-[2rem] absolute left-[11rem] top-[9rem]"  />
              <div className="relative  ">
                <button className="bg-gray-800 border-0 p-2 absolute left-[3rem] top-[-1rem]    font-light  rounded text-white">
                  Review
                </button>
               
                <button className="bg-gray-800 border-0 p-2 px-2 absolute left-[10rem] top-[-1rem] border-white rounded font-light font-extrabold  text-white">
                  Call Us
                </button>
              </div>
            </div>
            <div className=" m-5 border-1 overflow-hidden rounded-2xl border-white shadow-xl">
              <img
                src={img44}
                alt="picture"
                className="h-[13rem] w-[22rem]  "
              />
            </div>
          </div>
        </div>

        <div className="  flex-[4] relative border-white bg-gray-600 rounded ">
          <h1 className="font-bold  text-white text-2xl absolute left-[3rem] top-[1rem] ">
            Where Design Meets Emotion
          </h1>
          <p className="  absolute text-white  left-[3rem] top-[3rem]">
            We transform ordinary spaces into extraordinary environments that
            inspire, comfort, and delight.
          </p>
          <img
            src={img77}
            alt="img"
            className="w-[16rem] absolute left-[8rem] top-[8rem] h-[15rem]"
          />
          <button className="bg-gray-900 font-bold absolute left-[14rem] top-[25rem] border-1 text-white rounded-xl p-2">
            Let’s Design
          </button>
        </div>
      </div>

      <div className="flex gap-2 p-2 text-center h-[15rem] ">
        <div className=" flex-[5] bg-gray-300 flex border-white rounded  gap-8">
          <img
            src={imgg3}
            alt="img"
            className="h-[10rem] w-[20rem] ml-39  mt-5  "
          />
        </div>

        <div
          className=" relative bg-gray-400 flex-[5] text-xl text-center border-white rounded  bg-cover bg-center "
          style={{ backgroundImage: `url(${img77})` }}
        >
          <h4 className="  absolute left-49    top-19   font-light text-white text-shadow-white">
            Are you Scandinavian design?
          </h4>
          <p className="  mt-10  text-white ">
            Because you’re simple, elegant, and irresistible
          </p>
          <button className="   absolute top-35 left-69 bg-gray-600  p-3 font-bold border rounded-[1rem]     hover:font-bold hover:text-shadow-white text-white">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default InfoPage;
