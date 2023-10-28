// Import the required modules
import express from "express";
import morgan from "morgan";

import { wineHelperFunctions } from "../js/wine-helper-functions/wines.js";

const {
  getWines,
  getWineById,
  getWineByName,
  getWineByColour,
  createWine,
  updateWineById,
  deleteWineById,
} = wineHelperFunctions;

// Initialize the express app
export const app = express();
export const wineRoutes = express.Router();
// Retrieve the port number from environment variables
const PORT = process.env.PORT || 3456;

// Middleware
app.use(morgan("dev")); // Morgan is used for logging HTTP requests to the console in a developer-friendly format
app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

//

// PATCH route handler - endpoint = update wine by ID
wineRouters.patch("/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const wines = await updateWineById(id, data);
    res.status(200).json({ status: "success", data: wines });
  } catch (error) {
    console.error(`Error updating wine:`, error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error: Error updating wine",
    });
  }
});

// DELETE route handler - endpoint = delete wine by id
wineRouters.delete("/:id", async function (req, res) {
  try {
    const wineId = req.params.id;
    const wines = await deleteWineById(wineId);
    res.status(200).json({ status: "success", data: wines });
  } catch (error) {
    console.error(`Error deleting wine:`, error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error: Error deleting wine",
    });
  }
});

// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
