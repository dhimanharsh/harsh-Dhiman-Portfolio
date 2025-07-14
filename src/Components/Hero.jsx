import React from "react";

function Hero() {
  return (
    <>
      <div className=" h-[40rem] flex flex-col justify-center gap-4 items-center px-4 sm:px-6 lg:px-24 text-white ">
        <p className="text-xl sm:text-3xl md:text-5xl text-green-400 font-mono">
          const name =
        </p>
        <h1 className="text-6xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight">
          "Harsh"
        </h1>

        <p className="mt-2 text-sm sm:text-lg lg:text-2xl text-gray-400 font-mono">
          // MERN Stack Developer
        </p>
        <p className="text-sm sm:text-lg lg:text-2xl text-gray-500 font-mono break-words whitespace-normal overflow-hidden text-center px-4">
  // I build fast, clean, full-stack apps
</p>


        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#projects"
            className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-sm sm:text-base text-white transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 sm:px-6 sm:py-3 border border-white hover:bg-white hover:text-black rounded-full text-sm sm:text-base transition"
          >
           View CV
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
