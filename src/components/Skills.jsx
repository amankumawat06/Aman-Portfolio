// import React from 'react'
// import "./style.css"

// const Skills = () => {
//   return (
//     <div className='container mb-5 mt-5' id='skills'>
//       <h1 className='my-5'>Skills</h1>
//       <div className='row gx-4 mt-5 pt-5 pb-3 boxShadowDes'>
//         <div className='skill col-12 col-md-5 col-lg-5 offset-lg-1'>HTML</div>
//         <div className='skill col-12 col-md-5 col-lg-5'>CSS</div>
//         <div className='skill col-12 col-md-5 col-lg-5 offset-lg-1'>JavaScript</div>
//         <div className='skill col-12 col-md-5 col-lg-5' data-aos="flip-left">React</div>
//         <div className='skill col-12 col-md-5 col-lg-5 offset-lg-1'>Express</div>
//         <div className='skill col-12 col-md-5 col-lg-5'>Node</div>
//         <div className='skill col-12 col-md-5 col-lg-5 offset-lg-1'>MONGODB</div>
//         <div className='skill col-12 col-md-5 col-lg-5'>RESTful APIs</div>
//         <div className='skill col-12 col-md-5 col-lg-5 offset-lg-1'>Tailwind CSS</div>
//         <div className='skill col-12 col-md-5 col-lg-5'>Bootstrap</div>
//         <div className='skill col-12 col-md-5 col-lg-5 offset-lg-1'>Redux</div>
//       </div>
//     </div>
//   )
// }

// export default Skills


import React from "react";
import "./style.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiGit,
  SiGithub,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title titleLine">Skills & Tech Stack</h2>

      <div className="skills-grid">

        {/* FRONTEND */}
        <div className="skill-card">
          <h3>Frontend</h3>
          <div className="skill-tags">
            <span><SiHtml5 className="html"/> HTML</span>
            <span><SiCss3 className="css"/> CSS</span>
            <span><SiJavascript className="javascript"/> JavaScript</span>
            <span><SiReact className="react"/> React</span>
            <span><SiTailwindcss className="tailwind"/> Tailwind</span>
            <span><SiBootstrap className="bootstrap"/> Bootstrap</span>
          </div>
        </div>

        {/* BACKEND */}
        <div className="skill-card">
          <h3>Backend</h3>
          <div className="skill-tags">
            <span><SiNodedotjs className="node"/> Node.js</span>
            <span><SiExpress className="express"/> Express</span>
            <span><SiRedux className="redux"/> Redux</span>
            <span>REST APIs</span>
          </div>
        </div>

        {/* DATABASE & TOOLS */}
        <div className="skill-card">
          <h3>Database & Tools</h3>
          <div className="skill-tags">
            <span><SiMongodb className="mongo"/> MongoDB</span>
            <span><SiGit className="git"/> Git</span>
            <span><SiGithub className="github"/> GitHub</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
