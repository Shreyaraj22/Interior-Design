import React, { useEffect, useState } from "react";

const Aboutt = () => {
  
    const [val,setVal]= useState([]);

    useEffect ( ()=>{
        const fetchData = async () => {

            const response = await fetch ("https://jsonplaceholder.typicode.com/posts");

            const data = await response.json();

            setVal(data);
        }
        fetchData();
         

    },[]);
  return (
    <div>
      {val.map( (item) => (
        <p key = {item.id}>{item.id}</p>
      ))}
      


    </div>
  );
};

export default Aboutt;



