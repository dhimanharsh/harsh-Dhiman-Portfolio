"use client";

import Hero from "./Hero";
import { SlidingTabBar } from "./Navbar";
import SkillSet from "./SkillSet";

export default function Example() {
  return (
    <div className="bg-white ">
      <header className="absolute inset-x-0 top-0 z-50 m-auto">
        <SlidingTabBar />
      </header>

     <div className="relative isolate h-[97vh] px-6 pt-14 lg:px-8 "> 
  <div className="absolute inset-0 z-[-1] bg-black bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>



        <div className="  h-[auto] flex justify-center">
          <Hero />
        </div>



      </div>


    </div>
  );
}
