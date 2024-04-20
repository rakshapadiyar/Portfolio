import React from "react";
import "./about.css";
import ME from "../../assets/cartoon-about-transparent.png";

import { RiComputerFill } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa";
import { BiSolidCertification } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className=" container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} className="image__class" alt="me"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Education</h5>
              <small>BE in Computer Science</small>
            </article>

            <article className="about__card">
              <RiComputerFill className="about__icon" />
              <h5>Expertise</h5>
              <small>Full Stack Web Dev</small>
            </article>

            <article className="about__card">
              <BiSolidCertification className="about__icon" />
              <h5>Interests</h5>
              <small>Cloud, LeetCoding, Yoga</small>
            </article>
          </div>

          <p>
            I'm Raksha Padiyar, a Software Engineer based in India, specializing
            in frontend development with a keen interest in Cloud Computing. I
            first became interested in software development during my college's
            first-year summer break when I started building a "just for fun"
            Library Management System using C programming. Following this
            ignition, I embarked on a journey to learn full-stack development.{" "}
            <br />
            <br />
            Subsequently, during my first job at Sony, I took part in "AWS
            GameDay" organized by Amazon Web Services, and my exploration
            extended to cloud technologies, which I pursued through various
            avenues, including a cloud support job at AWS, cloud career
            enhancement program at Google and several cloud certifications.{" "}
            <br />
            <br />I love problem-solving, and I try to keep my LeetCode calendar
            lit like a Christmas tree. Beyond cloud and coding, I am a big fan
            of sitcoms and medical dramas. I am also a devoted practitioner of
            Yoga, finding balance and focus on and off the mat.
          </p>
          <a href="#contacts" className="btn btn-primary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
