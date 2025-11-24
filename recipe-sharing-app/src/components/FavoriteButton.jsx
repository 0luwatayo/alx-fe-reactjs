import React from "react";
import { useRecipeStore } from "../recipeStore";

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() =>
        isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)
      }
      style={{
        padding: "8px 15px",
        borderRadius: "6px",
        marginTop: "10px",
        cursor: "pointer",
      }}
    >
      {isFavorite ? "★ Remove Favorite" : "☆ Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
