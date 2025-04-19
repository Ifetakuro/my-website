import "../styles/containers/hero.scss";
import CustomButton from "../components/CustomButton";
import drawing from "../assets/drawing.png";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section className="hero">
      <div className="profile">
        <h2 className="section-heading">Oluwafisayo Ifeoluwa Takuro</h2>
        <p>
          Oluwafisayo is a seasoned frontend developer with a specialization in
          React, Next, Typescript and React Native. Her commitment revolves
          around ensuring optimal user experiences, marked by efficiency and
          seamlessness. With a passion for creating intuitive interfaces, she is
          dedicated to pushing the boundaries of frontend development,
          consistently delivering high-quality results.
        </p>

        <ScrollLink to="projects" smooth={true} duration={100}>
          <CustomButton>Let's Begin</CustomButton>
        </ScrollLink>
      </div>
      <img src={drawing} alt="drawing" />
    </section>
  );
};

export default Hero;
