import React, { useState } from "react";
import { Map, Marker } from "../../src";

export default function MapProperties() {
  const [zoom, setZoom] = useState(100);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  return (
    <>
      <Map className={"map"} zoom={zoom} center={{ lat, lng }}>
        <Marker title="Marker 1" />
        <Marker
          position={{
            lat: 37.8,
            lng: -122.4,
          }}
          title="Marker 2"
        />
      </Map>
      <input
        type="range"
        min={0}
        max={8}
        value={zoom}
        onChange={(e) => setZoom(parseInt(e.target.value, 10))}
      />{" "}
      <input
        type="range"
        min={0}
        max={8}
        value={lat}
        onChange={(e) => setLat(parseInt(e.target.value, 10))}
      />{" "}
      <input
        type="range"
        min={0}
        max={8}
        value={lng}
        onChange={(e) => setLng(parseInt(e.target.value, 10))}
      />
    </>
  );
}
