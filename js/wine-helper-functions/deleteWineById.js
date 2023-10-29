// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../../db/index.js";

// delete by ID function
export async function deleteWineById(id) {
  try {
    // Query the DB to delete a wine and by it's id
    const deleteWine = "DELETE FROM wines WHERE id = $1 RETURNING *";

    // Pool object to send the query to database, passing the wine id as parameter
    const result = await pool.query(deleteWine, [id]);
    //  return result
    return result;
  } catch (error) {
    console.error("Error deleting wine:", error);
  }
}
