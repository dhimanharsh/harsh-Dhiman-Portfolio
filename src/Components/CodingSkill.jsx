import React from "react";
import Marquee from "./Marquee";

function CodingSkill() {
  return (
    <>
      <div className="bg-slate-950 min-h-[45rem] flex flex-col justify-around px-4 sm:px-6 md:px-12">
        {/* 1 */}
        <h2 className=" text-white text-3xl sm:text-4xl md:text-5xl font-medium flex justify-center p-4 sm:p-6 text-center">
          MY SKILL-SET
        </h2>

        {/* 2 */}
        <div className="w-full md:w-2/3 h-20 text-white flex bg-white justify-center items-center overflow-x-hidden overflow-hidden m-auto rounded-3xl  ">
          <Marquee />
        </div>

        {/* 3 */}
        <div className="min-h-[40rem] border-7 flex flex-col lg:flex-row justify-around items-center gap-6 mt-6">
          {/* Frontend */}
          <div className="w-full h-[20rem] md:w-[90%] lg:w-[45%]  text-white flex flex-col items-center justify-around p-4 shadow-lg shadow-blue-500/50 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h1 className="text-2xl sm:text-3xl mb-4">Frontend Development</h1>

            <div className="flex flex-wrap justify-around items-center w-full gap-4">
              {[
                { title: "HTML" },
                { title: "CSS" },
                { title: "JAVASCRIPT" },
                { title: "TAILWIND" },
                { title: "BOOTSTRAP" },
                { title: "REACT JS" },
              ].map((skill, i) => (
                <div
                  key={i}
                  className="flex  w-[10em] justify-around items-center p-2"
                >
                  <img
                    src="/check.svg"
                    className="h-[2em] rounded-full"
                    alt="icon"
                  />
                  <div>
                    <h3>{skill.title}</h3>
                    <p>Intermediate</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className=" w-full h-[20rem] md:w-[90%] lg:w-[45%] text-white flex flex-col items-center justify-around p-4 shadow-lg shadow-blue-500/50 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <h1 className="text-2xl sm:text-3xl mb-4">Backend Technologies</h1>

            <div className="flex flex-wrap justify-around items-center w-full gap-4">
              {[
                { title: "Nodejs" },
                { title: "Express" },
                { title: "MongoDB" },
                { title: "Git" },
              ].map((skill, i) => (
                <div
                  key={i}
                  className="flex  w-[10em] justify-around items-center p-2"
                >
                  <img
                    src="/check.svg"
                    className="h-[2em] rounded-full"
                    alt="icon"
                  />
                  <div>
                    <h3>{skill.title}</h3>
                    <p>Intermediate</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CodingSkill;
