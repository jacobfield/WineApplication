// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../../db/index.js";

// Get all descriptions function
export async function getDescriptions() {
  try {
    const queryDescrip = "SELECT * FROM descriptions";

    // Pool object to send q to DB
    const result = await pool.query(queryDescrip);

    //return rows
    return result.rows;
  } catch (error) {
    console.error(`Error fetching Descriptions Table:`, error.message);
    throw error;
  }
}
