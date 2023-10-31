// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../../db/index.js";

// get specific description by id
export async function getDescriptionById(description_id) {
  try {
    const queryDescrip = "SELECT * FROM descriptions WHERE description_id = $1";
    // use pool to query db
    const result = await pool.query(queryDescrip, [description_id]);

    // rows property should contain queried wine
    return result.rows[0];
  } catch (error) {
    console.error("Error finding that ID:", error);
    throw error; // rethrow the error to handle it in the calling code
  }
}
