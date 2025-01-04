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

export type {
  FruitingTime,
  Tree,
  TreeGithub,
  TreeWithDetails,
  TreeWithFruitingTime,
};
