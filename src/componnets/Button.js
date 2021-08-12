import "./Button.css";

export const Button = ({ title, onPressButton }) => {
  return (
    <div className="button-container">
      <button onClick={onPressButton} className="button-style">
        {title}
      </button>
    </div>
  );
};
