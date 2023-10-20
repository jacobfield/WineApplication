// import { Pool } from "pg";
import { pool } from "../index.js";
import { dropTables } from "./dropTables.js";
import { createTables } from "./createTables.js";
import { seedTables } from "./seedTables.js";
// Large async function that will drop tables, then reset and populate with one wine

// call the functions
export async function runResetOperations() {
  await dropTables();
  await createTables();
  await seedTables();
}
runResetOperations();
