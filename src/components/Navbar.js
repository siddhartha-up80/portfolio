import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "experience" },
    { id: 6, link: "contact" },
    
  ];

  const links2 = [
    {
      id: 7,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/siddhartha-singh-68645a244/",
    },
    {
      id: 8,
      name: "GitHub",
      link: "https://github.com/siddhartha-up80",
    },
    {
      id: 9,
      name: "Mail",
      link: "mailto:siddhartha.singh3093@gmail.com",
    },
    {
      id: 9,
      name: "Resume",
      link: "./resume.pdf",
    },
  ];
  return (
    <div className=" flex justify-between items-center w-full h-20 text-white bg-black fixed px-4 ">
      <div>
        <h1 className=" sm:text-5xl md:text-4xl text-4xl font-bold ml-2">{'( Inators ) => '}</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-rose-300 hover:scale-105 duration-200 hover:border-solid  hover:border-b-2 hover:border-white"
          >
          <Link to={link} smooth duration={600}>{link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-rose-300 md:hidden duration-300"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
            {nav && (<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-rose-900 text-rose-400 duration-300">
        {links2.map(({ id, name, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize py-6 text-4xl duration-75 hover:border-solid  hover:border-b-2 hover:border-white sm:hover:border-solid  sm:hover:border-b-2 sm:hover:border-white"
          ><a href={link} >{name}</a></li>
        ))}
      </ul>)}
      
    </div>
  );
};

export default Navbar;
