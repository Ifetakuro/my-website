import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Github, LinkedIn } from "../assets/svg";

const Navbar = () => {
  return (
    <>
      {" "}
      <nav className="main-nav">
        <ul>
          <li>
            <ScrollLink to="projects" smooth={true} duration={100}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="tech" smooth={true} duration={100}>
              Technologies
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={100}>
              Contact me
            </ScrollLink>
          </li>
        </ul>
      </nav>
      <nav className="socials-nav">
        <ul>
          <li>
            <a
              href="https://github.com/Ifetakuro"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/oluwafisayo-takuro"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
