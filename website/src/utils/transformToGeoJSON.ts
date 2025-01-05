import { TreeWithFruitingTime } from "@/types/trees";
import { Feature, FeatureCollection, GeoJsonProperties, Point } from "geojson";

/**
 * Transforms an array of TreeWithFruitingTime into a GeoJSON FeatureCollection.
 * @param trees - Array of TreeWithFruitingTime objects.
 * @returns GeoJSONFeatureCollection representing the trees.
 */
export function transformTreesToGeoJSON(
  trees: TreeWithFruitingTime[]
): FeatureCollection {
  const features: Feature[] = trees.map((tree) => {
    const properties: GeoJsonProperties = {
      id: tree.id,
      fruitType: tree.fruitType,
      propertyType: tree.propertyType,
      publicPicking: tree.publicPicking == true ? true : false, // Set 'publicPicking' to true if 'tree.publicPicking' is true, otherwise false
      notes: tree.notes,
      created: tree.created.toISOString(),
      fruitingTimes: tree.fruitingTimes,
    };

    const geometry: Point = {
      type: "Point",
      coordinates: [tree.long, tree.lat], // Note: GeoJSON uses [longitude, latitude]
    };

    return {
      type: "Feature",
      properties,
      geometry,
    };
  });

  return {
    type: "FeatureCollection",
    features,
  };
}
