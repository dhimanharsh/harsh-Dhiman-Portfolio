import React from "react";

function SkillSet() {
  return (
    <>
      <div class="relative top-0 h-full w-full bg-slate-950 flex flex-col justify-around gap-5">
        {/* bg-styling */}
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]"></div>

        <div className=" w-fit m-auto flex flex-col justify-center items-center">
          <h4 className="text-white text-2xl">GET TO KNOW MORE</h4>
          <h2 className="text-white text-6xl font-mono font-bold">ABOUT ME</h2>
        </div>

        <div className="flex  justify-around w-[90%] m-auto h-[25rem]">
          <div className="max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200">
            <img
              className="w-full h-40 object-cover"
              src="https://via.placeholder.com/400x150.png?text=Certificate+Image"
              alt="Certificate"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Full Stack Web Development
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Certified by <span>CII-MCM Multi Skill Training Institute</span>
              </p>
            </div>
          </div>
          <div className="max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200">
            <img
              className=""
              src="https://imgs.search.brave.com/Ohet3Tv3M_pqmP0CCRogIidrxJgdAfMMktzy0exRjwk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWVocmNoYW5kbWFo/YWphbi5vcmcvYXNz/ZXRzL2ltYWdlcy9p/bWFnZXMvbG9nby1t/Y20ucG5n"
              alt="Certificate"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Full Stack Web Development
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Certified by <span>CII-MCM Multi Skill Training Institute</span>
              </p>
              <article>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime enim quasi rerum itaque. Facere, hic numquam. Eaque libero ratione veritatis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis impedit quos iusto </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillSet;
