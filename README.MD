# Recipe App

A full-stack web application that allows users to manage their favorite recipes and fetch recipes from the Spoonacular API.

## Key Features

1. **Save Favorite Recipes:** Users can add recipes to their list of favorites.
2. **Get Favorite Recipes:** Users can retrieve all their saved favorite recipes.
3. **Delete Favorite Recipes:** Users can remove a recipe from their favorites.
4. **Fetch Recipes:** Users can search for recipes from the Spoonacular API based on a search query.
5. **Recipe Details:** Users can get detailed information about a recipe, including instructions and nutrition.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **External API:** Spoonacular API for fetching recipe data
- **Environment Variables:** dotenv for managing API keys and other sensitive information
- **Others:** Axios for making HTTP requests, Cors for handling cross-origin requests

## Overview

The application connects to MongoDB, uses Express.js to handle HTTP requests, and interacts with the Spoonacular API to fetch recipes. It also provides endpoints for saving, retrieving, and deleting favorite recipes.

