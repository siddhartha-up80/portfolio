import React from "react";
import HeroImage from "../Images/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to bg-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-5xl text-white">
              {"( work ) =>"} I am a React Developer
            </h2>
            <p className="text-gray-300 py-4 max-w-md">
              This is siddhartha here, passionate about building and desgining software.
              Currently, I love to work on web application using technologies
              like React, Tailwind, Next JS.
            </p>

            <div>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </div>
          </div>
          <div>
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/4 md:h-80 md:w-80 md:mx-8 sm:w-80 sm:mx-8"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl sm:text-5xl text-white" >{"()=>"} I make "inators", without self distruct button </p>
          <div className="text-white my-8">
            <img src="" alt="inators"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
