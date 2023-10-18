// import { Pool } from "pg";
import { pool } from "../index.js";

// import create tables function
import { createTables } from "./reset";

// call create tables function
await createTables();

// message to show function successfully performed
console.log("Tables created successfully");
