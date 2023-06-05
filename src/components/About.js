import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-rose-900 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl py-2 font-bold inline border-b-4 border-rose-600">{`{ About }`}</p>
        </div>
        <p className="text-xl mt-20">
        I am currently a student at Vellore Institute of Technology, Bhopal, pursuing B.Tech in Electronics and Communication. From learning core concepts of ECE to exploring programming languages like Javascript, java, and Shell, I like to learn and explore something new, productive, and creative.
        </p>
        {/* <br></br>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas?
        </p> */}
      </div>
    </div>
  );
};

export default About;
