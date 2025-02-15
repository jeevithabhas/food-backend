import express from "express";
import { saveFavorite, getFavorites, deleteFavorite } from "../controllers/favoriteController.js";

const router = express.Router();

// Routes for managing favorite recipes
router.post("/", saveFavorite);
router.get("/", getFavorites);
router.delete("/:id", deleteFavorite);

export default router;
