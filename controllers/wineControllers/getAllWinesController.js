// Import the necessary helper functions
import { wineHelperFunctions } from "../../js/wine-helper-functions/wines.js";

export async function getAllWinesController(req, res) {
  try {
    // Declare a variable and await the helper function to get all wines
    const allWines = await wineHelperFunctions.getWines();
    // Create response object
    res.status(200).json({ status: "success", data: allWines });
  } catch (error) {
    console.error(`Error retrieving wines:`, error);
    res.status(500).json({
      status: "error",
      message:
        "Internal Server Error: Error retrieving all Wines - origin getAllWinesController.js",
    });
  }
}
