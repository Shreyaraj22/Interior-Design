import React from "react";
import contact from "../assets/contact.jpg";
import { LuPhoneCall } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { RiMapPin2Fill } from "react-icons/ri";
import { FaLongArrowAltRight } from "react-icons/fa";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  return (
    <>
      <div className="w-full relative overflow-hidden">
        <div
          className="h-screen w-full flex flex-col justify-center items-center bg-cover bg-center  relative"
          style={{ backgroundImage: `url(${contact})` }}
        >
          <h1 className="text-4xl md:text-4xl p-5 gap-2 font-bold text-white hover:text-5xl">
            Contact Us
          </h1>

          <p className="text-white text-md text-center max-w-2xl">
            We’d love to hear about your ideas and help you transform them
            Contact our <br /> &emsp; team today to begin creating interiors
            that truly inspire.
          </p>
        </div>

        <div className="w-full flex justify-center bg-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-10 py-20 w-full max-w-7xl">
            <div className="flex items-center justify-center hover:border-2 hover:border-gray-800 bg-gray-400 h-[18rem] rounded-2xl border-2 text-white">
              <div className="flex gap-3 flex-col">
                <LuPhoneCall className="text-4xl" />
                <h1 className="font-bold text-2xl">9999999999</h1>
                <p className="text-lg font-medium">
                  Call Now
                </p>
                <h3 className="font-medium text-2xl flex items-center gap-2 hover:underline ">
                  Learn More <FaLongArrowAltRight />
                </h3>
              </div>
            </div>

            <div className="flex hover:border-2 hover:border-gray-800 items-center justify-center bg-gray-600 h-[18rem]  rounded-2xl border-2 text-white">
              <div className="flex gap-3 flex-col ">
                <IoMailOutline className="text-4xl" />
                <h1 className="font-bold text-2xl">interiordesign@mail.com</h1>
                <p className="text-lg font-medium"> DM here </p>
                <h3 className="font-medium text-2xl flex items-center gap-2 hover:underline ">
                  Learn More <FaLongArrowAltRight />
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-center hover:border-2 hover:border-gray-800 bg-gray-400 h-[18rem] rounded-2xl border-2 text-white">
              <div className="flex gap-3 flex-col">
                <RiMapPin2Fill className="text-4xl" />
                <h1 className="font-bold text-2xl">India</h1>
                <p className="text-lg font-medium">Noida</p>
                <h3 className="font-medium text-2xl flex items-center gap-2 hover:underline">
                  Learn More <FaLongArrowAltRight />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
