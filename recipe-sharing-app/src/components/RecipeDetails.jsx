import { useParams, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore(s => s.recipes.find(r => String(r.id) === id));

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="space-y-4">
      <Link to="/" className="text-blue-700 underline">Back</Link>

      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <p>{recipe.description}</p>

      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Prep time:</strong> {recipe.prep_time} minutes</p>

      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={recipe.id} />
    </div>
  );
}
