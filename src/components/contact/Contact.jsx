import React from "react";
import "../contact/contact.css";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8hq7b37",
      "template_7leav2k",
      form.current,
      "cmmRqxobanS9LUi_9"
    );
    e.target.reset();
    //.then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };

  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rakshapadiyar100@gmail.com</h5>

            <a href="mailto:rakshapadiyar100@gmail.com">Send a mail</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>@rakshapadiyar</h5>
            <a
              href="https:www.linkedin.com/rakshapadiyar"
              target="_blank"
              rel="noreferrer"
            >
              DM on LinkedIn
            </a>
          </article>
          <article className="contact__option">
            <FaTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>@rakshapadiyar10</h5>
            <a
              href="https://twitter.com/rakshapadiyar10"
              target="_blank"
              rel="noreferrer"
            >
              DM on Twitter
            </a>
          </article>
        </div>

        {/* end of contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email ID"
            required
          ></input>
          <textarea
            name="message"
            rows="8"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;