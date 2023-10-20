// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../../db/index.js";

// Create description function
export async function createDescription(description) {
  try {
    // Define SQL query to INSERT INTO descriptions table
    const insertDescription =
      "INSERT INTO descriptions (wine_id, wine_description, rating, maker) VALUES ($1, $2, $3, $4) RETURNING *";
    // destructure insertDescription to make the contained objects accessible
    const { wine_id, wine_description, rating, maker } = description;
    // Use pool object to send query to database, preventing SQL injection
    const result = await pool.query(insertDescription, [
      wine_id,
      wine_description,
      rating,
      maker,
    ]);
    // rows property should contain inserted data
    return result.rows[0];
  } catch (error) {
    console.error("Error creating that description:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}
