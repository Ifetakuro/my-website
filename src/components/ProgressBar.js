import "../styles/components/progressBar.scss";

const ProgressBar = ({ title, level, progress }) => {
  return (
    <div className="progress-bar">
      <div className="progress-heading">
        <h4>{title}</h4>
        {/* <p>{level}</p> */}
      </div>
      <div className="progress-container">
        <span className="progress" style={{ width: progress }} />
      </div>
    </div>
  );
};

export default ProgressBar;
