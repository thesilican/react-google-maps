import React, { useState, useEffect } from "react";
import { Map, Marker } from "../../src";

export default function RemovingMarkers() {
  const [show, setShow] = useState(true);
  return <Map className={"map"}>{show && <Marker title="Marker 1" />}</Map>;
}
