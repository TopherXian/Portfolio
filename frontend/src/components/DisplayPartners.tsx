import React from "react";

interface MyPartner {
  imageSrc: string;
}

const About_MyPartners: React.FC<MyPartner> = ({ imageSrc }) => {
  return (
    <div className="flex flex-wrap justify-center items-center mx-[1vw]">
      {/* IMAGE */}
      <div className="w-[30vw] h-[10vh] flex justify-center items-center mb-[5vh] mt-[15vh]">
        <img src={imageSrc} alt="workImage" className="object-cover" />
      </div>
    </div>
  );
};

export default About_MyPartners;
