import { google as GoogleType } from "google-maps";
import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Coordinate,
  DefaultCoordinate,
  InfoWindowType,
  MapType,
} from "../types";
import { GoogleContext } from "./Google";
import Marker from "./Marker";

// Props accessed by markers
export type MapChildProps = {
  google: GoogleType;
  map: MapType;
  infoWindow: InfoWindowType;
};
export const MapContext = React.createContext(null as MapChildProps | null);

export type MapProps = {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  placeholder?: React.ReactNode;
} & GoogleMapProps &
  GoogleMapEvents;
export type GoogleMapProps = {
  center?: Coordinate;
  zoom?: number;
};
export type GoogleMapEvents = {
  onClick?: MouseEventListener;
};

type ListenerEvent = "click";
type ListenerDict = {
  [l in ListenerEvent]: google.maps.MapsEventListener | null;
};
export type EventListener = (marker: MapType) => void;
export type MouseEventListener = (
  marker: MapType,
  evt: google.maps.MouseEvent | google.maps.IconMouseEvent
) => void;

function updateListeners(
  map: MapType,
  events: GoogleMapEvents,
  oldListeners: ListenerDict
): ListenerDict {
  for (const k in oldListeners) {
    oldListeners[k as ListenerEvent]?.remove();
  }

  const add = map.addListener.bind(map);

  return {
    click: events.onClick ? add("click", (e) => events.onClick!(map, e)) : null,
  };
}

export default function Map(props: MapProps) {
  const google = useContext(GoogleContext);
  const mapDiv = useRef(null as HTMLDivElement | null);
  const [map, setMap] = useState(null as MapType | null);
  const [infoWindow, setInfoWindow] = useState(null as InfoWindowType | null);
  const [listeners, setListeners] = useState({} as ListenerDict);

  // Load map
  useEffect(() => {
    if (!google) return;
    const map = new google.maps.Map(mapDiv.current!, {
      noClear: true,
      center: props.center ?? DefaultCoordinate,
      zoom: props.zoom ?? 8,
    });
    const infoWindow = new google.maps.InfoWindow();
    setMap(map);
    setInfoWindow(infoWindow);
    setListeners(updateListeners(map, props, listeners));
    // Get rid of that annoying message thing
    let counter = 0;
    let interval = setInterval(() => {
      if (counter++ > 20) clearInterval(interval);
      const dismiss = document.getElementsByClassName("dismissButton");
      const el = dismiss.item(0) as HTMLButtonElement;
      if (el) el.click();
    }, 100);
  }, [google]);

  // Map Events
  useEffect(
    () => {
      if (!map) return;
      const newListeners = updateListeners(map, props, listeners);
      setListeners(newListeners);
    },
    Object.keys(props)
      .filter((x) => x.substr(0, 2) === "on")
      //@ts-ignore
      .map((x) => props[x])
  );

  // Close InfoWindow if not used
  useEffect(() => {
    let found = false;
    React.Children.forEach(props.children, (child) => {
      if (React.isValidElement(child) && child.type === Marker) {
        if (child.props?.infoShown) {
          found = true;
        }
      }
    });
    if (!found) infoWindow?.close();
  });
  // Props
  useEffect(() => {
    if (map && props.center) {
      map.setCenter(props.center);
    }
  }, [props.center]);
  useEffect(() => {
    if (map && props.zoom) {
      map.setZoom(props.zoom);
    }
  }, [props.zoom]);

  return (
    <div id={props.id} className={props.className} ref={mapDiv}>
      {google && map && infoWindow ? (
        <MapContext.Provider value={{ google, map, infoWindow }}>
          {props.children}
        </MapContext.Provider>
      ) : (
        props.placeholder ?? <span>Loading...</span>
      )}
    </div>
  );
}
