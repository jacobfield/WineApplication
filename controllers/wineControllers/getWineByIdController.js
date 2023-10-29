// Import the necessary helper functions
import { wineHelperFunctions } from "../path/to/wine-helper-functions";

// Create a function to get wine by ID
export async function getWineByIdController(req, res) {
  try {
    // Declare variable with the required ID x
    const wine = req.params.id;
    const wineByIDVar = await wineHelperFunctions.getWineById(wine);
    res.status(200).json({ status: "success", data: wineByIDVar });
  } catch (error) {
    console.error(`Error retrieving wines:`, error);
    res.status(500).json({
      status: "error",
      message:
        "Internal Server Error: Error retrieving all Wines - origin getWineByIdController.js",
    });
  }
}
