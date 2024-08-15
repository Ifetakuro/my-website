import "../styles/containers/tech.scss";
import ProgressBar from "../components/ProgressBar";

const Technologies = () => {
  return (
    <section className="tech">
      <h2 className="section-heading" id="tech">
        Technologies
      </h2>
      <div className="progress-bars">
        <ProgressBar title={"HTML"} level={"Advanced"} progress={"72%"} />
        <ProgressBar
          title={"CSS, Sass, Bootstrap & Tailwind"}
          level={"Advanced"}
          progress={"80%"}
        />
        <ProgressBar title={"JavaScript"} level={"Advanced"} progress={"62%"} />
        <ProgressBar title={"React"} level={"Advanced"} progress={"70%"} />
        <ProgressBar
          title={"React Native"}
          level={"Regular"}
          progress={"50%"}
        />
        <ProgressBar title={"Vue"} level={"Beginner"} progress={"40%"} />
        <ProgressBar title={"Next"} level={"Advanced"} progress={"70%"} />
        <ProgressBar title={"Typescript"} level={"Regular"} progress={"50%"} />
      </div>
      <div className="skills">
        <h3>Additional technologies and skills</h3>
        <ul>
          <li>Git</li>
          <li>Figma</li>
          <li>Agile</li>
          <li>Jira</li>
          <li>Project management</li>
          <li>Accounting</li>
          <li>Documentation</li>
          <li>Collaboration</li>
        </ul>
      </div>
    </section>
  );
};

export default Technologies;
