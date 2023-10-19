// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

// Get all wines function
export async function getWines() {
  // Query db and return all wines
  try {
    const queryWines = "SELECT * FROM wines";

    // Pool object to send the query to the database
    const result = await pool.query(queryWines);

    // 'Rows' property will contain the result of the retreived wines records
    return result.rows;
    // catch any errors
  } catch (error) {
    console.error(`Error fetching Wines Table:`, error.message);
    throw error;
  }
}
// get specific wine by id function
export async function getWineById(id) {
  // Query the database to return the wine with a matching id
  try {
    // define SQL uery to fetch wine by id
    const queryWine = "SELECT * FROM wines WHERE id = $1";
    // use pool object to send query to database, preventing SQL injection
    const result = await pool.query(queryWine, [id]);

    // rows property should contain queried wine
    return result.rows[0];
  } catch (error) {
    console.error("Error finding that ID:", error);
    throw error; // rethrow the error to handle it in the calling code
  }
}

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

// Create wine
export async function createWine(wine) {
  try {
    // Query DB to create a wine and return it
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

// PATCH wine by id
export async function UpdateWineById(id, updates) {
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

// delete by ID function
export async function deleteWineById(id) {
  try {
    // Query the DB to delete a wine and by it's id
    const deleteWine = "DELETE FROM films WHERE id = $1 RETURNING *";

    // Pool object to send the query to database, passing the wine id as parameter
    const result = await pool.query(deleteWine, [id]);
    //  return result
    return result;
  } catch (error) {
    console.error("Error deleting wine:", error);
  }
}
