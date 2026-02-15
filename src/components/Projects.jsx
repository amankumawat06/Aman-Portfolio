import React,{useState} from "react";
import "./style.css";

const projectData = [
  {
    title: "FitTrack- Fitness Application",
    description:[
      "Built a full-stack web application that covers all aspects of gym services.",
      "Developed three different dashboards based on user roles(Admin, Trainer, Member).",
      "Implemenetd user authenticated & authorization with role based access control.",
      "Intergrated payment system and enabled members to set goals and receive exercise recommendations based on their goals."
    ],
    image: "../Images/project-ai.png",
    tech: ["Node", "Express", "MongoDB","JavaScript", "CSS", "Bootstrap"],
    category: "fullstack",
    live: "https://fit-track-fitness-application.vercel.app",
    github: "https://github.com/amankumawat06/Fitness-Application/blob/main/README.md",
  },
  {
    title: "Wanderlust",
    description:[
      "Built a Full-stack listing platform where user can signup, login and explore about hotels in detail.",
      "Implemented user authentication and authorization, image upload functionality & dynamic hotel management using RESTful APIs.",
      "Added search functionality and category based filtering for better navigation",
      "Developed a review system allowing authenticated users to add reviews to listings"
    ],
    image: "../Images/project-ai.png",
    tech: ["Node", "Express", "MongoDB","Cloudinary", "Leaflet Map"],
    category: "fullstack",
    live: "https://wanderlustplatform.vercel.app/listings",
    github: "https://github.com/amankumawat06/Wanderlust/blob/master/README.md",
  },
  {
    title: "TradeX Trading Platform",
    description:[
      "Built a Full-stack trading application that allows users to buy and sell stocks.",
      "Implemented transaction history tracking for all buy and sell operations.",
      "Created a personal dashboard for logged In users.",
      "Implemented interactive charts & graphs to improve better data visualization."
    ],
    image: "../Images/project-ai.png",
    tech: ["React", "Node", "Express","MongoDB", "JavaScript", "Axios"],
    category: "fullstack",
    live: "https://trade-x-trading-platform-five.vercel.app/",
    github: "https://github.com/amankumawat06/TradeX-Trading-Platform/blob/main/README.md",
  },
  {
    title: "Instagram web App",
   description:[
      "Built a backend social media application enabling users to create profiles, edit user details, and upload profile pictures.",
      "Implemented follow and unfollow functionality between users.",
      "Integrated profile picture upload using Cloudinary and managed data with MongoDB."
    ],
    image: "../Images/project-portfolio.png",
    tech: ["Node", "Express", "EJS", "MongoDB", "Bootstrap", "Cloudnary"],
    category: "backend",
    live: "https://instagram-web-app-1.onrender.com/",
    github: "https://github.com/amankumawat06/Instagram-web-App/blob/main/README.md",
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

      {/* Filter buttons */}
      <div className="project-filters">
        <button className={filter === "all" ? "selectedSkill" : ""} onClick={() => setFilter("all")}>All</button>
        <button className={filter === "frontend" ? "selectedSkill" : ""} onClick={() => setFilter("frontend")}>Frontend</button>
        <button className={filter === "backend" ? "selectedSkill" : ""} onClick={() => setFilter("backend")}>Backend</button>
        <button className={filter === "fullstack" ? "selectedSkill" : ""} onClick={() => setFilter("fullstack")}>Full Stack</button>
      </div>

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
              <a href={project.live} target="_blank" rel="noreferrer" className="liveBtn">
                Live
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="githubBtn">
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
