import React, { useState } from "react";
import { Link } from "react-router";
import intlogo from "../assets/intlogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
  
      <nav className="w-full flex items-center justify-around px-6 md:px-16 py-4 text-xl font-medium   bg-blue-200 shadow">

       

        <div className="hidden md:flex justify-center items-center gap-10   ">
           <img className="h-10" src={intlogo} alt="logo" />
          <Link  className =" hover:text-[#FF9B51] hover:underline" to="/">Home</Link>
          <Link className="hover:text-[#FF9B51] hover:underline " to="/about">About Us</Link>
          <Link className="hover:text-[#FF9B51] hover:underline " to="/contact">Contact Us</Link>
          <Link className="hover:text-[#FF9B51] hover:underline " to="/work">Our Work</Link>
          <button className="bg-[#FF9B51] gap-20 p-2 px-5 text-white rounded-2xl hover:scale-[1.1] transition duration-300"> Call Now </button>

        </div>
   
        <div className=" md:hidden flex justify-between items-center w-full ">
             <img className="h-10" src={intlogo} alt="logo" />
          <button onClick={handleButtonToggle}>
            <RxHamburgerMenu size={28} />
           
          </button>
        </div>
        
      </nav>

      {showMenu && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 text-center bg-gray-100 shadow">
        
          <Link className="  bg-gray-500 text-white" to="/">Home</Link>
          <Link  className="bg-gray-500 text-white" to="/about">About Us</Link>
          <Link  className="bg-gray-500 text-white" to="/contact">Contact Us</Link>
          <Link  className="bg-gray-500 text-white" to="/work">Our Work</Link>
          <button className="bg-[#FF9B51]  p-2 px-5 text-white rounded-2xl hover:scale-[1.1] transition duration-300 w-[10rem]"> Call Now </button>
        </div>
      )}
    </>
  );
};

export default NavBar;

