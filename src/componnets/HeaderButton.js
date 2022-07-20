import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";

const HeaderButton = ({ icon, onPress, className, btnStyle, size }) => {
  return (
    <div className={className}>
      <Button
        className={btnStyle}
        type="primary"
        shape="circle"
        icon={
          <FontAwesomeIcon icon={["fal", icon]} size={"sm"} color="#FFFFFF" />
        }
        size={size}
        onClick={onPress}
      />
    </div>
  );
};

export default HeaderButton;
