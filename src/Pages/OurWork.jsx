import React from "react";
import contact from "../assets/contact.jpg";
import work01 from "../assets/work01.jpg";
import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";
import w9 from "../assets/w9.jpg";
import w4 from "../assets/w4.jpg";
import Footer from "../components/Footer.jsx";

const OurWork = () => {
  return (
    <>
      <div className="h-screen w-full relative">
        <div
          className="h-full w-full flex flex-col  justify-center  items-center bg-cover bg-center "
          style={{ backgroundImage: `url(${contact})` }}
        >
          <h1 className="text-4xl   font-bold text-white mb-4  hover:text-5xl">
            Our Work
          </h1>
          <p className="text-white">
            Explore our curated portfolio of thoughtfully designed spaces that
            blend elegance, <br /> &emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            functionality and comfort.
          </p>
        </div>
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-4xl font-extrabold p-10">
            Crafting Spaces That Inspire Living
          </h1>
          <p className="text-md ">
            We bring creativity, precision, and passion to every project,
            delivering interiors that combine elegance, comfort, and
            functionality.
            <br />
            &emsp; Each space is thoughtfully crafted to reflect your vision and
            lifestyle.
          </p>
        </div>
        <div className="grid grid-cols-2  text-center h-screen mt-8 gap-10 p-20  text-white">
          <div className="bg-gray-600  rounded-2xl hover:border-2 hover:border-gray-800 ">
            <h1 className="font-extrabold text-2xl p-5  hover:underline ">
              Residential Interiors
            </h1>
            <p className="p-5">
              Creating warm, stylish, and functional homes that reflect comfort
              and personality.
            </p>
          </div>
          <div className="bg-gray-600  rounded-2xl p-5 hover:border-2 hover:border-gray-800">
            <h1 className="font-extrabold text-2xl hover:underline ">
              Modular Kitchens
            </h1>
            <p className="p-5">
              Crafting smart, elegant kitchens with innovative storage and
              seamless functionality.
            </p>
          </div>
          <div className="bg-gray-600  rounded-2xl p-5 hover:border-2 hover:border-gray-800 ">
            <h1 className="font-extrabold text-2xl hover:underline">
              Luxury Renovations
            </h1>
            <p className="p-5">
              Transforming existing spaces into contemporary, refined, and
              timeless interiors.
            </p>
          </div>
          <div className="bg-gray-600  rounded-2xl p-5 hover:border-2 hover:border-gray-800">
            <h1 className="font-extrabold text-2xl hover:underline ">
              Commercial Spaces
            </h1>
            <p className="p-5">
              Designing modern and efficient workspaces that enhance
              productivity and brand presence.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 bg-gray-400 ">
        <div className="text-xl font-medium text-white p-18 ">
          Our work reflects a perfect balance of creativity, functionality, and
          elegance. We design thoughtfully crafted interiors that enhance
          everyday living and create inspiring environments.
          <br /> Our projects showcase timeless aesthetics, quality
          craftsmanship, and innovative solutions. Each space we create is a
          true expression of our client’s vision and lifestyle.
        </div>

        <img
          src={work01}
          alt=""
          className="p-15 rounded-md hover:border-2 hover:border-white "
        />

        <div className="bg-gray-400 grid grid-cols-2 gap-5 p-15 ">
          <img
            src={w1}
            alt=""
            className="rounded-md hover:border-2 hover:border-white "
          />
          <img
            src={w2}
            alt=""
            className="rounded-md hover:border-2 hover:border-white"
          />
          <img
            src={w9}
            alt=""
            className="rounded-md hover:border-2 hover:border-white"
          />
          <img
            src={w4}
            alt=""
            className="rounded-md hover:border-2 hover:border-white"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurWork;
