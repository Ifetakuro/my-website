import ProjectCard from "../components/ProjectCard";
import gpt from "../assets/gpt.png";
import adminPanel from "../assets/admin-panel.png";
import commerceProfile from "../assets/commerceProfile.png";
import statschool from "../assets/statschool.png";
import irokoTv from "../assets/irokoTv.png";
import "../styles/containers/projects.scss";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="section-heading" id="projects">
        Projects
      </h2>

      <div className="project-cards">
        <ProjectCard
          image={gpt}
          imageName={"gpt image"}
          title={"GPT3"}
          info={
            "A static landing page built with react showcasing the capabilities of GPT-3 by OpenAI"
          }
          to="https://new-gpt-3.netlify.app"
        />
        <ProjectCard
          image={adminPanel}
          alt={"admin panel"}
          title={"Admin portal"}
          info={
            "An interactive admin portal built with react, to allow authorised users to carry out activities"
          }
          to="https://admin-panel-kohl-delta.vercel.app/tickets"
        />
        <ProjectCard
          image={statschool}
          alt={"statschool"}
          title={"Statschool"}
          info={
            "A static web page built with html, css and javascript to show the statistics of students in a tech school"
          }
          to="https://stat-school.netlify.app/"
        />
        <ProjectCard
          image={commerceProfile}
          alt={"commerce profile"}
          title={"Commerce profile"}
          info={
            "A e-commerce web application built with react to allow users make orders"
          }
          to="https://ecommerceprofile.netlify.app"
        />
        <ProjectCard
          image={irokoTv}
          alt={"Iroko tv"}
          title={"Iroko tv"}
          info={
            "A replica of a popular web built with html, css and javascript"
          }
          to="https://my-iroko-tv.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
