import { LoadingOutlined } from "@ant-design/icons";
import "./Button.css";

export const Button = ({ title, onPressButton, loading }) => {
  return (
    <div className="button-container">
      {loading ? (
        <div>
          <LoadingOutlined className="icon-style" />
        </div>
      ) : (
        <div />
      )}
      <div>
        <button onClick={onPressButton} className="button-style">
          {title}
        </button>
      </div>
    </div>
  );
};
