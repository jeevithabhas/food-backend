import Recipe from "../models/Recipe.js";

// Save favorite recipe
export const saveFavorite = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: "Error saving recipe", error });
  }
};

// Get all favorite recipes
export const getFavorites = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching favorites", error });
  }
};

// Delete a favorite recipe (Fixed)
export const deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await Recipe.findByIdAndDelete(id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json({ message: "Recipe removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting recipe", error });
  }
};
