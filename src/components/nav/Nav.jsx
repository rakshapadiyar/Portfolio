import React from "react";
import "./nav.css";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BiSolidCertification } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { FaMessage } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

const Nav = () => {
  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (
        e.message ===
        "ResizeObserver loop completed with undelivered notifications."
      ) {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Home"
        data-tooltip-place="top"
        href="#header"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <IoMdHome className="nav-icons" />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="About Me"
        data-tooltip-place="top"
      >
        <FaUser className="nav-icons" />
      </a>

      <a
        href="#certifications"
        onClick={() => setActiveNav("#certifications")}
        className={activeNav === "#certifications" ? "active" : ""}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Certifications"
        data-tooltip-place="bottom"
      >
        <BiSolidCertification className="nav-icons" />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Skills"
        data-tooltip-place="top"
      >
        <GiSkills className="nav-icons" />
      </a>

      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Projects"
        data-tooltip-place="top"
      >
        <GrProjects className="nav-icons" />
      </a>
      <a
        href="#contacts"
        onClick={() => setActiveNav("#contacts")}
        className={activeNav === "#contacts" ? "active" : ""}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Contact"
        data-tooltip-place="bottom"
      >
        <FaMessage className="nav-icons" />
      </a>

      <Tooltip id="my-tooltip" className="tooltip" />
    </nav>
  );
};

export default Nav;
