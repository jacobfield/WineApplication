// Import the necessary helper functions
import { descriptionHelperFunctions } from "../../js/descriptions-helper-functions/descriptions.js";

// Create a function to get wine by ID
export async function getDescriptionByIdController(req, res) {
  try {
    // Declare variable with the required ID x
    const description = req.params.description_id;
    const descriptionById = await descriptionHelperFunctions.getDescriptionById(
      description
    );
    console.log(description);

    res
      .status(200)
      .json({ status: "Success searching by ID", data: descriptionById });
  } catch (error) {
    console.error(`Error retrieving description:`, error);
    res.status(500).json({
      status: "error",
      message:
        "Internal Server Error: Error retrieving description - origin getDescriptionByIdController.js",
    });
  }
}
