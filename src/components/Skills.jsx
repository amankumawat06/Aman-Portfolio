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
  SiCloudinary,
} from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title titleLine">Skills & Tech Stack</h2>

      <div className="skills-grid">

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

        <div className="skill-card">
          <h3>Backend</h3>
          <div className="skill-tags">
            <span><SiNodedotjs className="node"/> Node.js</span>
            <span><SiExpress className="express"/> Express</span>
            <span><SiRedux className="redux"/> Redux</span>
            <span>REST APIs</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Database & Tools</h3>
          <div className="skill-tags">
            <span><SiMongodb className="mongo"/> MongoDB</span>
            <span><SiGit className="git"/> Git</span>
            <span><SiGithub className="github"/> GitHub</span>
          </div>
        </div>

        <div className="skill-card">
          <h3>Cloud Services</h3>
          <div className="skill-tags">
            <span><SiCloudinary className="cloudinary" /> Cloudinary</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
