import { TreeWithDetails } from "@/types/trees";
import { Feature, FeatureCollection, GeoJsonProperties, Point } from "geojson";

/**
 * Transforms an array of TreeWithDetails into a GeoJSON FeatureCollection.
 * @param trees - Array of TreeWithDetails objects.
 * @returns GeoJSONFeatureCollection representing the trees.
 */
export function transformTreesToGeoJSON(
  trees: TreeWithDetails[]
): FeatureCollection {
  const features: Feature[] = trees.map((tree) => {
    const properties: GeoJsonProperties = {
      id: tree.id,
      fruitType: tree.fruitType,
      propertyType: tree.propertyType,
      public_picking: tree.public_picking,
      notes: tree.notes,
      created: tree.created.toISOString(),
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
