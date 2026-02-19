import React from "react";
import contact from "../assets/contact.jpg";
import work01 from "../assets/work01.jpg";
import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";
import w9 from "../assets/w9.jpg";
import w4 from "../assets/w4.jpg";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";

const OurWork = () => {
  return (
    <>
      <NavBar />
      <div className="    ">
        <div
          className="h-[38rem] w-full flex flex-col  justify-center  items-center bg-cover bg-center "
          style={{ backgroundImage: `url(${contact})` }}
        >
          <h1 className="text-5xl md:text-5xl p-5 gap-2 font-bold text-white hover:text-5xl">
            Our Work
          </h1>
          <p className="text-white text-md text-center max-w-2xl  ">
            Explore our curated portfolio of thoughtfully designed spaces that
            blend elegance, <br /> functionality and comfort.
          </p>
        </div>
      </div>
      <div>
        <div className="text-center p-5">
          <h1 className="text-4xl font-extrabold p-10 hover:text-amber-600 hover:scale-[1.1] transition duration-300">
            Crafting Spaces That Inspire Living
          </h1>
          <p className="text-xl ">
            We bring creativity, precision, and passion to every project,
            delivering interiors that combine elegance, comfort, and
            functionality.
            <br />
            &emsp; Each space is thoughtfully crafted to reflect your vision and
            lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-12 ml-6  text-white">
          <div className="bg-gray-600  rounded-2xl p-2 h-[13rem] flex flex-col justify-center items-center ">
            <h1 className="font-extrabold text-2xl hover:text-amber-600 hover:scale-[1.1] transition duration-300 ">
              Residential Interiors
            </h1>
            <p className="p-5">
              Creating warm, stylish, and functional homes that reflect comfort{" "}
              <br />
              and personality.
            </p>
          </div>
          <div className="bg-gray-600  rounded-2xl p-5 h-[13rem] flex flex-col justify-center items-center ">
            <h1 className="font-extrabold text-2xl hover:text-amber-600 hover:scale-[1.1] transition duration-300 ">
              Modular Kitchens
            </h1>
            <p className="p-5">
              Crafting smart, elegant kitchens with innovative storage and
              seamless functionality.
            </p>
          </div>
          <div className="bg-gray-600 h-[13rem] rounded-2xl p-5 flex flex-col justify-center items-center  ">
            <h1 className="font-extrabold text-2xl hover:text-amber-600 hover:scale-[1.1] transition duration-300">
              Luxury Renovations
            </h1>
            <p className="p-5">
              Designing efficient workspaces that enhance productivity and brand
              presence.
            </p>
          </div>
          <div className="bg-gray-600 h-[13rem] rounded-2xl p-5 flex flex-col justify-center items-center ">
            <h1 className="font-extrabold text-2xl  hover:text-amber-600   hover:scale-[1.1] transition duration-300 ">
              Commercial Spaces
            </h1>
            <p className="p-5">
              Transforming existing spaces into contemporary, refined, and
              timeless interiors.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full   grid md:grid-cols-3 grid-cols-1 bg-gray-400 gap-8 p-8">
        <p className="text-md sm:text-lg lg:text-2xl font-extrabold text-white  text-center p-10 mt-8">
          Our work reflects a perfect balance of creativity, functionality, and
          elegance. We design thoughtfully crafted interiors that enhance
          everyday living and create inspiring environments.
          <br />
          <br />
          Our projects showcase timeless aesthetics, quality craftsmanship, and
          innovative solutions. Each space we create is a true expression of our
          client’s vision and lifestyle.
        </p>

        <img
          src={work01}
          alt=""
          className="w-full h-[34rem] rounded-2xl  mt-6 mb-6 hover:scale-[1.1] transition duration-300"
        />

        <div className="grid grid-cols-2  md:grid-cols-2  gap-6 p-10    ">
          <img src={w1} alt="" className="rounded-2xl hover:scale-[1.1] transition duration-300 " />
          <img src={w2} alt="" className="rounded-2xl hover:scale-[1.1] transition duration-300 " />
          <img src={w9} alt="" className="rounded-2xl hover:scale-[1.1] transition duration-300 " />
          <img src={w4} alt="" className="rounded-2xl hover:scale-[1.1] transition duration-300 " />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OurWork;
