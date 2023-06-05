import React from "react";
// import { Link } from "react-scroll";
import HeroImage from "../Images/heroImage.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to bg-rose-900 "
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          {/* <div className="flex flex-col justify-center h-full  mt-20">
            <h2 className="text-4xl sm:text-5xl text-white">
              {"( work ) =>"} <div className="sm:hidden my-4"></div> React Developer
            </h2>
            <p className="text-rose-300 py-4 max-w-md">
              This is siddhartha here, passionate about building and desgining
              software. Currently, I love to work on web application using
              technologies like React, Tailwind, Next JS.
            </p>

            <div>
              <Link
                to="portfolio"
                smooth
                duration={600}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-600 to-red-600 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div> */}
          <div>
            <div
              className="rounded-lg shadow-xl bg-gray-900 text-white w-[90vw] h-[60vh] md:w-[50vw] md:h-[50vh] mt-20 mb-10 md:mt-2"
              // style={{ width: "40vw", height: "60vh" }}
            >
              <div className="border-b border-gray-800 px-8 py-3">
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500" />
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300" />
                <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400" />
              </div>
              <div className="px-8 py-6">
                <p>
                  <em className="text-blue-400">const</em>{" "}
                  <span className="text-green-400">aboutMe</span>{" "}
                  <span className="text-pink-500">=</span>{" "}
                  <em className="text-blue-400">function</em>( ) {"{"}
                </p>
                <p>
                  &nbsp;&nbsp;<span className="text-pink-500">return</span>{" "}
                  {"{"}
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;Inators:{" "}
                  <span className="text-yellow-300">'My Portfolio'</span>,
                </p>{" "}
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;my_name:{" "}
                  <span className="text-yellow-300">'Siddhartha Singh'</span>,
                </p>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;description:{" "}
                  <span className="text-yellow-300">
                    'This is siddhartha here, passionate about building and
                    desgining software. Currently, I love to work on web
                    application using technologies like React, Tailwind, Next.js'
                  </span>
                  ,
                </p>
                {/* <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;website:{" "}
                  <span className="text-yellow-300">
                    '
                    <a
                      href="https://inators.netlify.app"
                      target="_blank"
                      className="text-yellow-300 hover:underline focus:border-none"
                    >
                      https://inators.netlify.app
                    </a>
                    '
                  </span>
                  ,
                </p> */}
                <p>&nbsp;&nbsp;{"}"}</p>
                <p>{"}"}</p>
              </div>
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
      </div>
    </>
  );
};

export default Home;
