import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/profiletransparent.png";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello,</h5>
        <h1>I'm Raksha</h1>
        <h5 className="text-light">A Software Engineer.</h5>
        <CTA />
        <HeaderSocials />
        <div id="mepic" className="me">
          <img src={ME} alt="My Profile" />
        </div>

        <a href="#portfolio" className="scroll__down">
          Project Portfolio
        </a>
      </div>
    </header>
  );
};

export default Header;
