// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../../db/index.js";

// delete description by id function
export async function deleteDescriptionById(description_id) {
  try {
    // query db for a description to delete by it's id
    const deleteDescription =
      "DELETE FROM descriptions WHERE description_id = $1 RETURNING *";
    // pool object to send the query to database passing id as param
    const result = await pool.query(deleteDescription, [description_id]);
    return result;
  } catch (error) {
    console.error("Error deleting that description:", error);
  }
}
