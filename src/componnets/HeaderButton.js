import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";

const HeaderButton = ({ icon, onPress, className, btnStyle }) => {
  return (
    <div className={className}>
      <Button
        className={btnStyle}
        type="primary"
        shape="circle"
        icon={
          <FontAwesomeIcon icon={["fal", icon]} size={24} color="#FFFFFF" />
        }
        size={"medium"}
        onClick={onPress}
      />
    </div>
  );
};

export default HeaderButton;
