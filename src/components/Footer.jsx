import React from "react";
import {
  FaBars,
  FaReact,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import { MdSettings, MdOutlineMail } from "react-icons/md";
import { LuPhoneCall, LuMapPin } from "react-icons/lu";
import { IoEarthOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-10 bg-gray-800 text-white">
       
        <div>
          <h1 className="font-bold mb-5  hover:underline  hover:text-amber-600">Quick Links</h1>
          <div className="flex flex-col items-start gap-3  ">
            <p className="hover:underline">Home</p>
            <p className="hover:underline">About Us</p>
            <p className="hover:underline">Contact Us</p>
            <p className="hover:underline">Our Work</p>
          </div>
        </div>

    
        <div>
          <h1 className="font-bold mb-5 hover:underline hover:text-amber-600 ">Services</h1>
          <div className="flex flex-col items-start gap-3  ">
            <p className="hover:underline">Residential Design</p>
            <p className="hover:underline">Commercial Design</p>
            <p className="hover:underline">Renovation</p>
            <p className="hover:underline">Modular Kitchen</p>
          </div>
        </div>

     
        <div>
          <h1 className="font-bold mb-5 hover:underline hover:text-amber-600 ">Contacts</h1>
          <div className="flex flex-col items-start gap-2   
          ">
            <div className="flex items-center gap-3 hover:underline"> 
              <LuPhoneCall />
              <p>+91 9937 687795</p>
            </div>
            <div className="flex items-center gap-3 hover:underline">
              <MdOutlineMail />
              <p>info@interiordesign.com</p>
            </div>
            <div className="flex items-center gap-3 hover:underline">
              <IoEarthOutline />
              <p>www.interiordesign.com</p>
            </div>
            <div className="flex items-center gap-3 hover:underline">
              <LuMapPin />
              <p>
                Block G, Sector 66
                <br />
                Noida, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>

       
        <div>
          <h1 className="font-bold mb-5 hover:underline hover:text-amber-600 ">Follow Us</h1>
          <div className="flex gap-5 items-center my-3 hover:underline">
            <FaInstagram />
            <p>Instagram</p>
          </div>
          <div className="flex gap-5 items-center my-3 hover:underline">
            <FaFacebook />
            <p>Facebook</p>
          </div>
          <div className="flex gap-5 items-center my-3 hover:underline">
            <FaLinkedin />
            <p>LinkedIn</p>
          </div>
          <div className="flex gap-5 items-center my-3 hover:underline">
            <FaPinterest />
            <p>Pinterest</p>
          </div>
        </div>
      </div>


      <hr className="border-gray-700" />

      <h1 className="text-center text-white bg-gray-800 font-bold p-10">
        © 2026 <span className="text-blue-600 hover:underline hover:text-white ">Interior Design.</span> All
        Rights Reserved.
      </h1>
    </>
  );
};

export default Footer;
