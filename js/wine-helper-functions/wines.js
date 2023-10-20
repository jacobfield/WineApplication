// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../../db/index.js";

import { createWine } from "./createWine.js";
import { deleteWineById } from "./deleteWineById.js";
import { getWineByColour } from "./getWineByColour.js";
import { getWineById } from "./getWineById.js";
import { getWineByName } from "./getWineByName.js";
import { getWines } from "./getWines.js";
import { updateWineById } from "./updateWineById.js";

export const wineHelperFunctions = {
  createWine,
  deleteWineById,
  getWineByColour,
  getWineById,
  getWineByName,
  getWines,
  updateWineById,
};
