// import React from "react";
// import "./style.css";

// const Projects = () => {
//   return (
//     <div className="container" id="projects">
//       <h1 className="my-5">Projects</h1>
//       {/* <div className='projectContainer'> */}
//       <div className="row mb-5">
//         <div className="project col-lg-5 offset-lg-1 col-sm-12">
//           <div className="Above d-flex justify-content-between align-items-center">
//             <div className="title">Title</div>
//             <button className="viewProject">View Project</button>
//           </div>
//           {/* <hr /> */}
//           <div className="below">
//             <div className="description text-start">description</div>
//           </div>
//         </div>
//         <div className="project col-lg-5 col-sm-12">
//           <div className="Above d-flex justify-content-between align-items-center">
//             <div className="title">Title</div>
//             <button className="viewProject">View Project</button>
//           </div>
//           {/* <hr /> */}
//           <div className="below">
//             <div className="description text-start">description</div>
//           </div>
//         </div>
//         <div className="project col-lg-5 offset-lg-1 col-sm-12">
//           <div className="Above d-flex justify-content-between align-items-center">
//             <div className="title">Title</div>
//             <button className="viewProject">View Project</button>
//           </div>
//           {/* <hr /> */}
//           <div className="below">
//             <div className="description text-start">description</div>
//           </div>
//         </div>
//         <div className="project col-lg-5 col-sm-12">
//           <div className="Above d-flex justify-content-between align-items-center">
//             <div className="title">Title</div>
//             <button className="viewProject">View Project</button>
//           </div>
//           {/* <hr /> */}
//           <div className="below">
//             <div className="description text-start">description</div>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </div>
//   );
// };

// export default Projects;


import React,{useState} from "react";
import "./style.css";

const projectData = [
  {
    title: "FitTrack",
    description:[
      "Built a responsive Fitness website with user regristration & custom plans.",
      "Designed a real time BMI calculator and interactive goal-based exercises schedules.",
      "Implemented simulated payment flow and a clean, modern UI."
    ],
    image: "/Images/God.png",
    tech: ["HTML", "CSS", "JavaScript","Font-awesome","AOS"],
    category: "frontend",
    live: "https://amankumawat06.github.io/FitTrack-GYM-website",
    github: "https://github.com/amankumawat06/FitTrack-GYM-website/blob/main/README.md",
  },
  {
    title: "Wanderlust",
    description:[
      "Built a fullstack listing platform where user can signup, login and explore about hotels in detail.",
      "Implemented user authentication, image upload functionality & dynamic hotel management using RESTful APIs.",
      "Design a responsive UI to enhance user exerience across all devices."
    ],
    image: "../Images/project-ai.png",
    tech: ["Node", "Express", "MongoDB","EJS", "Javascript", "Bootstrap"],
    category: "fullstack",
    live: "#",
    github: "https://github.com/amankumawat06/Wanderlust",
  },
  {
    title: "Tweet web App",
   description:[
      "Developed a web application that allow users to create, update & delete posts(tweets).",
      "Implemented full CURD functionality to manage user-generted context efficiently.",
      "Designed a clean and user-friendly interface to enhance overall user experience."
    ],
    image: "../Images/project-portfolio.png",
    tech: ["Node", "Express", "EJS", "MongoDB", "Bootstrap"],
    category: "backend",
    live: "https:/mini-quroa.onrender.com/posts",
    github: "https://github.com/amankumawat06/Tweet-web-App",
  },
  {
    title: "Portfolio",
    description:[
      "Developed a responsive react portfolio with clean and reusable components.",
      "Implemented modern UI/UX effects to enhance user engagement & interactivity.",
      "Designed a scalable frontend structure, ready for future backend intergration."
    ],
    image: "../Images/project-api.png",
    tech: ["React", "Javascript", "Bootstrap", "CSS", "Font-awesome"],
    category: "frontend",
    live: "#",
    github: "#",
  },
];

const Projects = () => {
    const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title titleLine">Projects</h2>

      {/* FILTER BUTTONS */}
      <div className="project-filters">
        <button className={filter === "all" ? "selectedSkill" : ""} onClick={() => setFilter("all")}>All</button>
        <button className={filter === "frontend" ? "selectedSkill" : ""} onClick={() => setFilter("frontend")}>Frontend</button>
        <button className={filter === "backend" ? "selectedSkill" : ""} onClick={() => setFilter("backend")}>Backend</button>
        <button className={filter === "fullstack" ? "selectedSkill" : ""} onClick={() => setFilter("fullstack")}>Full Stack</button>
      </div>

      {/* PROJECT GRID */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card"  key={index}>
            {/* <div className="project-image">
            </div> */}

            <div className="project-content">
              <h3 className="proj-title">{project.title}</h3>

              <ul className="proj-desc">
                {project.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>


              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
            <div className="project-actions mb-1`">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
          </div>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Projects;
