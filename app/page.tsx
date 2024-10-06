/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, useEffect } from "react";
import React from "react";
import FlighSearchComponent from "./_components/flight-search-component";


const HomePage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient)
    return (
      <div className="flex flex-col items-center bg-white h-screen w-screen p-20">
        <h1 className="text-3xl text-black font-neueMontrealMedium">
          Good afternoon, Brian
        </h1>
        <FlighSearchComponent decoration={true}/>
      </div>
    );
};

export default HomePage;
