import React from "react";
// import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/drive/folders/1eiztlX1CjrHKKL_ywnLvdQnb9ZNAZWAz?usp=sharing"
        download
        className="btn"
      >
        Download CV
      </a>
      <a href="#contacts" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
