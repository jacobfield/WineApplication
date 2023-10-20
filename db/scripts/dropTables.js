import { pool } from "../index.js";
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
