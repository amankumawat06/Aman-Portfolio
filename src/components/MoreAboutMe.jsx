import React from "react";

const MoreAboutMe = () => {
  return (
    <div className="container p-5 m-5 mt-2 moreAboutme">
      <h3>Brief Introduction</h3>

      <p className="text-start pt-5 mt-3 mb-4">
        <span className="hero-badge">👋 Hii, I'm Aman kumawat</span>

        <h1 className="hero-title">
          Full Stack <span>Developer</span>
        </h1>
        <p className="hero-subtitle">
          I completed my bachlore's in computer application(BCA) from Apex
          University, jaipur with GPA of 7.3. During my studies, i built strong
          fundamentals in programmning and web development.
          <p className="hero-subtitle pt-4">
            I have also completed a Full Stack Development course from Apna
            college. where I worked on both frontend and backend deveopment.
            <p className="hero-subtitle pt-4">
              In frontend I worked with HTML, CSS, JavaScript and framework of
              css and javascript are Bootstrap,Tailwind CSS and library of
              Javascript is Reat.js. And in the backend I worked with Node.js,
              Express.js, REST API's and I worked on Database. Database was
              MongoDB.I also learned about Git and Github and know more how to
              deploy a local project to a real website.
            <div className="workSkills mt-4"> 
              <h4>Frontend Skills : </h4>
              <div className="hero-skills">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React Js</span>
                <span>Bootstrap</span>
                <span>Tailwind CSS</span>
              </div>
            </div>

            <div className="workSkills mt-4"> 
              <h4>Backend Skills : </h4>
              <div className="hero-skills">
                <span>Node JS</span>
                <span>Express</span>
                <span>Redux</span>
                <span>REST APIs</span>
              </div>
            </div>
            <div className="workSkills mt-4"> 
              <h4>Database : </h4>
              <div className="hero-skills">
                <span>Mongo DB</span>
              </div>
            </div>
            </p>
          </p>
          <p className="hero-subtitle pt-2">
            Currently, I am working as a Full Stack developer Intern at
            WebMobi360.Here, I am learning how the real wrold projects are
            built, maintained and deployed. I collaborate with the team to
            develop scalable, efficient, and user-friendly web applications
          </p>
        </p>
      </p>
    </div>
  );
};

export default MoreAboutMe;
