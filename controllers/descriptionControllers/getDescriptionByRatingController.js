// Import the necessary helper functions
import { descriptionHelperFunctions } from "../../js/descriptions-helper-functions/descriptions.js";

// Create function to get wine by colour
export async function getDescriptionByRatingController(req, res) {
  try {
    // Declare variable with the required name x
    const descrip = req.params.name;
    const descripByRating =
      await descriptionHelperFunctions.getDescriptionByRating(descrip);
    res.status(200).json({ status: "success", data: descripByRating });
  } catch (error) {
    console.error(`Error retrieving descriptiog by rating:`, error);
    res.status(500).json({
      status: "error",
      message:
        "Internal Server Error: Error retrieving descriptiog by rating - origin getDescriptionByRatingController.js",
    });
  }
}
