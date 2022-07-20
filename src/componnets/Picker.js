import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Select } from "antd";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { SearchInput } from "./TextInput";

const { Option } = Select;

export const Picker = ({ defaultValue, disabled }) => {
  const styles = useStyle();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onToggle = () => {
    setIsModalVisible(!isModalVisible);
  };

  const data = [
    { text: "Some contents" },
    { text: "Some contents" },
    { text: "Some contents" },
    { text: "Some contents" },
    { text: "Some contents" },
    { text: "Some contents" },
    { text: "Some contents" },
    { text: "Some contents" },
  ];

  return (
    <div className={styles.column}>
      <Select
        disabled={disabled}
        style={{ width: "100%" }}
        defaultValue={defaultValue}
        className="selectdiv"
        onChange={() => console.log("onChange")}
      >
        {data?.map((item) => {
          return <Option value={item.text}>{item.text}</Option>;
        })}
      </Select>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: 10,
  },
  buttonContainer: {
    alignSelf: "flex-end",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
