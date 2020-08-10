import React from "react";
import { Map, Marker } from "../../src";

export default function Basic() {
  return (
    <>
      <Map className={"map"}>
        <Marker title="Marker 1" />
        <Marker
          position={{
            lat: 37.8,
            lng: -122.4,
          }}
          title="Marker 2"
        />
      </Map>
    </>
  );
}
