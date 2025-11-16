import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function RecipeList() {
  const fetchRecipes = useRecipeStore(s => s.fetchRecipes);
  const recipes = useRecipeStore(s => s.filteredRecipes());

  useEffect(() => { fetchRecipes(); }, [fetchRecipes]);

  return (
    <div className="grid gap-4">
      {recipes.map(r => (
        <div
          key={r.id}
          className="p-4 border rounded bg-white shadow"
        >
          <h3 className="text-lg font-bold text-blue-700">
            <Link to={`/recipes/${r.id}`}>{r.title}</Link>
          </h3>
          <p className="text-gray-700">{r.description}</p>
          <small className="text-gray-500">
            Prep Time: {r.prep_time || 0} minutes
          </small>
        </div>
      ))}

      {recipes.length === 0 && (
        <p className="text-gray-600">No recipes match your filters.</p>
      )}
    </div>
  );
}
