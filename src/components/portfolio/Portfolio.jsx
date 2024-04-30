import React from "react";
import "./portfolio.css";
import qr from "../../assets/qr.png";
import gcp from "../../assets/gcloud.png";
import staticServe from "../../assets/static-serve.png";
import portfolio from "../../assets/portfolio.png";
import slack from "../../assets/slack.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      {" "}
      <h5>What I've Built</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        <article className="project">
          <div className="project__image">
            <img src={staticServe} alt="gcp" height="100%" />
          </div>
          <h5 className="organisation">Static Serve </h5>
          <small className="project__detail">Cloud Project</small>
          <a
            href="https://github.com/rakshapadiyar/Static-Serve"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Repo
          </a>
          <a
            href="https://www.youtube.com/shorts/uY2q-SvgM8E?feature=share"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Demo
          </a>
        </article>

        <article className="project">
          <div className="project__image">
            <img src={portfolio} alt="react" height="100%" />
          </div>
          <h5 className="organisation">Portfolio</h5>
          <small className="project__detail">FrontEnd Project</small>
          <a
            href="https://github.com/rakshapadiyar/Portfolio"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Repo
          </a>
          <a
            href="https://rakshapadiyar.github.io/Portfolio/"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Demo
          </a>
        </article>

        <article className="project">
          <div className="project__image">
            <img src={slack} alt="gcp" />
          </div>
          <h5 className="organisation"> GitHub-Slack Interation </h5>
          <small className="project__detail">Cloud Project</small>
          <a
            href="https://github.com/rakshapadiyar/GitHub-Slack-Integration"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Repo
          </a>
          <a
            href="https://www.youtube.com/watch?v=8BDUfGBvma8"
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Demo
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
