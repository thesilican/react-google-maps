import React, { useContext, useEffect, useState } from "react";
import { MapContext } from "./Map";
import { GoogleContext } from "./Google";
import { Coordinate, HeatMapType, WeightedCoordinate } from "../types";

export type HeatMapProps = {
  data: (Coordinate | WeightedCoordinate)[];
  dissipating?: boolean;
  gradient?: string[];
  maxIntensity?: number;
  opacity?: number;
  radius?: number;
};

type Loc = google.maps.LatLng;
type WeightedLoc = google.maps.visualization.WeightedLocation;

function coordToLatLng(coord: Coordinate): Loc;
function coordToLatLng(coord: WeightedCoordinate): WeightedLoc;
function coordToLatLng(
  coord: Coordinate | WeightedCoordinate
): Loc | WeightedLoc {
  if ("weight" in coord) {
    return {
      location: new google.maps.LatLng(coord),
      weight: coord.weight,
    };
  } else {
    return new google.maps.LatLng(coord);
  }
}

export default function HeatMap(props: HeatMapProps) {
  const google = useContext(GoogleContext);
  const mapCtx = useContext(MapContext);
  const [heatMap, setHeatMap] = useState(null as HeatMapType | null);
  useEffect(() => {
    if (!mapCtx || !google) return;
    const { map } = mapCtx;
    const heatMap = new google.maps.visualization.HeatmapLayer({
      map,
      data: props.data.map((x) => coordToLatLng(x)),
      dissipating: props.dissipating,
      maxIntensity: props.maxIntensity,
      gradient: props.gradient,
      opacity: props.opacity,
      radius: props.radius,
    });
    setHeatMap(heatMap);

    // Remove heatmap on exit
    return () => {
      heatMap.setMap(null);
    };
  }, [mapCtx]);

  // Props
  useEffect(() => {
    if (!heatMap) return;
    heatMap.setData(props.data.map((x) => coordToLatLng(x)));
  }, [props.data]);
  useEffect(() => {
    if (!heatMap) return;
    heatMap.set("dissipating", props.dissipating ?? null);
  }, [props.dissipating]);
  useEffect(() => {
    if (!heatMap) return;
    heatMap.set("gradient", props.gradient ?? null);
  }, [props.gradient]);
  useEffect(() => {
    if (!heatMap) return;
    heatMap.set("maxIntensity", props.maxIntensity ?? null);
  }, [props.maxIntensity]);
  useEffect(() => {
    if (!heatMap) return;
    heatMap.set("radius", props.radius ?? null);
  }, [props.radius]);
  useEffect(() => {
    if (!heatMap) return;
    heatMap.set("opacity", props.opacity ?? null);
  }, [props.opacity]);
  return <div />;
}
