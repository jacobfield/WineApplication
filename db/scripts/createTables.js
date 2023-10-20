import { pool } from "../index.js";

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
