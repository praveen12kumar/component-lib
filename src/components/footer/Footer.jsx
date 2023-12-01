import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./index.css";
import "../../css/main.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="your-info">
        <h4>{<FaRegCopyright />} | 2023 | Praveen | UI Component Library</h4>
      </div>
      <div className="contact-icons">
        <Link to="https://github.com/praveen12kumar/" className="link">
          <FaGithub />
        </Link>
        <Link to="https://mail.google.com/mail/u/0/#inbox" className="link">
          <MdEmail />
        </Link>
        <Link to="https://www.instagram.com/kumarpraveen1/" className="link">
          <FaInstagram />
        </Link>
        <Link
          to="https://www.linkedin.com/in/praveen-kumar-88644bbb/"
          className="link"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
