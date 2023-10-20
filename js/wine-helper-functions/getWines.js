// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../../db/index.js";

// Get all wines function
export async function getWines() {
  // Query db and return all wines
  try {
    const queryWines = "SELECT * FROM wines";

    // Pool object to send the query to the database
    const result = await pool.query(queryWines);

    // 'Rows' property will contain the result of the retreived wines records
    return result.rows;
    // catch any errors
  } catch (error) {
    console.error(`Error fetching Wines Table:`, error.message);
    throw error;
  }
}
