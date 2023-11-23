import React from "react";
import "./certifications.css";
import meta from "../../assets/meta.png";
import gcp from "../../assets/gcloud.png";
import aws from "../../assets/aws.png";

const Certifications = () => {
  return (
    <section id="certifications">
      {" "}
      <h5>My Validated Expertise</h5>
      <h2>Professional Certifications</h2>
      <div className="container certifications__container">
        <article className="certificate">
          <div className="certif__image">
            <img src={meta} alt="meta" />
          </div>
          <h5 className="organisation">Meta </h5>
          <small className="certificate__detail">
            Meta Front End Professional Certificate
          </small>
          <a
            href="https://www.credly.com/org/facebook-blueprint/badge/meta-front-end-developer-certificate"
            target="_blank"
            className="certificate-link"
            rel="noreferrer"
          >
            Validate
          </a>
        </article>

        <article className="certificate">
          <div className="certif__image">
            <img src={gcp} alt="gcp" />
          </div>
          <h5 className="organisation">Google Cloud </h5>
          <small className="certificate__detail">
            Google Associate Cloud Engineer Certificate
          </small>
          <a
            href="https://www.credly.com/org/facebook-blueprint/badge/meta-front-end-developer-certificate"
            target="_blank"
            className="certificate-link"
            rel="noreferrer"
          >
            Validate
          </a>
        </article>

        <article className="certificate">
          <div className="certif__image">
            <img src={aws} alt="aws" />
          </div>
          <h5 className="organisation">AWS </h5>
          <small className="certificate__detail">
            AWS Certified Solutions Architect Associate
          </small>
          <a
            href="https://www.credly.com/badges/841b90bf-f9c9-4b4c-93c8-2351c9373259"
            target="_blank"
            className="certificate-link"
            rel="noreferrer"
          >
            Validate
          </a>
        </article>
      </div>
    </section>
  );
};

export default Certifications;
