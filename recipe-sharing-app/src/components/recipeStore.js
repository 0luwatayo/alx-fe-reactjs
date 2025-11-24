// import create from "zustand";

// export const useRecipeStore = create((set) => ({
//   recipes: [],
//   searchTerm: "",
//   filteredRecipes: [],

//   setSearchTerm: (term) =>
//     set((state) => {
//       const filtered = state.recipes.filter((recipe) =>
//         recipe.title.toLowerCase().includes(term.toLowerCase())
//       );

//       return {
//         searchTerm: term,
//         filteredRecipes: filtered,
//       };
//     }),

//   setRecipes: (newRecipes) =>
//     set((state) => {
//       const filtered = newRecipes.filter((recipe) =>
//         recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
//       );

//       return {
//         recipes: newRecipes,
//         filteredRecipes: filtered,
//       };
//     }),
// }));

import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // ---------- FAVORITES ----------
  favorites: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // ---------- RECOMMENDATIONS ----------
  recommendations: [],

  generateRecommendations: () =>
    set((state) => {
      // Simple random mock recommendation logic for ALX
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.4
      );

      return { recommendations: recommended };
    }),

  // ---------- SEARCH ----------
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );

      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),

  setRecipes: (newRecipes) =>
    set((state) => {
      const filtered = newRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );

      return {
        recipes: newRecipes,
        filteredRecipes: filtered,
      };
    }),
}));
