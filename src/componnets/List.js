import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const List = ({
  dataArray,
  contentStyle,
  horizontal,
  renderItems,
  width,
  height,
  onIconPress,
  showIconMore,
}) => {
  return (
    <div
      className={
        contentStyle ? contentStyle : { paddingLeft: 1, paddingRight: 1 }
      }
      style={
        horizontal
          ? {
              overflowX: "scroll",
              width,
              display: "flex",
              flexDirection: "row",
              overflow: "auto",
              alignItems: "center",
            }
          : { overflowY: "scroll", height }
      }
    >
      {showIconMore
        ? dataArray.map((item, index) => renderItems(item, index)).slice(0, 2)
        : dataArray.map((item, index) => renderItems(item, index))}
      {showIconMore && dataArray.length > 2 ? (
        <div style={{ paddingLeft: 10 }}>
          <FontAwesomeIcon
            icon={["fal", "chevron-right"]}
            size={"3x"}
            color="#778392"
            onClick={onIconPress}
          />
        </div>
      ) : null}
    </div>
  );
};
