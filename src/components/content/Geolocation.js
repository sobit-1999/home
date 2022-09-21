import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React from "react";

export default function Geolocation() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBmOMV0CZYN6w8RcBb74HZxP4LVst0NszA",
  });
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <GoogleMap
      zoom={10}
      center={{
        lat: 44,
        lng: -80,
      }}
      mapContainerClassName="map-container"
    >
      <Marker
        position={{
          lat: 44,
          lng: -80,
        }}
      />
    </GoogleMap>
  );
}

function Map() {
 
}
