import { useRecipeStore } from "./recipeStore";

export default function SearchBar() {
  const searchTerm = useRecipeStore(s => s.searchTerm);
  const setSearchTerm = useRecipeStore(s => s.setSearchTerm);
  const maxPrepTime = useRecipeStore(s => s.maxPrepTime);
  const setMaxPrepTime = useRecipeStore(s => s.setMaxPrepTime);
  const fetchRecipes = useRecipeStore(s => s.fetchRecipes);

  return (
    <div className="flex gap-3 mb-4">
      <input
        className="p-2 border rounded w-1/2"
        placeholder="Search recipes"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <input
        className="p-2 border rounded w-1/4"
        type="number"
        placeholder="Max prep time"
        value={maxPrepTime}
        onChange={e => setMaxPrepTime(e.target.value)}
      />
      <button
        onClick={fetchRecipes}
        className="bg-blue-600 text-white px-3 rounded"
      >
        Go
      </button>
    </div>
  );
}
