import { FeatureCollection, Point } from "geojson";

const FRUIT_TREES_GEOJSON: FeatureCollection<Point> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        id: 1,
        species: "Citrus sinensis",
        common_name: "Orange Tree",
        health_status: "Healthy",
        fruit_type: "Orange",
        yield_estimate: "50 lbs",
        last_maintenance: "2024-12-01",
        caretaker: "City of Tallahassee",
      },
      geometry: {
        type: "Point",
        coordinates: [-84.2806, 30.4383],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 2,
        species: "Malus domestica",
        common_name: "Apple Tree",
        health_status: "Healthy",
        fruit_type: "Apple",
        yield_estimate: "40 lbs",
        last_maintenance: "2024-11-15",
        caretaker: "Community Garden Group",
      },
      geometry: {
        type: "Point",
        coordinates: [-84.2777, 30.4456],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 3,
        species: "Prunus persica",
        common_name: "Peach Tree",
        health_status: "Needs Pruning",
        fruit_type: "Peach",
        yield_estimate: "30 lbs",
        last_maintenance: "2024-10-20",
        caretaker: "Local Farmer",
      },
      geometry: {
        type: "Point",
        coordinates: [-84.289, 30.4401],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 4,
        species: "Citrus limon",
        common_name: "Lemon Tree",
        health_status: "Healthy",
        fruit_type: "Lemon",
        yield_estimate: "60 lbs",
        last_maintenance: "2024-12-05",
        caretaker: "City of Tallahassee",
      },
      geometry: {
        type: "Point",
        coordinates: [-84.2845, 30.4378],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 5,
        species: "Pyrus communis",
        common_name: "Pear Tree",
        health_status: "Diseased",
        fruit_type: "Pear",
        yield_estimate: "10 lbs",
        last_maintenance: "2024-09-30",
        caretaker: "Community Volunteers",
      },
      geometry: {
        type: "Point",
        coordinates: [-84.2921, 30.4427],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 6,
        species: "Ficus carica",
        common_name: "Fig Tree",
        health_status: "Healthy",
        fruit_type: "Fig",
        yield_estimate: "70 lbs",
        last_maintenance: "2024-10-10",
        caretaker: "City of Tallahassee",
      },
      geometry: {
        type: "Point",
        coordinates: [-84.2832, 30.4411],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 7,
        species: "Carya illinoinensis",
        common_name: "Pecan Tree",
        health_status: "Healthy",
        fruit_type: "Pecan",
        yield_estimate: "100 lbs",
        last_maintenance: "2024-11-20",
        caretaker: "Neighborhood Association",
      },
      geometry: {
        type: "Point",
        coordinates: [-84.2814, 30.4389],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 8,
        species: "Prunus avium",
        common_name: "Cherry Tree",
        health_status: "Healthy",
        fruit_type: "Cherry",
        yield_estimate: "25 lbs",
        last_maintenance: "2024-11-05",
        caretaker: "Local Orchard",
      },
      geometry: {
        type: "Point",
        coordinates: [-84.2789, 30.4394],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 9,
        species: "Musa acuminata",
        common_name: "Banana Tree",
        health_status: "Healthy",
        fruit_type: "Banana",
        yield_estimate: "120 lbs",
        last_maintenance: "2024-12-10",
        caretaker: "Urban Farmer",
      },
      geometry: {
        type: "Point",
        coordinates: [-84.2767, 30.4405],
      },
    },
    {
      type: "Feature",
      properties: {
        id: 10,
        species: "Juglans nigra",
        common_name: "Black Walnut Tree",
        health_status: "Needs Attention",
        fruit_type: "Walnut",
        yield_estimate: "50 lbs",
        last_maintenance: "2024-08-25",
        caretaker: "Park Services",
      },
      geometry: {
        type: "Point",
        coordinates: [-84.2856, 30.4444],
      },
    },
  ],
};

export default FRUIT_TREES_GEOJSON;
