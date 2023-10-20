// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../../db/index.js";

// get specific wine by wine_name
export async function getWineByName(wine_name) {
  // Query the database and return the wine with a matching id or null
  try {
    // Define SQL query to fetch wine by wine_name
    const queryWine = "SELECT * FROM wines WHERE wine_name = $1";
    // Use pool object to send query to database, preventing SQL injection
    const result = await pool.query(queryFilm, [wine_name]);

    // Rows property should contain the queried wine
    return result.rows[0];
  } catch (error) {
    console.errpr(`Error finding that Wine:`, error);
    throw error;
  }
}
