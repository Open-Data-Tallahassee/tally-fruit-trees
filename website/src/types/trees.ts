// This is the type definition for the "trees" table
interface Tree {
  id: number;
  lat: number;
  long: number;
  fruitType: string; // Corresponds to tree_types.name
  propertyType: string; // Corresponds to property_types.name
  public_picking: boolean | null;
  notes?: string; // Optional field
  fruiting_times: FruitingTime[];
}

interface TreeWithDetails extends Tree {
  id: number;
  created: Date;
}

interface FruitingTime {
  start_month: number; // 1 = January, 12 = December
  end_month: number; // 1 = January, 12 = December
  description?: string;
}

interface TreeWithFruitingTime extends TreeWithDetails {
  fruiting_times: FruitingTime[];
}

export type { Tree, TreeWithFruitingTime, FruitingTime, TreeWithDetails };
