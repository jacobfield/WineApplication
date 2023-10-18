// Import delete tables function
import { dropTables } from "./reset.js";

// message to show function successfully performed
dropTables()
  .then(() => {
    // Message to show function successfully performed
    console.log("Tables dropped successfully");
  })
  .catch((error) => {
    // Handle any errors that occurred during the deletion process
    console.error("Error dropping tables:", error);
  });
