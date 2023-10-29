// Import the required modules
import express from "express";
import morgan from "morgan";
import { wineRoutes } from "./routes/wineRoutes.js";
// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT || 4567;
// Middleware
// Morgan is used for logging HTTP requests to the console in a developer-friendly format
app.use(morgan("dev"));
// express.json() middleware is used to parse incoming JSON requests
app.use(express.json());
app.use(express.static("public"));

app.use("/wines", wineRoutes);

export default app;
