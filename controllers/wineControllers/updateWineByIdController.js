// Import the necessary helper functions
import { wineHelperFunctions } from "../../js/wine-helper-functions/wines.js";

export async function updateWineByIdController(req, res) {
  try {
    const id = req.params.id;
    const data = req.body;
    const wine = await wineHelperFunctions.updateWineById(id, data);
    res.status(200).json({ status: "Success", data: wine });
  } catch (error) {
    console.error(
      "Error updating wine: error originated in updateWineByIdController.js",
      error
    );
    res.status(500).json({
      status: "Error",
      message:
        "Error updating wine: error originated in updateWineByIdController.js",
    });
  }
}
