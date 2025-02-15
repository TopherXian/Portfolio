import React from "react";

interface MyWork {
  imageSrc: string;
  workCategory: string;
}

const About_MyWork: React.FC<MyWork> = ({ imageSrc, workCategory }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-[5vw]">
      {/* IMAGE */}
      <div className=" w-[10vw] h-[20vh] flex justify-center items-center mb-[5vh] mt-[15vh]">
        <img src={imageSrc} alt="workImage" className="object-cover" />
      </div>
      {/* WORK CATEGORY */}
      <p className="text-white font-inter text-headingLarge font-bold text-center">
        {workCategory}
      </p>
    </div>
  );
};

export default About_MyWork;
