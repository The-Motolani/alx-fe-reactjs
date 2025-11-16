import {useRecipeStore} from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  const favoriteItems = favorites
    .map(id => recipes.find(recipe => recipe.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2>My Favorites</h2>

      {favoriteItems.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
