import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { SearchInput } from "./TextInput";

export const Picker = ({ defaultValue, title, key }) => {
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
    <div className={styles.column} key={key} onClick={onToggle}>
      <div className={styles.container}>
        <div>{defaultValue}</div>
        <div className={styles.buttonContainer}>
          <FontAwesomeIcon
            icon={["fal", "chevron-down"]}
            size={"1x"}
            color="#3F3D56"
          />
        </div>
      </div>
      <div className={styles.modal}>
        <Modal
          title={
            <div style={{ width: "90%" }}>
              <SearchInput style={styles.search} placeholder={title} />
            </div>
          }
          visible={isModalVisible}
          footer={null}
          onCancel={onToggle}
          width={250}
          style={{ position: "fixed", left: 400, top: 300 }}
          bodyStyle={{ overflowY: "scroll", height: 220 }}
          mask={false}
        >
          <div>
            {data.map((item) => {
              return <p>{item.text}</p>;
            })}
          </div>
        </Modal>
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    //border: "solid 1px #E3E3E3",
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
  search: {
    display: "flex",
    paddingBottom: 20,
    alignSelf: "flex-start",
  },
});
