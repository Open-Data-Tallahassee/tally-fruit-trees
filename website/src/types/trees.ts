import { GeoJsonProperties, Position } from "geojson";
// This is the type definition for the "trees" table
interface Tree {
  id: number;
  lat: number;
  long: number;
  fruitType: string; // Corresponds to tree_types.name
  propertyType: string; // Corresponds to property_types.name
  publicPicking: boolean | null;
  notes?: string; // Optional field
  created: Date;
}

interface TreeWithDetails extends Tree {
  created: Date;
}

interface FruitingTime {
  startMonth: number; // 1 = January, 12 = December
  endMonth: number; // 1 = January, 12 = December
  description?: string;
}

interface TreeWithFruitingTime extends TreeWithDetails {
  fruitingTimes: FruitingTime[];
}

interface TreeGithub {
  tree_id: string;
  lat: string;
  long: string;
  fruit_type: string;
  property_type: string;
  public_picking: string;
  notes?: string;
  created: string;
  start_month: string;
  end_month: string;
  description?: string;
}

interface SelectedTreeInfo {
  properties: GeoJsonProperties;
  coordinates: Position;
}

export type {
  FruitingTime,
  SelectedTreeInfo,
  Tree,
  TreeGithub,
  TreeWithDetails,
  TreeWithFruitingTime,
};
