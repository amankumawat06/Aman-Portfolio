import React from "react";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Certificates from "./Certificates";
import Experience from "./Experience";
import "./style.css"

const HomePage = () => {
  return (
    <div id="homeContainer">
      <Dashboard />
      <Projects />
      <Experience />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  );
};

export default HomePage;
