// import create tables function
import { createTables } from "./reset.js";

// call create tables function
createTables()
  .then(() => {
    // Message to show function successfully performed
    console.log("Tables created successfully");
  })
  .catch((error) => {
    // Handle any errors that occurred during the deletion process
    console.error("Error creating tables:", error);
  });
