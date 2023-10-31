// Import the necessary helper functions
import { descriptionHelperFunctions } from "../../js/descriptions-helper-functions/descriptions.js";

export async function getAllDescriptionsController(req, res) {
  try {
    // Declare a variable and await the helper function to get all descriptions
    const allDescrip = await descriptionHelperFunctions.getDescriptions();
    // Create response object
    res.status(200).json({ status: "Success", data: allDescrip });
  } catch (error) {
    console.error(`Error retrieving all descriptions:`, error);
    res.status(500).json({
      status: "error",
      message:
        "Internal Server Error: Error retrieving all descrioptions. Error originated in getAllDescriptionsController.js",
    });
  }
}
