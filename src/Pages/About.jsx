import React from "react";
import contact from "../assets/contact.jpg";
import about1 from "../assets/about1.jpg";
import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import pro from "../assets/pro.jpg";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx"

const About = () => {
  return (
   <>
     <NavBar />
    <div className="h-screen w-full relative">
      
      <div
       
        className="h-[38rem] w-full flex flex-col justify-center items-center bg-cover bg-center  "
                  style={{ backgroundImage: `url(${contact})` }}
      >
       
         <h1 className="text-5xl md:text-5xl p-5 gap-2 font-bold text-white hover:text-5xl">
            About Us
          </h1>

        <p className="text-white text-md text-center max-w-2xl">
          Designing luxury with purpose, We craft elegant spaces that inspire{" "}
          <span className="">
            {" "}
            living and elevate everyday moments.
          </span>
        </p>
      </div>
    

<div className="w-full flex flex-col lg:flex-row p-6 lg:p-12 gap-10">
  

  <img
    src={about1}
    alt=""
    className="rounded-xl w-full lg:w-[25rem] h-auto lg:h-[36rem] object-cover"
  />

  <div className="bg-gray-700 w-full flex flex-col p-6 lg:p-8 gap-4 rounded-xl">
    
    <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white font-serif">
      Where Design Meets Emotion. Creating Timeless Spaces.
    </h1>

    <p className="font-medium text-sm sm:text-base lg:text-lg text-white">
      We design elegant, functional, and personalized interiors that
      reflect your lifestyle. From concept to completion, our creative
      approach transforms ordinary spaces into inspiring environments that
      enhance comfort, beauty, and everyday living.
    </p>

 
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-5">
      

      <div className="bg-white flex h-[10rem] w-full flex-col justify-center items-center rounded-2xl hover:border-2 hover:border-gray-900 transition">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          150+
        </h1>
        <p className="text-xs sm:text-sm text-gray-600">
          Great Design
        </p>
      </div>

      <div className="bg-white flex h-[10rem] w-full flex-col justify-center items-center rounded-2xl hover:border-2 hover:border-gray-900 transition">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          5+
        </h1>
        <p className="text-xs sm:text-sm text-gray-600">
          Years of Experience
        </p>
      </div>

  
      <div className="bg-white flex h-[10rem] w-full flex-col justify-center items-center rounded-2xl hover:border-2 hover:border-gray-900 transition">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          50+
        </h1>
        <p className="text-xs sm:text-sm text-gray-600">
          Happy Clients
        </p>
      </div>

    </div>
  </div>
</div>



















      <div className="bg-gray-700 flex justify-center items-center flex-col  p-8 gap-2 ">
        <h2 className="  font-extrabold text-4xl  text-white p-5">
          Expert Design Team
        </h2>
        <p className="font-medium text-lg p-8 text-white">
          Our team of skilled interior designers, architects, and craftsmen work
          together to deliver creative, functional, and elegant solutions.{" "}
         With attention to detail and
          passion for excellence, we transform your ideas into beautifully
          designed spaces.
        </p>

        <div className="grid md:grid-cols-3  sm:grid-cols-1 gap-30 p-5 ">
          <img
            src={profile2}
            alt=""
            className="hover:border-2 hover:scale-[1.1] transition duration-300 "
          />
          <img
            src={profile1}
            alt=""
            className="hover:border-2 hover:scale-[1.1] transition duration-300 "
          />
          <img
            src={pro}
            alt=""
            className="hover:border-2 hover:scale-[1.1] transition duration-300 "
          />
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default About;
