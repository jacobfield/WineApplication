// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../../db/index.js";

// get specific wine by id function
export async function getWineById(id) {
  // Query the database to return the wine with a matching id
  try {
    // define SQL uery to fetch wine by id
    const queryWine =
      "SELECT * FROM wines JOIN descriptions ON wines.id = descriptions.wine_id WHERE wines.id = $1;";
    // use pool object to send query to database, preventing SQL injection
    const result = await pool.query(queryWine, [id]);

    // rows property should contain queried wine
    return result.rows[0];
  } catch (error) {
    console.error("Error finding that ID:", error);
    throw error; // rethrow the error to handle it in the calling code
  }
}
