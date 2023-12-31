import linkedin from "../assets/linkedin.jpg";
import mail from "../assets/mail.jpg";
import location from "../assets/location.jpg";
import github from "../assets/github.jpg";
import { ContactUs } from "./Message";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <main className="contact-container">
        <h1 className="contact-heading">Contact</h1>
        <div className="contact-row">
          <div className="contact-item-container">
            <h2>
              <img src={mail} />
            </h2>
            <p>aditya27arya@gmail.com</p>
          </div>
          <div className="contact-item-row">
            <h2>
              <img src={linkedin} />
            </h2>
            <a
              href="https://www.linkedin.com/in/adiar24"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/adiar24
            </a>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-item-container">
            <h2>
              <img src={github} />
            </h2>
            <a
              href="https://github.com/simgym?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Github account
            </a>
          </div>
          <div className="contact-item-row">
            <h2>
              <img src={location} />
            </h2>
            <p>New Delhi, India</p>
          </div>
        </div>
        <div>
          <span>
            <ContactUs />
          </span>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
