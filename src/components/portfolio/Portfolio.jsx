import React from "react";
import "./portfolio.css";
import projects from "./data";
const Portfolio = () => {
  return (
    <section id="portfolio">
      {" "}
      <h5>What I've Built</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {projects.map((project)=>(<article className="project">
          <div className="project__image">
            <img src={project.img} alt={project.name} width="20%" height="300px" />
           
          </div>
          <h5 className="organisation">{project.name} </h5>
          <small className="project__detail">{project.area}</small>
          <a
            href={project.repo}
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Repo
          </a>
          <a
            href={project.demo}
            target="_blank"
            className="project-link"
            rel="noreferrer"
          >
            Demo
          </a>
        </article>)
        )}
        
      </div>
    </section>
  );
};

export default Portfolio;
