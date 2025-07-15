import React from 'react'

function Footer() {
  return (
    //  <footer className='h-[40rem]'>
<div className="relative h-auto md:h-[35rem] w-full bg-slate-950 px-4 py-6" id='contact'>
  {/* Grid background effect */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

  {/* Heading */}
  {/* <h6 className="text-white  text-xl sm:text-2xl relative z-10 mb-6">Get In Touch</h6> */}

  {/* Main Container */}
  <div className=" h-auto md:h-[90%] flex flex-col items-center justify-center gap-10 relative z-10 p-4">
    <h2 className="text-white font-mono text-3xl sm:text-4xl text-center">
      Let’s Make Something Cool 🚀
    </h2>

    {/* Contact Info Box */}
    <div className="border-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-sky-400
 border-white w-full sm:w-[90%] md:w-[60%] lg:w-[40%] text-white flex flex-wrap justify-center sm:justify-around items-center gap-4 sm:gap-6 py-4 px-2 rounded-4xl">
      <img src="/mail.svg" alt="" className="h-8 sm:h-10" />
      <span className="font-bold text-sm sm:text-base break-words text-center">harshdhiman484@gmail.com</span>
      <img src="/linkedin.svg" alt="linkedin" className="h-8 sm:h-10" />
      <span className="font-bold text-sm sm:text-base break-words text-center">linkedin</span>
    </div>
  </div>

  {/* Footer */}
  <h2 className="flex justify-center text-white text-xs sm:text-sm text-center mt-6 relative z-10">
    Copyright © 2025 Harsh Dhiman. All Rights Reserved.
  </h2>
</div>



// </footer>
  )
}

export default Footer





   {/* <div
          className="border-2 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:border-sky-400
 border-white w-full sm:w-[90%] md:w-[60%] lg:w-[40%] text-white flex flex-wrap justify-around sm:justify-around items-center gap-4 sm:gap-6 py-4 px-2 rounded-4xl cursor-pointer"
        >
   
            <img src="/insta.svg" alt="" className="h-8 sm:h-10" />
       
         
            <img src="/linkedincolor.svg" alt="" className="h-8 sm:h-10" />
     
            <img src="/github.svg" alt="" className="h-8 sm:h-10" />
         
            <img src="/facebook.svg" alt="" className="h-8 sm:h-10" />
        </div> */}