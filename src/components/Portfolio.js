import React from "react";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: "https://source.unsplash.com/random/800x500/?money",
    },
    {
      id: 2,
      src: "https://source.unsplash.com/random/800x500/?menu",
    },
    {
      id: 3,
      src: "https://source.unsplash.com/random/800x500/?weather",
    },
    {
      id: 4,
      src: "https://source.unsplash.com/random/800x500/?girl",
    },
    {
      id: 5,
      src: "https://source.unsplash.com/random/800x500/?code",
    },
    {
      id: 6,
      src: "https://source.unsplash.com/random/800x500/?app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6"> Check out some of my work {'{ inators }'} right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src }) => (
            <div
              key={id}
              className="group shadow-md  shadow-gray-600 rounded-lg "
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
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
