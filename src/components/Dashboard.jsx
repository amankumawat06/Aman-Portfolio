import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section" id="about">
      {/* ABOUT HEADING */}
      <div className="about-heading">
        <h2 className="titleLine">About</h2>
        {/* <div className="about-line"></div> */}
      </div>

      {/* HERO CONTENT */}
      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-left">
          <span className="hero-badge">👋 Hii, I'm Aman kumawat</span>

          <h1 className="hero-title">
            Full Stack <span>Developer</span>
          </h1>

          <p className="hero-subtitle">
            I'm a BCA graduate. Currently, I'm working as a Full stack developer Intern at webMobi360 <br />
            <div
              className="knowMore mt-2"
              // onClick={() => navigate("/moreAboutMe")}
            >
              <Link to="/moreAboutMe" className="knowMore-link" target="_blank" rel="noopener noreferrer">
                know more About me...
              </Link>
            </div>
          </p>

          <div className="hero-skills">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express</span>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Panel */}
        <div className="hero-right">
          <div className="image-glow"></div>
          <img
            src="../Images/selfImg.png"
            alt="Aman Kumawat"
            className="hero-image"
          />
        </div>
      </div>
      <div className="socialIcons d-flex justify-content-center align-items-center">
        <a href="https://www.instagram.com/amankmwt_06/?next=%2F&hl=en" target="_blank" className="icon insta"> 
          <FaInstagram className="social-icon instai" /> 
        </a>
        <a href="#" target="_blank" className="icon telegram"> 
          <FaTelegram className="social-icon Tele"/> 
        </a>
        <a href="https://www.linkedin.com/in/aman-kumawat-8b3aaa343/" target="_blank" className="icon linkedin"> 
          <FaLinkedin className="social-icon lin" /> 
        </a>
        <a href="https://github.com/amankumawat06?tab=repositories" target="_blank" className="icon github"> 
          <FaGithub className="social-icon github"/> 
        </a>
      </div>
    </section>
  );
};

export default Dashboard;
