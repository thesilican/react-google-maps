export type Coordinate = {
  lat: number;
  lng: number;
};
export type GoogleType = typeof google;
export type MapType = google.maps.Map;
export type MarkerType = google.maps.Marker;
export type InfoWindowType = google.maps.InfoWindow;
export const DefaultCoordinate = { lat: 37.773972, lng: -122.431297 };
