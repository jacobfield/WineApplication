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
//Import wine-related helper functions
import {
  getWines,
  getWinesById,
  getWineByName,
  getWineByColour,
  createWine,
  UpdateWineById,
  deleteWineById,
} from "./wines.js";
