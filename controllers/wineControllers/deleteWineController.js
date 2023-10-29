// Import the necessary helper functions
import { wineHelperFunctions } from "../path/to/wine-helper-functions";

export async function deleteWineByIdController(req, res) {
  try {
    const id = req.params.id;
    const wine = await wineHelperFunctions.deleteWine(id);
  } catch (error) {
    console.error(
      `Error deleting wine. Error Originated in deleteWineController.js`,
      error
    );
    res.status(500).json({
      status: "error",
      message:
        "Internal Server Error: Error deleting wine - origin deleteWineController.js",
    });
  }
}
