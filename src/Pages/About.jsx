import React from "react";
import contact from "../assets/contact.jpg";
import about1 from "../assets/about1.jpg";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import pro from "../assets/pro.jpg";
import Footer from "../components/Footer.jsx";

const About = () => {
  return (
    <div className="h-screen w-full relative">
      <div
        className="h-full w-full flex flex-col justify-center  bg-cover bg-center"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <h1 className="text-4xl md:text-4xl absolute left-[38rem] hover:text-5xl top-[12rem] font-bold text-white mb-4">
          About Us
        </h1>

        <p className="text-white absolute left-[27rem] top-[16rem] text-sm md:text-lg max-w-2xl px-6">
          Designing luxury with purpose, We craft elegant spaces that inspire{" "}
          <span className="absolute left-[9rem] top-[2rem]">
            {" "}
            living and elevate everyday moments.
          </span>
        </p>
      </div>
      <div className="h-screen w-screen flex p-15 gap-10 ">
        <img src={about1} alt="" className="h-[30rem] w-[30rem] rounded-xl" />
        <div className="bg-gray-700 grid grid-3 h-[30rem] w-[50rem]                flex relative  p-5 gap-5 rounded-xl ">
          <h1 className="font-extrabold text-4xl font-stretch-50% text-white font-serif p-8 px-5   ">
            Where Design Meets Emotion. Creating Timeless Spaces.
          </h1>
          <p className="font-medium absolute top-[8rem] text-white p-8 ">
            We design elegant, functional, and personalized interiors that
            reflect your lifestyle. From concept to completion, our creative
            approach transforms ordinary spaces into inspiring environments that
            enhance comfort, beauty, and everyday living.
          </p>
          <div className="grid grid-cols-3  gap-5 ">
            <div className="bg-white flex flex-col justify-center items-center hover:border-2 hover:border-gray-900  gap-0.5 py-1.5 px-2">
              <h1 className="font-bold text-base sm:text-xl md:text-3xl">
                150+
              </h1>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                Great Design
              </p>
            </div>

            <div className="bg-white flex flex-col justify-center items-center  hover:border-2 hover:border-gray-900 gap-0.5 py-1.5 px-2">
              <h1 className="font-bold text-base sm:text-xl md:text-3xl">5+</h1>
              <p className="text-[14px] sm:text-xs md:text-sm text-gray-600 ">
                Years of Experience
              </p>
            </div>

            <div className="bg-white flex flex-col justify-center items-center gap-0.5    hover:border-2 hover:border-gray-900 py-1.5 px-2">
              <h1 className="font-bold text-base sm:text-xl md:text-3xl ">
                50+
              </h1>

              <p className="text-[10px] sm:text-xs md:text-sm text-gray-600">
                Happy Clients
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-700  p-10 gap-10 ">
        <h2 className="  font-extrabold text-4xl absolute left-[29rem] gap-6 hover:underline text-white p-5">
          Expert Design Team
        </h2>
        <p className="font-medium text-lg  top-[45rem] p-24 text-white">
          Our team of skilled interior designers, architects, and craftsmen work
          together to deliver creative, functional, and elegant solutions.{" "}
          <br /> &emsp;&emsp; &emsp;&emsp;&emsp; With attention to detail and
          passion for excellence, we transform your ideas into beautifully
          designed spaces
        </p>

        <div className="grid grid-cols-3 gap-30 p-2 ">
          <img
            src={profile2}
            alt=""
            className="hover:border-2 hover:border-white "
          />
          <img
            src={profile1}
            alt=""
            className="hover:border-2 hover:border-white "
          />
          <img
            src={pro}
            alt=""
            className="hover:border-2 hover:border-white "
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
