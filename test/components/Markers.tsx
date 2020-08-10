import React, { useState } from "react";
import { Coordinate, Map, Marker } from "../../src";

const defaultLocations = [
  {
    pos: {
      lat: 0,
      lng: 0,
    },
    name: "Joe's Pizza",
  },
  {
    pos: {
      lat: 1,
      lng: 0,
    },
    name: "John's Pizza",
  },
  {
    pos: {
      lat: 2,
      lng: 0,
    },
    name: "James's Pizza",
  },
];

export default function Markers() {
  const [locations, setLocations] = useState(defaultLocations);
  const [selected, setSelected] = useState(null as number | null);
  const [center, setCenter] = useState(
    locations[0].pos as Coordinate | undefined
  );

  const handleMarkerClick = (index: number) => {
    setSelected(index);
    setCenter(locations[index].pos);
  };

  const handleInfoClose = () => {
    setSelected(null);
  };

  return (
    <Map
      className={"map"}
      center={center}
      onClick={(m, e) => {
        setSelected(null);
        setLocations([
          ...locations,
          {
            pos: e.latLng.toJSON(),
            name: "A",
          },
        ]);
      }}
    >
      {locations.map((v, i) => (
        <Marker
          key={i}
          position={v.pos}
          infoWindow={{ title: v.name }}
          infoShown={selected === i}
          onClick={() => handleMarkerClick(i)}
          onInfoClose={handleInfoClose}
        />
      ))}
    </Map>
  );
}
