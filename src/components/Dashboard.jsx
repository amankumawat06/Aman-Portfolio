import React, { useEffect, useRef } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";

const Dashboard = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1400,
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "React",
        "Node.Js",
        "Express",
        "MongoDB",
        "Cloudinary",
        "JavaScript",
        "Bootstrap",
        "Tailwind CSS",
        "CSS",
        "HTML",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero-section" id="about">
      <div className="about-heading">
        <h2 className="titleLine">About</h2>
      </div>

      <div className="hero-container">
        <div className="hero-left">
          <span className="hero-badge">👋 Hii, I'm Aman kumawat</span>

          <h1 className="hero-title">
            Full Stack <span>Developer</span>
          </h1>

          <p className="hero-subtitle">
            BCA graduate from Apex university, focused on building real wrold
            full stack applications. <br />
            <div className="knowMore mt-2">
              <Link
                to="/moreAboutMe"
                className="knowMore-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                know more about me...
              </Link>
            </div>
          </p>

          <div style={{ display: "flex", alignItems: "center" }}>
            <strong style={{color:"#CBD5F5", fontWeight:"400"}}>Technical skills - &nbsp; </strong>
            <div id="fs-h3" style={{ color: "#22d3ee" }}>
              <span ref={typedRef} className="multiple-text"></span>
            </div>
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
        <a
          href="https://www.instagram.com/amankmwt_06/?next=%2F&hl=en"
          target="_blank"
          className="icon insta"
          rel="noreferrer"
        >
          <FaInstagram className="social-icon instai" />
        </a>
        <a
          href="https://x.com/amankumawatt67"
          target="_blank"
          className="icon tweeter"
          rel="noreferrer"
        >
          <FaXTwitter className="social-icon tweeterx" />
        </a>
        <a
          href="https://www.linkedin.com/in/aman-kumawat-8b3aaa343/"
          target="_blank"
          className="icon linkedin"
          rel="noreferrer"
        >
          <FaLinkedin className="social-icon lin" />
        </a>
        <a
          href="https://github.com/amankumawat06?tab=repositories"
          target="_blank"
          className="icon github"
          rel="noreferrer"
        >
          <FaGithub className="social-icon githu" />
        </a>
      </div>
    </section>
  );
};

export default Dashboard;
