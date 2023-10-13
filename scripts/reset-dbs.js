import { Pool } from "pg";
import { pool } from "./index";

// Large async function that will drop tables, then reset and populate with one wine
async function resetDatabase(){
    try{
        //drop tables if they exist
        await pool.query(`
        DROP TABLE IF EXISTS wines;
        DROP TABLE IF EXISTS descriptions;`
        );

 // Create new tables wines and descriptions 
 //Create wines      
        await pool.query(`
        CREATE TABLE wines(
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            wine_name VARCHAR(255) NOT NULL,
            colour VARCHAR(255) NOT NULL,
            grape_type VARCHAR(255) NOT NULL,
            year INT
        );
        `)
// create descriptions
await pool.query(`
CREATE TABLE descriptions(
    description_id GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    wine_id INTEGER REFERENCES wines(id),
    wine_description VARCHAR(225) NOT NULL,
    rating INT CHECK (rating <= 10)
)
`)

    }
}