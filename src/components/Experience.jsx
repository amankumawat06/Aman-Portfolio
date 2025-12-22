import React from "react";
import "./style.css";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "WebMobi360",
    timeLine: "Oct 2024 - Present",
    desc: [
      "Contributed to real-world full-stack web applications.",
      "Developed modern, responsive UI using React.js and intergrated them into producation ready projects.",
      "Imporved UI/UX of existing production websites, enhancing usability and visual consistency.",
      "Collaborated with team using Git & GitHub, gaining hand-on experience with version control workflows.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title titleLine">Experience</h2>

      <div className="exp-list">
        {experiences.map((exp, idx) => (
          <div className="exp-item" key={idx}>
            <div className="exp-dot"></div>

            <div className="exp-card">
              <h3>{exp.title}</h3>
              <a href="https://www.webmobi360.com/" target="_blank" rel="noreferrer"  className="exp-company">{exp.company}</a>
              <span className="exp-date">{exp.timeLine}</span>

              <ul>
                {exp.desc.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
