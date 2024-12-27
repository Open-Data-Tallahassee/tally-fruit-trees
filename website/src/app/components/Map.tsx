"use client";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef } from "react";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_TOKEN || "";

const Map = () => {
  const mapContainer = useRef(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  const lat = 30.4543;
  const lng = -84.2875;
  const initZoom = 11.53;

  useEffect(() => {
    if (mapRef.current) return; // Initialize map only once

    const initMap = () => {
      mapRef.current = new mapboxgl.Map({
        container: mapContainer.current || "",
        style: "mapbox://styles/mapbox/streets-v12",
        center: [lng, lat],
        minZoom: 10,
        zoom: initZoom,
      });
    };

    initMap();
  }, []);

  return (
    <div
      ref={mapContainer}
      className="map-container h-[calc(100vh_-_68px)] w-full relative"
    />
  );
};

export default Map;
