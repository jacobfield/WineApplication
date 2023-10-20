// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../../db/index.js";

// get wine by colour
export async function getWineByColour() {
  // Query db to return wine with matching ID or null
  try {
    const queryWine = "SELECT * FROM wines WHERE colour = $1";
    // defind SQL query to fetch wine by colour
    const result = await pool.query(queryFilm, [colour]);
    // rows should contain queried wine data
    return result.rows[0];
  } catch (error) {
    console.errpr(`Error finding that colour wine:`, error);
    throw error;
  }
}
