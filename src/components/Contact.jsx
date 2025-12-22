import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaXTwitter } from "react-icons/fa6";


const contactDetails = [
  {
    number: "(+91) 9079720440",
    email: "amankumawat4507@gmail.com",
    linkedin: "Aman Kumawat",
    linkedinLink: "https://www.linkedin.com/in/aman-kumawat-8b3aaa343/",
    // twitter: "Amankumawat",
    // twitterLink : "https://twitter.com"
  },
];

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title titleLine">Contact</h2>

      {contactDetails.map((contact, idx) => (
        <div className="contact-card" key={idx}>
          
          <a href={`tel:${contact.number}`} className="contact-item">
            <FontAwesomeIcon icon={faPhone} />
            <span>{contact.number}</span>
          </a>

          <a href={`mailto:${contact.email}`} className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>{contact.email}</span>
          </a>

          <a
            href={contact.linkedinLink}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            <span>{contact.linkedin}</span>
          </a>

          {/* <a
            href={contact.twitterLink}
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FaXTwitter size={24} color="#22d3ee" />
            <span>{contact.twitter}</span>
          </a> */}

        </div>
      ))}
    </section>
  );
};

export default Contact;
