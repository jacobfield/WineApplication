// import { Pool } from "pg";
import { pool } from "../index.js";

// Large async function that will drop tables, then reset and populate with one wine
export async function dropTables() {
  try {
    //drop tables if they exist
    await pool.query(`
    DROP TABLE IF EXISTS descriptions;
      DROP TABLE IF EXISTS wines;`);
    console.log("Tables Dropped Successfully. No wine left!");
  } catch (error) {
    console.error("Database reset failed: ", error);
  }
}

export async function createTables() {
  // Create new tables wines and descriptions
  //Create wines
  try {
    await pool.query(`
      CREATE TABLE wines(
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        wine_name VARCHAR(255) NOT NULL,
        colour VARCHAR(255) NOT NULL,
        grape_type VARCHAR(255) NOT NULL,
        year INT
      );
      `);
    // create descriptions table. Directors id (FK) = wines id(PK)
    await pool.query(`
    CREATE TABLE descriptions(
      description_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      wine_id INTEGER REFERENCES wines(id),
      wine_description VARCHAR(225) NOT NULL,
      rating INT CHECK (rating <= 100),
      maker VARCHAR(225)
    );
    
  `);
    console.log("Tables successfully created. Time to buy some wine!");
  } catch (error) {
    console.error("Database reset failed: ", error);
  }
}

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

// call the functions
export async function runResetOperations() {
  await dropTables();
  await createTables();
  await seedTables();
}
runResetOperations();