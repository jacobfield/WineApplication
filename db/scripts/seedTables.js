import { pool } from "../index.js";

export async function seedTables() {
  try {
    // Seed films
    await pool.query(`
  INSERT INTO wines (wine_name, colour, grape_type, year)
  VALUES
  ('Pinot Collapso', 'White', 'Grassmoor Grape', 2015 );`);

    //Seed descriptions
    await pool.query(`
  INSERT INTO descriptions (wine_id, wine_description, rating, maker)
  VALUES
  (1, 'A slippery little white that only comes in boxes. Light and crispy, you''ll wonder where it went.', 100, 'Rheeba''s Return');`);

    // Log success to the console
    console.log("Database reset successful. Enjoy your wine!");
    // catch errors
  } catch (error) {
    console.error("Database reset failed: ", error);
  }
}
