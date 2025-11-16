import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  // Core recipes
  recipes: [],

  addRecipe(newRecipe) {
    set((state) => ({
      recipes: [...state.recipes, newRecipe]
    }));
  },

  updateRecipe(updatedRecipe) {
    set((state) => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    }));
  },

  deleteRecipe(id) {
    set((state) => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id)
    }));
  },

  setRecipes(recipes) {
    set({ recipes });
  },

  // Search + Filtering
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm(term) {
    set({ searchTerm: term });
    set((state) => ({
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    }));
  },

  // Favorites
  favorites: [],

  addFavorite(id) {
    set((state) => ({
      favorites: [...state.favorites, id]
    }));
  },

  removeFavorite(id) {
    set((state) => ({
      favorites: state.favorites.filter(fav => fav !== id)
    }));
  },

  // Recommendations (mock)
  recommendations: [],

  generateRecommendations() {
    set((state) => {
      const recommended = state.recipes.filter(recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    });
  }
}));

export default useRecipeStore;
