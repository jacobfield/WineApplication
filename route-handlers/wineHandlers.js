// Import the required modules
import express from "express";
import morgan from "morgan";

// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

// Middleware
app.use(morgan("dev")); // Morgan is used for logging HTTP requests to the console in a developer-friendly format
app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

import wineHelperFunctions from "../js/wine-helper-functions/wines.js";

const {
  getWines,
  getWineById,
  getWineByName,
  getWineByColour,
  createWine,
  UpdateWineById,
  deleteWineById,
} = wineHelperFunctions;

// GET Request route handler - endpoint = retrieve all wines
app.get("/wine/", async function (req, res) {
  try {
    // 'wines' is the imported postgres SELECT * FROM wines statement
    const wines = await getWines();
    //set response status, formats response to JSON object, and presents the data obtained above
    res.status(200).json({ status: "success", data: wines });
    // if there is an error, log the error to the console and send an error response
  } catch (error) {
    console.error(`Error retrieving all wines:`, error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error: Error retrieving all wines ",
    });
  }
});
// GET route handler - endpoint = retreive a wine by id
app.get("/wines/:id", async function (req, res) {
  try {
    // 'wines' is the imported postgres SELECT * FROM wines  WHERE id = x statement

    const id = req.params.id;
    const wines = await getWineById(id);
    //set response status, formats response to JSON object, and presents the data obtained above
    res.status(200).json({ status: "success", data: wines });
  } catch (error) {
    console.error(`Error retrieving that ID:`, error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error: Error retrieving Wine by ID",
    });
  }
});
