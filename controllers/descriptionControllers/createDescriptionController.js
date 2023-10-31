// Import the necessary helper functions
import { descriptionHelperFunctions } from "../../js/descriptions-helper-functions/descriptions.js";

export async function createDescriptionController(req, res) {
  try {
    const data = req.body;
    const description = await descriptionHelperFunctions.createDescription(
      data
    );
    res.status(201).json({ status: "Success", data: description });
  } catch (error) {
    console.error(
      "Error creating description: Error originated in createDescriptionController.js",
      error
    );
    res
      .status(500)
      .json({
        status: "error",
        message:
          "Internal server error: Error creating description - error originated in createDescriptionController.js",
      });
  }
}
