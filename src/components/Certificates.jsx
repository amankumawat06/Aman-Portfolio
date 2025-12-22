import React from "react";
import "./style.css";
import { FiEye } from "react-icons/fi";

const allCertificates = [
  {
    title: "Full Stack Development",
    image: "./Images/FullStack_Img.png",
    duration: "Jan 2025 - May 2025",
    link: "./Images/FullStack_Img.png",
  },
  {
    title: "C Programming",
    image: "./Images/CProgramming_Img.jpeg",
    duration: "March 2023 - March 2023",
    link: "./Images/CProgramming_Img.jpeg",
  },
];

const Certificates = () => {
  return (
    <section className="container certificateContainer" id="certificates">
      <div>
        <h1 className="mb-5 titleLine" style={{color:"#E5E7EB"}}>Certificates</h1>
      </div>

      {/* CERTIFICATES LIST */}
      <div className="certificates">
        {allCertificates.map((certificate, idx) => (
          <div className="certificate" key={idx}>
            <div className="d-flex justify-content-between align-items-center">
            <p className="cert-title">{certificate.title}</p>
             <a
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              className="cert-btn"
            >
              <FiEye /> 
            </a>
            </div>
            <img
              src={certificate.image}
              alt={certificate.title}
              className="cert-image"
            />

            <p className="cert-duration">{certificate.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
