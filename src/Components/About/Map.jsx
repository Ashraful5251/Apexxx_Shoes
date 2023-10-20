import React from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

const Map = withGoogleMap((props) => (
  <GoogleMap
    defaultCenter={{ lat: 0, lng: 0 }} // Set your initial center
    defaultZoom={5} // Set your initial zoom level
  >
    {props.children}
  </GoogleMap>
));

export default Map;
