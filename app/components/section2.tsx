import Image from "next/image";
import React from "react";
import Stars from "./stars";
import Skills from "./skills";
import Projects from "./projects";

const Section2 = () => {
  return (
    <div className="section bg-[#212121]">
      <div className="flex flex-col gap-20 xl:top-[-10.9rem] md:top-[10.9rem] relative bg-[#212121] items-center justify-center w-[80%] md:w-[100%]">
        <Skills/>
        <Projects/>        
      </div>
      <Stars />
    </div>
  );
};

export default Section2;
