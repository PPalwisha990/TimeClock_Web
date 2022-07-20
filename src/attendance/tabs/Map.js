import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LocationPin = ({ text }) => (
  <div>
    <FontAwesomeIcon icon={["fal", "map-marker-alt"]} size={"1x"} color="red" />
    <p>{text}</p>
  </div>
);

const Map = () => {
  const [center, setCenter] = useState({
    lat: 59.95,
    lng: 30.33,
  });
  const [zoom, setZoom] = useState(11);
  const styles = useStyle();
  return (
    <div className={styles.map}>
      <GoogleMapReact
        //bootstrapURLKeys={{ key: "AIzaSyBe6P5BsunOs4i0k9vqdy3zEx--0NzPg2U" }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        <LocationPin lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

const useStyle = createUseStyles({
  map: {
    height: "270px",
    width: "100%",
    border: "solid 1px #d8d8d8",
  },
});

export default Map;
