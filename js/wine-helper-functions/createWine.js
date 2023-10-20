// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../../db/index.js";

// Create wine
export async function createWine(wine) {
  try {
    // Define SQL query to INSERT INTO wines table
    const insertWine =
      "INSERT INTO wines (wine_name, colour, grape_type, year) VALUES ($1, $2, $3, $4) RETURNING *";
    // destructure wine_name, colour, grape_type, year from wine object
    const { wine_name, colour, grape_type, year } = wine;
    // Use pool object to send query to database, preventing SQL injection
    const result = await pool.query(insertWine, [
      wine_name,
      colour,
      grape_type,
      year,
    ]);
    // Rows property should contain inserted data
    return result.rows[0];
  } catch (error) {
    console.error("Error creating wine:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}
