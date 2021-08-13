import { ReloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import logo from "../images/kiosklogo.png";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div>
        <Button
          type="primary"
          shape="circle"
          icon={<ReloadOutlined />}
          size={"large"}
          className="left-button"
        />
      </div>
      <div>
        <img src={logo} className="logo-header" alt="logo" />
      </div>
      <div />
    </div>
  );
};
