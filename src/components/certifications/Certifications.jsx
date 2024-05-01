import React from "react";
import "./certifications.css";
import certifications from "./data";

const Certifications = () => {
  return (
    <section id="certifications">
      {" "}
      <h5>My Validated Expertise</h5>
      <h2>Professional Certifications</h2>
      <div className="container certifications__container">
        {certifications.map((certif) => (
          <article className="certificate">
            <div className="certif__image">
              <img src={certif.image} alt={certif.alt} />
            </div>
            <h5 className="organisation">{certif.organization}</h5>
            <small className="certificate__detail">
              {certif.certificationName}
            </small>
            <a
              href={certif.href}
              target="_blank"
              className="certificate-link"
              rel="noreferrer"
            >
              Validate
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
