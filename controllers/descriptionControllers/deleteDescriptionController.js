// Import the necessary helper functions
import { descriptionHelperFunctions } from "../../js/descriptions-helper-functions/descriptions.js";

export async function deleteDescriptionController(req, res) {
  try {
    const id = req.params.description_id;

    // Check if the description with the given ID exists
    const existingDescription =
      await descriptionHelperFunctions.getDescriptionById(id);
    if (!existingDescription) {
      res.status(404).json({
        status: "error",
        message: "Description ID not found",
      });
      return;
    }

    const descrip = await descriptionHelperFunctions.deleteDescriptionById(id);
    res
      .status(200)
      .json({ status: "success deleting description by ID", data: descrip });
  } catch (error) {
    console.error(
      `Error deleting description. Error origin - deleteDescriptionByIdController`,
      error
    );
    res.status(500).json({
      status: "error",
      message:
        "Internal Server Error: Error deleting description - origin deleteDescriptionByIDController.js",
    });
  }
}
