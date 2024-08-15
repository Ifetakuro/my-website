import React from "react";
import ProjectCard from "../components/ProjectCard";

import "../styles/containers/projects.scss";
import { projectsData } from "../data";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="section-heading" id="projects">
        Projects
      </h2>

      <div className="project-cards">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
