import React from "react";
import ProjectCard from "../components/ProjectCard";

import "../styles/containers/projects.scss";
import { projectsData } from "../data";

const Projects = () => {
  // Slice the data
  const freelanceProjects = projectsData.slice(0, 3);
  const learningProjects = projectsData.slice(3);

  return (
    <section className="projects">
      <h2 className="section-heading" id="projects">
        Projects
      </h2>

      <div className="project-category">
        <h3 className="project-subheading">🛠 Featured Freelance Projects</h3>
        <p className="project-description">
          A selection of projects where I either took sole responsibility for
          the frontend development, contributed significantly to the development
          process, or initiated the build from scratch.
        </p>
        <div className="project-cards">
          {freelanceProjects.map((project, index) => (
            <ProjectCard key={`freelance-${index}`} {...project} />
          ))}
        </div>
      </div>

      <div className="project-category" style={{ marginTop: "5rem" }}>
        <h3 className="project-subheading">📚 Learning Purpose Projects</h3>
        <div className="project-cards">
          {learningProjects.map((project, index) => (
            <ProjectCard key={`learning-${index}`} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
