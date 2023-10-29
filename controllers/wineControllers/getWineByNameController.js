// Import the necessary helper functions
import { wineHelperFunctions } from "../../js/wine-helper-functions/wines.js";

// Create function to get wine by colour
export async function getWineByNameController(req, res) {
  try {
    // Declare variable with the required name x
    const wine = req.params.name;
    const wineByNameVar = await wineHelperFunctions.getWineByname(wine);
    res.status(200).json({ status: "success", data: wineByNameVar });
  } catch (error) {
    console.error(`Error retrieving wines:`, error);
    res.status(500).json({
      status: "error",
      message:
        "Internal Server Error: Error retrieving all Wines - origin getWineByNameController.js",
    });
  }
}
