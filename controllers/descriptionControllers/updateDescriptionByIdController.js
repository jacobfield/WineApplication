// Import the necessary helper functions
import { descriptionHelperFunctions } from "../../js/descriptions-helper-functions/descriptions.js";

export async function updateDescriptionByIdController(req, res) {
  try {
    const id = req.params.description_id;
    const data = req.body;
    const newDescription =
      await descriptionHelperFunctions.updateDescriptionById(id, data);
    res.status(200).json({ status: "Success", data: newDescription });
  } catch (error) {
    console.error(
      "Error updating wine: error originated in updateDescriptionByIdController.js",
      error
    );
    res.status(500).json({
      status: "Error",
      message:
        "Error updating wine: error originated in updateDescriptionByIdController.js",
    });
  }
}
