import React, { useContext, useState, useEffect } from "react";
import { GoogleContext } from "./Google";
import { MapContext } from "./Map";
import { HeatMapType } from "..";
import { CircleType, DefaultCoordinate, Coordinate } from "../types";

export type CircleProps = {
  center?: Coordinate;
  radius?: number;
  fillColor?: string;
  fillOpacity?: number;
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
  visible?: boolean;
  zIndex?: number;
};

export default function Circle(props: CircleProps) {
  const google = useContext(GoogleContext);
  const mapCtx = useContext(MapContext);
  const [circle, setCircle] = useState(null as CircleType | null);
  useEffect(() => {
    if (!mapCtx || !google) return;
    const { map } = mapCtx;
    const circle = new google.maps.Circle({
      map,
      center: props.center ?? DefaultCoordinate,
      radius: props.radius ?? 1,
      fillColor: props.fillColor,
      fillOpacity: props.fillOpacity,
      strokeColor: props.strokeColor,
      strokeOpacity: props.strokeOpacity,
      strokeWeight: props.strokeWeight,
      visible: props.visible,
    });
    setCircle(circle);
    return () => {
      circle.setMap(null);
    };
  }, [mapCtx]);
  useEffect(() => {
    if (!circle) return;
    circle.setCenter(props.center ?? DefaultCoordinate);
  }, [props.center]);
  useEffect(() => {
    if (!circle) return;
    circle.setRadius(props.radius ?? 1);
  }, [props.radius]);
  useEffect(() => {
    if (!circle) return;
    circle.setOptions({
      fillColor: props.fillColor,
      fillOpacity: props.fillOpacity,
      strokeColor: props.strokeColor,
      strokeOpacity: props.strokeOpacity,
      strokeWeight: props.strokeWeight,
    });
  }, [
    props.fillColor,
    props.fillOpacity,
    props.strokeColor,
    props.strokeOpacity,
    props.strokeWeight,
  ]);
  useEffect(() => {
    if (!circle) return;
    circle.setVisible(props.visible ?? true);
  }, [props.visible]);

  return <div className="circle" />;
}
