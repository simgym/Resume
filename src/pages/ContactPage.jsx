import linkedin from "../assets/linkedin.jpg";
import mail from "../assets/mail.jpg";
import location from "../assets/location.jpg";
import phone from "../assets/phone.jpg";
import github from "../assets/github.jpg";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <main className="contact-container">
        <h1>Contact</h1>
        <div className="contact-row">
          <div className="contact-item-container">
            <h2>
              <img src={mail} />
            </h2>
            <p>adityaarya272004@gmail.com</p>
          </div>
          <div className="contact-item-row">
            <h2>
              <img src={linkedin} />
            </h2>
            <a
              href="https://linkedin.com/in/adityaarya2004"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/adityaarya2004
            </a>
          </div>
        </div>
        <div className="contact-row">
          <div className="contact-item-container">
            <h2>
              <img src={phone} />
            </h2>
            <p>7834948463</p>
          </div>
          <div className="contact-item-row">
            <h2>
              <img src={location} />
            </h2>
            <p>New Delhi, India</p>
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
        </div>
      </main>
    </>
  );
};

export default ContactPage;
