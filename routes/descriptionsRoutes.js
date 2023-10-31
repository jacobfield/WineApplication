import express from "express";

import { getAllDescriptionsController } from "../controllers/descriptionControllers/getAllDescriptionsController.js";
import { getDescriptionByIdController } from "../controllers/descriptionControllers/getDescriptionByIdController.js";
import { getDescriptionByRatingController } from "../controllers/descriptionControllers/getDescriptionByRatingController.js";
import { createDescriptionController } from "../controllers/descriptionControllers/createDescriptionController.js";
import { deleteDescriptionController } from "../controllers/descriptionControllers/deleteDescriptionController.js";

export const descriptionRoutes = express.Router();

descriptionRoutes.get("/", getAllDescriptionsController);
descriptionRoutes.get("/:description_id", getDescriptionByIdController);
descriptionRoutes.get("/:rating", getDescriptionByRatingController);
descriptionRoutes.post("/", createDescriptionController);
descriptionRoutes.delete("/:id", deleteDescriptionController);
