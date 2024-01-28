import "../styles/components/customButton.scss";

const CustomButton = ({ children, ...props }) => {
  return (
    <button className="custom-btn" {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
