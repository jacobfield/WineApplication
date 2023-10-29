// Import the necessary helper functions
import { wineHelperFunctions } from "../path/to/wine-helper-functions";

// Create function to get wine by colour
export async function getWineByColourController(req, res) {
  try {
    // Declare variable with the required ID x
    const wine = req.params.colour;
    const wineByColourVar = await wineHelperFunctions.getWineBycolour(wine);
    res.status(200).json({ status: "success", data: wineByColourVar });
  } catch (error) {
    console.error(`Error retrieving wines:`, error);
    res.status(500).json({
      status: "error",
      message:
        "Internal Server Error: Error retrieving all Wines - origin getWineByColourController.js",
    });
  }
}
