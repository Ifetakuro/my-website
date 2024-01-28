import "../styles/components/projectCard.scss";
import CustomButton from "./CustomButton";

const ProjectCard = ({ image, imageName, title, info, to }) => {
  return (
    <div className="project-card">
      <img src={image} alt={imageName} />
      <div>
        <div className="title-div">
          <h3>{title}</h3>
          <span />
        </div>
        <p>{info}</p>
        <CustomButton>
          <a href={to} target="_blank" rel="noreferrer">
            Look it up
          </a>
        </CustomButton>
      </div>
    </div>
  );
};

export default ProjectCard;
