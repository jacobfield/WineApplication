// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../../db/index.js";

// patch description by ID function
export async function updateDescriptionById(description_id, updates) {
  try {
    // query database for the ID to update
    const updateDescription =
      "UPDATE descriptions SET wine_id = $1, wine_description = $2, rating = $3, maker = $4 WHERE description_id = $5 RETURNING *";
    ("UPDATE wines SET wine_name = $1, colour = $2, grape_type = $3, year = $4 WHERE id = $5 RETURNING *");
    // Use pool object to send query to database, preventing SQL injection
    const result = await pool.query(updateDescription, [
      updates.wine_id,
      updates.wine_description,
      updates.rating,
      updates.maker,
      description_id,
    ]);
    // return result.rows
    return result.rows[0];
  } catch (error) {
    console.error("Error updating that description:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}
