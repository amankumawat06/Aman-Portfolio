// import React from "react";
// import "./Navbar.css";
// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-md bg-body-tertiary shadow-sm py-2 sticky-top">
//       <div className="container-fluid">

//         {/* LEFT - Logo */}
//         <a className="navbar-brand fw-bold" href="#about">
//           <img src="./Images/Nav_logo.jpg" alt="Logo" className="navLogo"/>
//         </a>

//         {/* Hamburger Toggle */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navMenu"
//           aria-controls="navMenu"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* CENTER + RIGHT */}
//         <div className="collapse navbar-collapse" id="navMenu">
          
//           {/* CENTER - Menu Items */}
//           <ul className="navbar-nav mx-auto mb-2 mb-md-0 gap-3" id="NavLinks">
//             <li className="nav-item">
//               <a className="nav-link" href="#about" data-bs-dismiss="collapse">About</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#projects" data-bs-dismiss="collapse">Projects</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#skills" data-bs-dismiss="collapse">Skills</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#experience" data-bs-dismiss="collapse">Experience</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#certificates" data-bs-dismiss="collapse">Certificates</a>
//             </li>
//           </ul>

//           {/* RIGHT - Contact Button */}
//           <div className="d-flex justify-content-center">
//             <a  href="#contact" className="btn btn-outline-secondary px-4" data-bs-dismiss="collapse">
//               Contact
//             </a>
//           </div>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(false)

  const closeNavbar = () => {
    const navMenu = document.getElementById("navMenu");
    if (navMenu.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(navMenu, {
        toggle: false,
      });
      bsCollapse.hide();
    }
    setNavOpen(false)
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm py-2 sticky-top">
      <div className="container-fluid">

        <a className="navbar-brand fw-bold logo-text" href="#about" onClick={closeNavbar}>
          Aman<span>kumawat</span>
        </a>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FiX size={28} className="toggleBtnColor"/> :<FiMenu size={28} className="toggleBtnColor"/>}
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "about" ? "activeLink" : ""}`} href="#about" onClick={() => { setActiveSection("about"); closeNavbar()}}>About</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "projects" ? "activeLink" : ""}`} href="#projects" onClick={() => { setActiveSection("projects"); closeNavbar()}}>Projects</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "experience" ? "activeLink" : ""}`} href="#experience" onClick={() => { setActiveSection("experience"); closeNavbar()}}>Experience</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "skills" ? "activeLink" : ""}`} href="#skills" onClick={() => { setActiveSection("skills"); closeNavbar()}}>Skills</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "certificates" ? "activeLink" : ""}`} href="#certificates" onClick={() => { setActiveSection("certificates"); closeNavbar()}}>Certificates</a>
            </li>
          </ul>

          <div className="d-flex justify-content-center">
            <a
              href="#contact"
              className={`btn btn-outline-secondary px-4 ${activeSection === "contact" ? "activeContact" : ""}`}
              onClick={() => { setActiveSection("contact"); closeNavbar()}}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
