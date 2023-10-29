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
import descriptionsHelperFunctions from "../js/descriptions-helper-functions/descriptions.js";
const {
  getDescriptions,
  getDescriptionsById,
  getDescriptionsByRating,
  createDescriptions,
  deleteDescriptionById,
  updateDescriptionById,
} = descriptionsHelperFunctions;

// GET request route handler - endpoint retreive all descriptions
app.get("/descriptions/", async function (req, res) {
  try {
    // 'descriptions' is the imported postgres "SELECT * FROM descriptions" statement
    const descriptions = await getDescriptions();
    // set response status, format to JSON, present obj
    res.status(200).json({ status: "success", data: wines });
    // catch any error
  } catch (error) {
    console.error(`Error retrieving all descriptions:`, error);
    res.sendStatus(500).json({
      ststus: "error",
      message: "Internal Server Error: Error retrieving all wines",
    });
  }
});

// GET route handler - endpoint retreive a description by id
app.get("/descriptions/:id", async function (req, res) {
  try {
    const id = rew.params.description_id;
    const descriptions = await getDescriptionsById(id);
    res.status(200).json({ status: "success", data: descriptions });
  } catch (error) {
    console.error(`Error retrieving that description ID:`, error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error: Error retrieving description by ID",
    });
  }
});

// GET route handler - endpoint retreive a description by rating
app.get("/descriptions/:rating", async function (req, res) {
  try {
    const rating = rew.params.rating;
    const descriptions = await getDescriptionsByRating(rating);
    res.status(200).json({ status: "success", data: descriptions });
  } catch (error) {
    console.error(`Error retrieving that description rating:`, error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error: Error retrieving description by rating",
    });
  }
});

//POST request - endpoint create a new description
app.post("/descriptions/", async function (req, res) {
  try {
    const newDescription = req.body;
    const description = await createDescriptions(newDescription);
    res.status(201).json({ status: "success", data: wines });
  } catch (error) {
    console.error(`Error creating new description:`, error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error: Error creating description",
    });
  }
});

// PATCH route handler - endpoint - update description by ID
app.patch("/descriptions/:id", async function (req, res) {
  try {
    const id = req.params.description_id;
    const data = req.body;
    const descriptions = await updateDescriptionById(id, data);
    res.status(200).json({ status: "success", data: descriptions });
  } catch (error) {
    console.error(`Error updating description:`, error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error: Error updating description",
    });
  }
});

// DELETE route handler - endpoint = delete description by ID
app.delete("/descriptions/:id", async function (req, res) {
  try {
    const descriptionId = req.params.description_id;
    const description = await deleteDescriptionById(descriptionId);
    res.status(200).json({ status: "success", data: description });
  } catch (error) {
    console.error(`Error deleting description:`, error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error: Error deleting description",
    });
  }
});
