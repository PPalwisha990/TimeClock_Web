import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BackButton() {
  return (
    <div>
      <FontAwesomeIcon
        icon={["fal", "chevron-left"]}
        size={24}
        color="#3F3D56"
      />
    </div>
  );
}
