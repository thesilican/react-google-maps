import React, { useState, useEffect } from "react";
import { Map, Marker } from "../../src";

export default function RemovingMarkers() {
  const [show, setShow] = useState(true);
  return (
    <div className="map">
      <Map>{show && <Marker onClick={() => setShow(false)} />}</Map>
    </div>
  );
}
