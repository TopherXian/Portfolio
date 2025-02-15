import React from "react";

import sampleImage from "../assets/images/react.svg";

import Navbar from "../components/Navbar";
import DisplayWork from "../components/DisplayWork";
import DisplayCreation from "../components/DisplayCreation";
import DisplayPartner from "../components/DisplayPartners";

const aboutWork = [
  {
    imageScr: sampleImage,
    workCategory: "Game Development",
  },
  {
    imageScr: sampleImage,
    workCategory: "Website Designer",
  },
  {
    imageScr: sampleImage,
    workCategory: "Computer Scientist",
  },
];

const aboutCreation = [
  {
    imageScr: sampleImage,
  },
  {
    imageScr: sampleImage,
  },
  {
    imageScr: sampleImage,
  },
  {
    imageScr: sampleImage,
  },
];

const aboutPartner = [
  {
    imageScr: sampleImage,
  },
  {
    imageScr: sampleImage,
  },
  {
    imageScr: sampleImage,
  },
  {
    imageScr: sampleImage,
  },
];

const Homepage = () => {
  return (
    <>
      <div className="bg-darkGray">
        {/* LAYER 1 */}
        <div className="min-h-screen relative">
          <Navbar />
          <div className="flex">
            <div className="bg-[(../assets/images/react.svg)] h-[90vh] w-[40vw]"></div>

            <div className="h-[90vh] w-[60vw] px-[10vw] text-white pt-[25vh]">
              <p className="text-introLarge font-ultralight">Hello there!</p>
              <p className="text-headingLarge font-inter font-bold">
                I’m <span className="text-yellow">Cristopher Ian</span>
              </p>
              <p className="text-headingLarge font-inter font-bold">
                Computer Programmer
              </p>
              <p className="text-contentLarge mt-[1vh] font-light">
                I specialize in game development, website design, and computer
                science, creating engaging games, intuitive websites, and
                innovative tech solutions.
              </p>
              <button className=" bg-white text-black mt-[2vh] px-[2vw] rounded-full font-inter text-contentLarge font-bold">
                Hire Me
              </button>
            </div>
          </div>
        </div>

        {/* LAYER 2 */}
        <div className="min-h-screen relative text-center pt-[10vh]">
          <p className="text-headingLarge font-inter font-bold text-white">
            My Work
          </p>
          <p className="text-contentLarge mt-[1vh] font-light mx-[20vw] text-white">
            I transform ideas into interactive realities, blending creativity
            and technology to craft immersive experiences, seamless designs, and
            intelligent solutions. My work bridges the gap between imagination
            and innovation, shaping the digital world one creation at a time.
          </p>
          <div className="flex justify-center px-[10vw]">
            {aboutWork.map((work) => (
              <DisplayWork
                imageSrc={work.imageScr}
                workCategory={work.workCategory}
              ></DisplayWork>
            ))}
          </div>
        </div>

        {/* LAYER 3 */}
        <div className="min-h-screen relative pt-[10vh]">
          <p className="text-headingLarge font-inter font-bold text-white text-center">
            Creations
          </p>
          <p className="text-contentLarge mt-[1vh] font-light mx-[20vw] text-white text-center">
            I bring creativity and technical precision to every project,
            crafting engaging gaming experiences, intuitive websites, and
            innovative solutions to complex computational challenges. My work
            reflects a commitment to quality, user-centric design, and
            cutting-edge technology.
          </p>
          <div className="flex justify-center px-[10vw]">
            {aboutCreation.map((creation) => (
              <DisplayCreation imageSrc={creation.imageScr}></DisplayCreation>
            ))}
          </div>
          <button className="bg-white text-black mt-[4vh] px-[2vw] rounded-full font-inter text-contentLarge font-bold float-right mr-[10vw]">
            See More
          </button>
        </div>

        {/* LAYER 4 */}
        <div className="min-h-screen relative pt-[10vh]">
          <p className="text-headingLarge font-inter font-bold text-white text-center">
            Partners
          </p>
          <p className="text-contentLarge mt-[1vh] font-light mx-[20vw] text-white text-center">
            I work alongside dedicated partners who share a passion for
            creativity, innovation, and excellence. Together, we combine diverse
            skills and perspectives to bring ideas to life, crafting unique
            solutions and achieving shared goals. Through collaboration and
            mutual inspiration, we turn challenges into opportunities and
            deliver impactful results that stand out.
          </p>

          <button className="bg-white text-black mt-[4vh] px-[2vw] rounded-full font-inter text-contentLarge font-bold float-right mr-[10vw]">
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
