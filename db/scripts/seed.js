// import { Pool } from "pg";
import { pool } from "../index.js";

// import seed data function
import { seedTables } from "./reset";

// call seed data function
await seedTables();

// message to show function successfully performed
console.log("Tables successfully populated");
