import express from "express";

import { getAllWinesController } from "../controllers/wineControllers/getAllWinesController.js";
import { getWineByIdController } from "../controllers/wineControllers/getWineByIdController.js";
import { getWineByNameController } from "../controllers/wineControllers/getWineByNameController.js";
import { getWineByColourController } from "../controllers/wineControllers/getWineByColourController.js";
import { createWineController } from "../controllers/wineControllers/createWineController.js";
import { updateWineByIdController } from "../controllers/wineControllers/updateWineByIdController.js";
import { deleteWineController } from "../controllers/wineControllers/deleteWineController.js";

export const wineRoutes = express.Router();

wineRoutes.get("/", getAllWinesController);
wineRoutes / get("/:id", getWineByIdController);
wineRoutes / get("/:wine_name", getWineByNameController);
