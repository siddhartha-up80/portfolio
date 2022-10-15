import React from "react";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: "https://source.unsplash.com/random/800x500/?profile",
      name: "Managinator",
      link: "https://managinator.netlify.app",
      code: "https://github.com/siddhartha-up80/Managinator",
    },
    {
      id: 2,
      src: "https://source.unsplash.com/random/800x500/?menu",
      name: "Menuinator",
      link: "https://github.com/siddhartha-up80/Menuinator",
      code: "https://github.com/siddhartha-up80/Menuinator",
    },
    {
      id: 3,
      src: "https://source.unsplash.com/random/800x500/?weather",
      name: "Weatherinator",
      link: "https://weatherinator.netlify.app/",
      code: "https://github.com/siddhartha-up80/Weatherinator",
    },
    {
      id: 4,
      src: "https://source.unsplash.com/random/800x500/?notes",
      name: "Keepinator",
      link : "https://keepinator.netlify.app/",
      code : "https://github.com/siddhartha-up80/Keepinator",
    },
    {
      id: 5,
      src: "https://source.unsplash.com/random/800x500/?cryptocurrency",
      name: "Cryptoinator",
      link: "https://cryptoinator.netlify.app",
      code: "https://github.com/siddhartha-up80/Cryptoinator",
    },
    // {
    //   id: 6,
    //   src: "https://source.unsplash.com/random/800x500/?app",
    //   name: "WebApps",
    //   link: "https://github.com/siddhartha-up80/Textinator",
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl py-2 font-bold inline border-b-4 border-gray-500">
            {`{ Portfolio }`}
          </p>
          <p className="py-6">
            {" "}
            Check out some of my work {"{ inators }"} right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-08 sm:px10 sm:px-0">
          {portfolio.map(({ id, src, name, link, code }) => (
            <div
              key={id}
              className="group shadow-md  shadow-gray-600 rounded-lg"
            >
              <a href={link}>
                <img
                  src={src}
                  alt="Inator"
                  className="rounded-md duration-200 hover:scale-105"
                  title={name}
                />
              </a>

              <div className="flex items-center justify-center">
                <button className="w-1/2  py-3 m-0.5 duration-200 hover:scale-105 hover:border-solid  hover:border-b-2 hover:border-white">
                  <a href={link} target="_blank" rel="noreferrer">
                    {`{ ${name} }`}
                  </a>
                </button>
                <button className="w-1/2 py-3 m-0.5 duration-200 hover:scale-105 hover:border-solid  hover:border-b-2 hover:border-white">
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                  >{`{ Code }`}</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
