import React from "react";

function SkillSet() {
  return (
    <>
    {/* main div----- 1*/}
<div className="flex flex-col justify-between h-full bg-slate-950 pb-7 " id="about">
  {/* Top Heading */}
  <div className="m-auto flex flex-col justify-center items-center text-white text-center px-4 p-4">
    <span className="text-3xl">Get to Know More</span>
    <h2 className="text-5xl font-bold">About Me</h2>
  </div>

  {/* Grid Section */}
  <div className="grid h-auto md:h-[30rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-none md:grid-rows-4 gap-4 w-[95%] m-auto px-4">

    {/* Image Section */}
    <section className="col-start-1 col-end-2 md:row-start-1 md:row-end-4 rounded-2xl flex justify-center">
      <img src="/harshdhimanpic.jpg" className="h-full rounded-3xl object-cover transition duration-300 ease-in-out transform hover:scale-103 hover:border-4 shadow-2xl hover:border-sky-400
" />
    </section>

    {/* Experience Card */}
    <section className="text-white transition duration-300 ease-in-out transform hover:scale-102 hover:shadow-xl hover:border-sky-400
 col-start-1 sm:col-start-2 md:col-start-2 col-end-2 md:col-end-3 row-start-auto md:row-start-2 md:row-end-4 rounded-2xl flex flex-col justify-center items-center border-1 p-4 text-center">
      <img src="/certificate.svg" className="h-[4em]" />
      <h2 className="text-4xl">Experience</h2>
      <span className="text-2xl">Trainee</span>
      <p className="text-3xl font-bold">MERN Stack Developer</p>
    </section>

    {/* Education Card */}
    <section className="text-white transition duration-300 ease-in-out transform hover:scale-102 hover:shadow-xl hover:border-sky-400
 col-start-1 sm:col-start-1 md:col-start-3 col-end-2 md:col-end-4 row-start-auto md:row-start-2 md:row-end-4 rounded-2xl flex flex-col justify-center items-center border-1 p-4 text-center">
      <img src="/degree.svg" className="h-[4em]" />
      <h2 className="text-4xl">Education</h2>
      <p className="text-2xl font-bold">Bachelor of Commerce</p>
    </section>

    {/* About Paragraph */}
    <section className="text-white  flex justify-center items-center border-1 md:row-start-4 md:col-start-2 md:col-end-4 rounded-2xl col-span-full p-4 text-center text-base sm:text-lg leading-relaxed overflow-hidden break-words">
  <p className="">
    I'm a passionate developer who loves turning ideas into clean, responsive web experiences.
    While I enjoy writing code and building cool UI, you'll often find me riding my bike or
    exploring new places—traveling gives me fresh perspectives and keeps my creativity alive.
    I believe in continuous learning, whether it's through code or the open road.
  </p>
</section>

  </div>
</div>


    </>
  );
}

export default SkillSet;
