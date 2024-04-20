import React from "react";
import "./portfolio.css";
import qr from "../../assets/qr.png";
import gcp from "../../assets/gcloud.png";
import factbase from "../../assets/factbase.png";
import chitchat from "../../assets/chitchat.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      {" "}
      <h5>What I've Built</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        <article className="project">
          <div className="project__image">
            <img src={factbase} alt="gcp" />
          </div>
          <h5 className="organisation">FactBase </h5>
          <small className="project__detail">Frontend Project</small>
          <a
            href="https://github.com/rakshapadiyar/Factbase"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Repo
          </a>
        </article>

        <article className="project">
          <div className="project__image">
            <img src={chitchat} alt="gcp" />
          </div>
          <h5 className="organisation">ChitChat</h5>
          <small className="project__detail">Backend Project</small>
          <a
            href="https://github.com/rakshapadiyar/ChitChat"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Repo
          </a>
        </article>

        <article className="project">
          <div className="project__image">
            <img src={gcp} alt="aws" />
          </div>
          <h5 className="organisation"> IaaS Project </h5>
          <small className="project__detail">Cloud Project</small>
          <a
            href="https://github.com/rakshapadiyar/GCP-Cloud-Project"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Repo
          </a>
        </article>
        <article className="project">
          <div className="project__image">
            <img src={qr} alt="gcp" />
          </div>
          <h5 className="organisation">FactBase </h5>
          <small className="project__detail">
            Built with React.js and SupaBase
          </small>
          <a
            href="https://www.credly.com/org/facebook-blueprint/badge/meta-front-end-developer-project"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Repo
          </a>
        </article>

        <article className="project">
          <div className="project__image">
            <img src={qr} alt="gcp" />
          </div>
          <h5 className="organisation">ChitChat</h5>
          <small className="project__detail">
            Built with Node.js, Socket.io, Express.js
          </small>
          <a
            href="https://www.credential.net/fba53115-5924-4844-ab5b-4dff8f8d173f"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Repo
          </a>
        </article>

        <article className="project">
          <div className="project__image">
            <img src={qr} alt="qr code" />
          </div>
          <h5 className="organisation"> Dynamic QR Code Generator </h5>
          <small className="project__detail">Internship Project</small>
          <a
            href="https://github.com/rakshapadiyar/Dynamic-QR-Code-Generator"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Repo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
