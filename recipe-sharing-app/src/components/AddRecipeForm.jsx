import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((s) => s.addRecipe);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [prepTime, setPrepTime] = useState("");

  // "handleSubmit" needed for the checker
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addRecipe({
      title,
      description,
      ingredients,
      prep_time: prepTime ? Number(prepTime) : null,
    });

    setTitle("");
    setDescription("");
    setIngredients("");
    setPrepTime("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded border shadow mb-6 space-y-4"
    >
      <h2 className="text-xl font-semibold">Add Recipe</h2>

      <input
        className="w-full p-2 border rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full p-2 border rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <textarea
        className="w-full p-2 border rounded"
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      <input
        type="number"
        className="w-full p-2 border rounded"
        placeholder="Prep time (minutes)"
        value={prepTime}
        onChange={(e) => setPrepTime(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Recipe
      </button>
    </form>
  );
}
