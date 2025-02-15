import express from "express";
import { getRecipes, getRecipeDetails } from "../controllers/recipeController.js";

const router = express.Router();

// Get recipe list
router.get("/", getRecipes);

// Get full recipe details (instructions, nutrition)
router.get("/:id", getRecipeDetails);

export default router;
