import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.model("Recipe", RecipeSchema);
