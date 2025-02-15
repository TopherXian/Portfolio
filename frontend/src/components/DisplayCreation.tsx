import React from "react";

interface MyCreation {
  imageSrc: string;
}

const About_MyCreation: React.FC<MyCreation> = ({ imageSrc }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-[2vw]">
      {/* IMAGE */}
      <div className=" w-[20vw] h-[30vh] flex justify-center items-center mb-[5vh] mt-[15vh]">
        <img src={imageSrc} alt="workImage" className="object-cover" />
      </div>   
    </div>
  );
};

export default About_MyCreation;
