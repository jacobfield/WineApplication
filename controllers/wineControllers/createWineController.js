// Import the necessary helper functions
import { wineHelperFunctions } from "../path/to/wine-helper-functions";

export async function createWineController(req, res) {
  try {
    const data = req.body;
    const wine = await wineHelperFunctions.createWine(data);
    res.status(201).json({ status: "success", data: wine });
  } catch (error) {
    console.error(
      "Error creating wine: Error originated in createWineController",
      error
    );
    res.status(500).json({
      status: "error",
      message:
        "Internal Server Error: Error retrieving all Wines - origin getWineByNameController.js",
    });
  }
}
