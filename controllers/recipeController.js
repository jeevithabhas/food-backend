import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;

// Fetch recipes from Spoonacular
export const getRecipes = async (req, res) => {
  try {
    const { query } = req.query;
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${SPOONACULAR_API_KEY}`
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes" });
  }
};

// Fetch full recipe details (instructions, nutrition)
export const getRecipeDetails = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch recipe details
    const recipeResponse = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${SPOONACULAR_API_KEY}`
    );

    const recipe = recipeResponse.data;

    // Extract nutrition details safely
    const nutrition = recipe.nutrition?.nutrients || [];

    const getNutrient = (name) => {
      const nutrient = nutrition.find((item) => item.name === name);
      return nutrient ? `${nutrient.amount} ${nutrient.unit}` : "N/A";
    };

    const recipeData = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      instructions: recipe.instructions || "No instructions available.",
      nutrition: {
        calories: getNutrient("Calories"),
        carbs: getNutrient("Carbohydrates"),
        protein: getNutrient("Protein"),
        fat: getNutrient("Fat"),
      },
    };

    res.json(recipeData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipe details" });
  }
};
