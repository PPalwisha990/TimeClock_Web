export const List = ({ dataArray, style, onItemPress, horizontal }) => {
  let horizontalStyle = {
    overflowX: "scroll",
    display: "flex",
    flexDirection: "row",
    width: 200,
  };
  let verticalStyle = {
    overflowY: "scroll",
    height: 300,
  };
  return (
    <div className={horizontal ? horizontalStyle : verticalStyle}>
      {dataArray.map((item) => (
        <div className={style} onClick={onItemPress(item)}>
          {item.title}
        </div>
      ))}
    </div>
  );
};
