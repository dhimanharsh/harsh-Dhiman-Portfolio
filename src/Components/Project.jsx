import React, { useState } from "react";

function Project() {
  const [project] = useState([
    {
      name: "Recipe App",
      url: "https://recipee-app-ad5b.vercel.app/",
      technologyUsed: "React.js",
      img: "/receipe.png",
      description:
        "Built a responsive recipe app using React.js with API integration and a clean UI. Features include dynamic routing, multi-page views, and modern design principles.",
    },
    {
      name: "E-commerce App",
      url: "https://products-e-commerce-wpxm.vercel.app/",
      technologyUsed: "React.js",
      img: "/e-commerce.png",
      description:
        "Developed a modern e-commerce frontend using React.js. Integrated API data, implemented responsive UI with product browsing, and used React Router for multi-page navigation.",
    },
    {
      name: "Frontend Mentor Challenges",
      url: "https://www.frontendmentor.io/profile/dhimanharsh",
      technologyUsed: "HTML, CSS, JavaScript",
      img: "/frontend-mentor.jpeg",
      description:
        "Completed multiple frontend challenges to improve skills in HTML, CSS, and JavaScript. Focused on responsive layouts, accessibility, and pixel-perfect designs.",
    },
    
  ]);

  return (
    <div className="bg-slate-950 text-white py-16 px-4 sm:px-10" id="projects">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 underline decoration-blue-500/50">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {project.map((proj, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl shadow-xl hover:scale-[1.03] transition-transform duration-300 hover:shadow-blue-500/50 border border-blue-500/30"
          >
            <img
              src={proj.img}
              alt={proj.name}
              className="rounded-t-2xl w-full h-52 object-cover hover:opacity-90 transition-opacity duration-300"
            />
            <div className="p-6 flex flex-col justify-between h-[280px]">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-1">
                  {proj.name}
                </h3>
                <p className="text-sm text-blue-200 mb-2 italic">
                  {proj.technologyUsed}
                </p>
                <p className="text-sm text-gray-300 mb-4 line-clamp-4">
                  {proj.description}
                </p>
              </div>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-blue-400 hover:text-blue-300 underline"
              >
                View Project &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
