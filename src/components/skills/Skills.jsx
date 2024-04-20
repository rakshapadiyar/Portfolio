import React from "react";
import "../skills/skills.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What I Know</h5>
      <h2>My Skills</h2>
      <div className="container container__skills">
        <div className="frontend">
          <h3>Frontend Skills</h3>
          <div className="skills_content">
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>Tailwind</h4>
            </article>
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>React</h4>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND */}
        <div className="backend">
          <h3>Backend Skills</h3>
          <div className="skills_content">
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>PHP</h4>
            </article>
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>MySQL</h4>
            </article>
          </div>
        </div>

        {/* END OF BACKEND */}
        <div className="cloud">
          <h3>Cloud Skills</h3>
          <div className="skills_content">
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>GCP</h4>
            </article>
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>AWS</h4>
            </article>
          </div>
        </div>

        {/* end of cloud */}
        <div className="other-tools">
          <h3>Other Skills</h3>
          <div className="skills_content">
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>Git</h4>
            </article>
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>GitHub</h4>
            </article>
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>Java</h4>
            </article>
            <article className="skills_details">
              {" "}
              <BsFillPatchCheckFill className="skills_details-icon" />
              <h4>Python</h4>
            </article>
          </div>
        </div>

        {/* end of other tools */}
      </div>
    </section>
  );
};

export default Skills;
