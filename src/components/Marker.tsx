import React, { useEffect, useState, useContext, Fragment } from "react";
import { Coordinate, DefaultCoordinate, MarkerType } from "../types";
import { MapChildProps, MapContext } from "./Map";
import { GoogleContext } from "./Google";

export type MarkerProps = {
  _map?: MapChildProps;
  info?: {
    title?: string;
    body?: string;
  };
  infoShown?: boolean;
  onInfoClose?: () => void;
} & GoogleMarkerProps &
  GoogleMarkerEvents;
export type GoogleMarkerProps = {
  animation?: "DROP" | "BOUNCE";
  clickable?: boolean;
  cursor?: string;
  draggable?: boolean;
  icon?: string | google.maps.ReadonlyIcon | google.maps.ReadonlySymbol;
  label?: string | google.maps.MarkerLabel;
  position?: Coordinate;
  opacity?: number;
  shape?: google.maps.MarkerShape;
  visible?: boolean;
  zIndex?: number;
  title?: string;
};
export type GoogleMarkerEvents = {
  onAnimationChanged?: EventListener;
  onClick?: MouseEventListener;
  onClickableChanged?: EventListener;
  onCursorChanged?: EventListener;
  onDblClick?: MouseEventListener;
  onDrag?: MouseEventListener;
  onDragEnd?: MouseEventListener;
  onDraggableChanged?: EventListener;
  onDragStart?: MouseEventListener;
  onFlatChanged?: MouseEventListener;
  onIconChanged?: EventListener;
  onMouseDown?: MouseEventListener;
  onMouseOut?: MouseEventListener;
  onMouseOver?: MouseEventListener;
  onMouseUp?: MouseEventListener;
  onPositionChanged?: EventListener;
  onRightClick?: MouseEventListener;
  onShapeChanged?: EventListener;
  onTitleChanged?: EventListener;
  onVisibleChanged?: EventListener;
  onZindexChanged?: EventListener;
};

type ListenerEvent =
  | google.maps.MarkerChangeOptionEventNames
  | google.maps.MarkerMouseEventNames;
type ListenerDict = {
  [l in ListenerEvent]: google.maps.MapsEventListener | null;
};
export type EventListener = (marker: MarkerType) => void;
export type MouseEventListener = (
  marker: MarkerType,
  evt: google.maps.MouseEvent
) => void;

function updateListeners(
  marker: MarkerType,
  events: GoogleMarkerEvents,
  oldListeners: ListenerDict
): ListenerDict {
  for (const k in oldListeners) {
    oldListeners[k as ListenerEvent]?.remove();
  }

  const add = marker.addListener.bind(marker);

  return {
    animation_changed: events.onAnimationChanged
      ? add("animation_changed", () => events.onAnimationChanged!(marker))
      : null,
    click: events.onClick
      ? add("click", (m) => events.onClick!(marker, m))
      : null,
    clickable_changed: events.onClickableChanged
      ? add("clickable_changed", () => events.onClickableChanged!(marker))
      : null,
    cursor_changed: events.onCursorChanged
      ? add("cursor_changed", () => events.onCursorChanged!(marker))
      : null,
    dblclick: events.onDblClick
      ? add("dblclick", (m) => events.onDblClick!(marker, m))
      : null,
    drag: events.onDrag ? add("drag", (m) => events.onDrag!(marker, m)) : null,
    dragend: events.onDragEnd
      ? add("dragend", (m) => events.onDragEnd!(marker, m))
      : null,
    draggable_changed: events.onDraggableChanged
      ? add("draggable_changed", () => events.onDraggableChanged!(marker))
      : null,
    dragstart: events.onDragStart
      ? add("dragstart", (m) => events.onDragStart!(marker, m))
      : null,
    flat_changed: events.onFlatChanged
      ? add("FlatChanged", (m) => events.onFlatChanged!(marker, m))
      : null,
    icon_changed: events.onIconChanged
      ? add("icon_changed", () => events.onIconChanged!(marker))
      : null,
    mousedown: events.onMouseDown
      ? add("mousedown", (m) => events.onMouseDown!(marker, m))
      : null,
    mouseout: events.onMouseOut
      ? add("mouseout", (m) => events.onMouseOut!(marker, m))
      : null,
    mouseover: events.onMouseOver
      ? add("mouseover", (m) => events.onMouseOver!(marker, m))
      : null,
    mouseup: events.onMouseUp
      ? add("mouseup", (m) => events.onMouseUp!(marker, m))
      : null,
    position_changed: events.onPositionChanged
      ? add("position_changed", () => events.onPositionChanged!(marker))
      : null,
    rightclick: events.onRightClick
      ? add("rightclick", (m) => events.onRightClick!(marker, m))
      : null,
    shape_changed: events.onShapeChanged
      ? add("shape_changed", () => events.onShapeChanged!(marker))
      : null,
    title_changed: events.onTitleChanged
      ? add("title_changed", () => events.onTitleChanged!(marker))
      : null,
    visible_changed: events.onVisibleChanged
      ? add("visible_changed", () => events.onVisibleChanged!(marker))
      : null,
    zindex_changed: events.onZindexChanged
      ? add("zindex_changed", () => events.onZindexChanged!(marker))
      : null,
  };
}
function getContent(title?: string, body?: string) {
  return `
  <div id="content">
    <h6>
      ${title ?? ""}
    </h6>
    <span>
      ${body ?? ""}
    </span>
  </div>`;
}

function Marker(props: MarkerProps) {
  const google = useContext(GoogleContext);
  const mapCtx = useContext(MapContext);
  const [marker, setMarker] = useState(null as MarkerType | null);
  const [listeners, setListeners] = useState({} as ListenerDict);
  const [closeListener, setCloseListener] = useState(
    null as google.maps.MapsEventListener | null
  );
  // On Load
  useEffect(() => {
    if (!mapCtx || !google) return;
    const { map } = mapCtx;
    const marker = new google.maps.Marker({
      map,
      clickable: props.clickable,
      cursor: props.cursor,
      draggable: props.draggable,
      icon: props.icon,
      label: props.label,
      position: props.position ?? DefaultCoordinate,
      opacity: props.opacity,
      shape: props.shape,
      visible: props.visible,
      zIndex: props.zIndex,
      title: props.title,
    });
    // This seems to work better
    marker.setAnimation(
      props.animation ? google.maps.Animation[props.animation] : null
    );
    setMarker(marker);
    setListeners(updateListeners(marker, props, listeners));

    // Remove the marker once it is gone
    return () => {
      marker.setMap(null);
    };
  }, [mapCtx]);

  // Marker Events
  useEffect(
    () => {
      if (!marker) return;
      const newListeners = updateListeners(marker, props, listeners);
      setListeners(newListeners);
    },
    Object.keys(props)
      .filter((x) => x.substr(0, 2) === "on")
      //@ts-ignore
      .map((x) => props[x])
  );

  // Marker Props
  useEffect(() => {
    if (marker)
      marker.setAnimation(
        props.animation ? google!.maps.Animation[props.animation] : null
      );
  }, [props.animation]);
  useEffect(() => {
    if (marker) marker.setClickable(props.clickable ?? true);
  }, [props.clickable]);
  useEffect(() => {
    if (marker) marker.setCursor(props.cursor ?? null);
  }, [props.cursor]);
  useEffect(() => {
    if (marker) marker.setDraggable(props.draggable ?? null);
  }, [props.draggable]);
  useEffect(() => {
    if (marker) marker.setIcon(props.icon ?? null);
  }, [props.icon]);
  useEffect(() => {
    if (marker) marker.setLabel(props.label ?? null);
  }, [props.label]);
  useEffect(() => {
    if (marker) marker.setPosition(props.position ?? null);
  }, [props.position]);
  useEffect(() => {
    if (marker) marker.setOpacity(props.opacity ?? null);
  }, [props.opacity]);
  useEffect(() => {
    if (marker) marker.setShape(props.shape ?? null);
  }, [props.shape]);
  useEffect(() => {
    if (marker) marker.setVisible(props.visible ?? true);
  }, [props.visible]);
  useEffect(() => {
    if (marker) marker.setZIndex(props.zIndex ?? null);
  }, [props.zIndex]);
  useEffect(() => {
    if (marker) marker.setTitle(props.title ?? null);
  }, [props.title]);

  // Info window
  useEffect(() => {
    if (!mapCtx || !marker) return;
    // Remove current listener if it exists
    closeListener?.remove();
    if (props.infoShown) {
      const content = getContent(props.info?.title, props.info?.body);
      mapCtx.infoWindow.setContent(content);
      mapCtx.infoWindow.open(mapCtx.map, marker);
      const listener = mapCtx.infoWindow.addListener("closeclick", () => {
        // Prevent from closing
        mapCtx.infoWindow.open(mapCtx.map, marker);
        if (props.onInfoClose) props.onInfoClose();
      });
      setCloseListener(listener);
    }
  }, [props.infoShown]);

  return <div className="marker" />;
}

export default Marker;
