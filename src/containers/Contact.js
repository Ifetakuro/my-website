import "../styles/containers/contact.scss";

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <section className="contact">
      <h2 className="section-heading" id="contact">
        Contact me
      </h2>

      <div>
        <p className="contact-text">
          Whether you have a project in mind, want to collaborate, or simply
          want to talk about the newest IT trends, send an email to{" "}
          <span className="cta">oluwafisayotakuro@gmail.com</span> or contact me
          on{" "}
          <a
            href="https://www.linkedin.com/in/oluwafisayo-takuro"
            target="_blank"
            rel="noreferrer"
            className="cta"
          >
            LinkedIn
          </a>
        </p>
        <h3 className="closing-remark">Let's bring your vision to life!</h3>
        <p className="copyright">Oluwafisayo Takuro © {year}</p>
      </div>
    </section>
  );
};

export default Contact;
