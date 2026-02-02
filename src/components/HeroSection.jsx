import React from 'react'
import living from "../assets/living.jpg"



const HeroSection = () => {
  return (
    <div className="flex  p-6">
      
      <div className="flex  border rounded  border-gray-600">
        
        {/* Left Part */}
        <div className="w-1/3 relative  bg-gray-600 text-white flex items-center justify-center">
          <h1 className="text-2xl font-bold  absolute left-[2rem] top-[8rem]">Transforming  <br />Spaces Info  Stunning  <br />Experiences</h1>
          <p className='text-white  absolute left-[2rem] top-[18rem]'>We design elegant, <br /> functional, and personalized interiors  <br />that reflect  your lifestyle  <br />and elevate your everyday living and<br /> timeless interior spaces tailored to your vision.</p>  
        </div>

        {/* Right Part */}

        <div className="w-[82rem] h-[40rem] relative bg-cover bg-center"style={{ backgroundImage: `url(${living})`}}>
          {/* <img 
            src={living} 
            alt="living area" 
            className="w-full h-full object-cover"
          /> */}
         <button className='bg-gray-600/50 bg-blur    p-2 px-4   text-xl  absolute top-[18rem] left-[23rem] text-white font-light hover:text-2xl border-0 p rounded hover:bg-gray-600 '> Our Work</button>
        </div>

      </div>
      
    </div>
  );
};

export default HeroSection;


