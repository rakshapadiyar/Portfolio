import React from "react";
import "./footer.css";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#certifications">Certifications</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://instagram.com/raksha.padiyar"
          target="_blank"
          rel="noreferrer"
          data-tooltip-id="socials-tooltip"
          data-tooltip-content="Instagram"
          data-tooltip-place="top"
        >
          <FaSquareInstagram className="socials-icon" />
        </a>
        <a
          href="https://www.facebook.com/rakshapadiyar10/"
          target="_blank"
          rel="noreferrer"
          data-tooltip-id="socials-tooltip"
          data-tooltip-content="Facebook"
          data-tooltip-place="top"
        >
          <FaFacebook className="socials-icon" />
        </a>
        <a
          href="https://twitter.com/rakshapadiyar10"
          target="_blank"
          rel="noreferrer"
          data-tooltip-id="socials-tooltip"
          data-tooltip-content="Twitter"
          data-tooltip-place="top"
        >
          <FaTwitter className="socials-icon" />
        </a>
        <Tooltip id="socials-tooltip" />
      </div>
      <div className="footer__copyright">
        <small>
          Made with <FaHeart className="heart" /> by Raksha
        </small>
      </div>
    </footer>
  );
};

export default Footer;
