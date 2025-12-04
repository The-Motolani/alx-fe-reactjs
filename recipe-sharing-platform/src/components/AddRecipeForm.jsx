import { useState } from "react";

export default function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if(!title.trim()) {
            newErrors.title = "Title is required";
        }

        if(!ingredients.trim()) {
            newErrors.ingredients = "Ingredients are required";
        } else {
            const ingredientsList = ingredients.split("\n");
            if (ingredientsList.length < 2) {
                newErrors.ingredients = "Add at least two ingredients (each on a new line)"
            }
        }

        if (!steps.trim()) {
            newErrors.steps = "Preparation steps are required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const newRecipe = {
            id: Date.now(),
            title,
            ingredients: ingredients.split("\n"),
            instructions: steps.split("\n"),
        };

        console.log("Recipe submitted:", newRecipe);

        alert("Recipe added successfully");

        setTitle("")
        setIngredients("")
        setSteps("")
        setErrors({})
    };

     return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg w-full max-w-xl p-6"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h1>

        {/* Title */}
        <label className="block mb-2 font-semibold">Recipe Title</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && (
          <p className="text-red-600 text-sm mb-4">{errors.title}</p>
        )}

        {/* Ingredients */}
        <label className="block mb-2 font-semibold">Ingredients</label>
        <textarea
          className="w-full border border-gray-300 rounded p-2 h-32 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add each ingredient on a new line"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        {errors.ingredients && (
          <p className="text-red-600 text-sm mb-4">{errors.ingredients}</p>
        )}

        {/* Steps */}
        <label className="block mb-2 font-semibold">Preparation Steps</label>
        <textarea
          className="w-full border border-gray-300 rounded md:rounded-xl p-2 h-32 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Add each step on a new line"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        {errors.steps && (
          <p className="text-red-600 text-sm mb-4">{errors.steps}</p>
        )}

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-black py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}