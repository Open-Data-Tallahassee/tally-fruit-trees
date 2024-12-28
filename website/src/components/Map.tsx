"use client";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";
import FRUIT_TREES_GEOJSON from "@/constants";
import Tooltip from "@/components/ToolTip";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_REACT_APP_MAPBOX_TOKEN || "";

const Map = () => {
  const mapContainer = useRef(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  const lat = 30.4543;
  const lng = -84.2875;
  const initZoom = 11.53;

  const [selectedTree, setSelectedTree] = useState<any>(null);

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

      mapRef.current.on("load", () => {
        if (mapRef.current) {
          // Add ArcGIS Feature Layer as a GeoJSON source

          mapRef.current.addSource("fruitTrees", {
            type: "geojson",
            data: FRUIT_TREES_GEOJSON,
          });

          mapRef.current.addLayer({
            id: "treePoints",
            type: "circle",
            source: "fruitTrees",
            paint: {
              "circle-radius": 6,
              // "circle-color": [
              //   "match",
              //   ["get", "crash_type"],
              //   "Pedestrian",
              //   "#C4291D", // Red for Pedestrian
              //   "Bicyclist",
              //   "#F5AE3D", // Yellow for Bicyclist
              //   "#3C90E2", // Blue for Others
              // ],
              "circle-opacity": 0.6,
            },
          });

          // Add click event listener for the treePoints layer
          mapRef.current.on("click", "treePoints", (e) => {
            const features = e.features?.[0];
            if (features) {
              setSelectedTree(features.properties);
            }
          });

          // Change the cursor to a pointer when over the points
          mapRef.current.on("mouseenter", "treePoints", () => {
            mapRef.current?.getCanvas().style.setProperty("cursor", "pointer");
          });

          mapRef.current.on("mouseleave", "treePoints", () => {
            mapRef.current?.getCanvas().style.setProperty("cursor", "");
          });
        }
      });
    };

    initMap();
  }, []);

  return (
    <>
      <Tooltip selectedTree={selectedTree} />
      <div
        ref={mapContainer}
        className="map-container h-[calc(100vh_-_68px)] w-full relative z-10"
      />
    </>
  );
};

export default Map;
