import {
  Tree,
  TreeWithFruitingTime,
  FruitingTime,
  TreeWithDetails,
} from "@/types/trees";
import { Pool, PoolClient } from "pg";

// We'll create and reuse a single pool instance in the server environment
let pool: Pool | undefined;

if (!pool) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
}

/**
 * Retrieves all Tree records from the database, including their type and property type names.
 * @returns An array of TreeWithFruitingTime objects.
 * @throws Error if the query fails.
 */
export async function getTrees(): Promise<TreeWithFruitingTime[]> {
  if (!pool) {
    throw new Error("Pool not initialized");
  }

  const client = await pool.connect();

  try {
    const query = `
      SELECT 
        t.id AS tree_id,
        t.lat,
        t.long,
        tt.name AS fruit_type,
        pt.name AS property_type,
        t.public_picking,
        t.notes,
        t.created,
        ft.start_month,
        ft.end_month,
        ft.description
      FROM 
        trees t
      JOIN 
        tree_types tt ON t.type = tt.id
      JOIN 
        property_types pt ON t.property_type = pt.id
      LEFT JOIN 
        fruiting_times ft ON tt.id = ft.tree_type_id
      ORDER BY 
        t.created DESC, ft.start_month ASC;
    `;

    const result = await client.query(query);

    // Map to TreeWithDetails with aggregated fruitingTimes
    const treesMap: Map<number, TreeWithDetails> = new Map();

    result.rows.forEach((row) => {
      const treeId = row.tree_id;

      if (!treesMap.has(treeId)) {
        treesMap.set(treeId, {
          id: treeId,
          lat: parseFloat(row.lat),
          long: parseFloat(row.long),
          fruitType: row.fruit_type,
          propertyType: row.property_type,
          public_picking: row.public_picking,
          notes: row.notes || undefined,
          created: new Date(row.created),
          fruiting_times: [],
        });
      }

      // If there's a fruiting time, add it to the tree's fruitingTimes array
      if (row.start_month && row.end_month) {
        const fruitingTime: FruitingTime = {
          start_month: row.start_month,
          end_month: row.end_month,
          description: row.description || undefined,
        };
        treesMap.get(treeId)?.fruiting_times.push(fruitingTime);
      }
    });

    return Array.from(treesMap.values());
  } catch (error) {
    console.error("Error fetching trees:", error);
    throw new Error("Failed to fetch trees.");
  } finally {
    client.release();
  }
}

/**
 * Retrieves the ID from a lookup table based on the name.
 * @param client - The PoolClient to use for the query.
 * @param table - The lookup table name ('tree_types' or 'property_types').
 * @param name - The exact name to look up (case-sensitive).
 * @returns The corresponding ID.
 * @throws Error if the name is not found.
 */
async function getLookupId(
  client: PoolClient,
  table: "tree_types" | "property_types",
  name: string
): Promise<number> {
  const query = `SELECT id FROM ${table} WHERE name = $1`;
  const result = await client.query(query, [name]);

  if (result.rows.length === 0) {
    throw new Error(`'${name}' not found in ${table} table.`);
  }

  return result.rows[0].id;
}

/**
 * Inserts a new Tree record into the database.
 * @param tree - The Tree object containing data to insert.
 * @returns The inserted Tree record with all columns.
 * @throws Error if tree_type or property_type is not found.
 */
export async function createTree(tree: Tree) {
  if (!pool) {
    throw new Error("Pool not initialized");
  }

  const client = await pool.connect();

  try {
    // Begin transaction
    await client.query("BEGIN");

    // 1. Retrieve tree_type ID based on fruitType (exact case)
    const treeTypeId = await getLookupId(client, "tree_types", tree.fruitType);

    // 2. Retrieve property_type ID based on propertyType (exact case)
    const propertyTypeId = await getLookupId(
      client,
      "property_types",
      tree.propertyType
    );

    // 3. Insert into trees table
    const insertQuery = `
        INSERT INTO trees (
          lat,
          long,
          type,
          property_type,
          public_picking,
          notes
        )
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
      `;

    const values = [
      tree.lat,
      tree.long,
      treeTypeId,
      propertyTypeId,
      tree.public_picking,
      tree.notes || null, // Ensure NULL if notes are undefined
    ];

    const insertResult = await client.query(insertQuery, values);

    // Commit transaction
    await client.query("COMMIT");

    // Return the inserted row
    return insertResult.rows[0];
  } catch (error) {
    // Rollback transaction in case of error
    await client.query("ROLLBACK");
    console.error("Error inserting tree:", error);
    throw error; // Rethrow the error after rollback
  } finally {
    // Release the client back to the pool
    client.release();
  }
}
