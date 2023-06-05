import React from "react";
import Html from "../Images/html.png";
import Css from "../Images/css.png";
import Github from "../Images/github.png";
import Tailwind from "../Images/tailwind.png";
import Javascript from "../Images/javascript.png";
import NextJs from "../Images/nextjs.png";
import ReactJs from "../Images/react.png";
import NodeJS from "../Images/node.png"

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: Javascript,
      title: "JavaScript",
      style: "shadow-yellow-600",
    },
    {
      id: 4,
      src: ReactJs,
      title: "React",
      style: "shadow-sky-600",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-300",
    },
    {
      id: 6,
      src: NextJs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: Github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: NodeJS,
      title: "NodeJS",
      style: "shadow-green-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-rose-900 to-black w-full h-full pt-20 sm:pt-28 sm:pb-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl py-2 font-bold border-b-4 border-rose-600 p-2 inline">
          {`{ Experience }`}
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-600 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
