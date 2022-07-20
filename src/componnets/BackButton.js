import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BackButton({ onBackPress }) {
  return (
    <div>
      <FontAwesomeIcon
        icon={["fal", "chevron-left"]}
        size={"2x"}
        color="#3F3D56"
        onClick={onBackPress}
      />
    </div>
  );
}
