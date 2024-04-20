import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials" id="social">
      <a
        href="https://linkedin.com/in/rakshapadiyar"
        target="_blank"
        rel="noreferrer"
        data-tooltip-id="socials-tooltip"
        data-tooltip-content="LinkedIn"
        data-tooltip-place="right"
      >
        <FaLinkedin className="socials-icon" />
      </a>
      <a
        href="https://github.com/rakshapadiyar"
        target="_blank"
        rel="noreferrer"
        data-tooltip-id="socials-tooltip"
        data-tooltip-content="GitHub"
        data-tooltip-place="right"
      >
        <FaGithub className="socials-icon" />
      </a>
      <a
        href="https://leetcode.com/rakshapadiyar"
        target="_blank"
        rel="noreferrer"
        data-tooltip-id="socials-tooltip"
        data-tooltip-content="LeetCode"
        data-tooltip-place="right"
      >
        <SiLeetcode className="socials-icon" />
      </a>
      {/* <a
        href="https://instagram.com/raksha.padiyar"
        target="_blank"
        data-tooltip-id="socials-tooltip"
        data-tooltip-content="Instagram"
        data-tooltip-place="right"
      >
        <FaSquareInstagram className="socials-icon" />
      </a>
      <a
        href="https://www.facebook.com/rakshapadiyar10/"
        target="_blank"
        data-tooltip-id="socials-tooltip"
        data-tooltip-content="Facebook"
        data-tooltip-place="right"
      >
        <FaFacebook className="socials-icon" />
      </a>
      <a
        href="https://twitter.com/rakshapadiyar10"
        target="_blank"
        data-tooltip-id="socials-tooltip"
        data-tooltip-content="Twitter"
        data-tooltip-place="right"
      >
        <FaTwitter className="socials-icon" />
      </a> */}

      <Tooltip id="socials-tooltip" />
    </div>
  );
};

export default HeaderSocials;
