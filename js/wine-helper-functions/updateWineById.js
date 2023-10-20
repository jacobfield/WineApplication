// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../../db/index.js";

// PATCH wine by id
export async function updateWineById(id, updates) {
  try {
    // query DB for wine by ID, update it, return it
    // update wine, set wine_name, colour, grape_type, year
    const updateWine =
      "Update wines SET wine_name = $1, colour = $2, grape_type = $3, year = $4 WHERE id = $5 RETURNING *";
    // Use pool object to send query to database, preventing SQL injection
    const result = await pool.query(updateWine, [
      updates.wine_name,
      updates.colour,
      updates.grape_type,
      updates.year,
      id,
    ]);
    // return rows
    return result.rows[0];
  } catch (error) {
    console.error("Error updating wine:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}
