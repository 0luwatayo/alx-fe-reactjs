// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from '../recipeStore';
import { useNavigate } from "react-router-dom";

// const DeleteRecipeButton = ({ id, onDeleted }) => {
//   const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

//   const handleDelete = () => {
//     if (!confirm('Delete this recipe?')) return;
//     deleteRecipe(id);
//     if (onDeleted) onDeleted();
//   };

function DeleteRecipeButton({ recipeId }) {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();
  
    const handleDelete = () => {
      deleteRecipe(recipeId);
      navigate("/"); // redirect after delete
    };

  return (
    <button onClick={handleDelete} style={{ background: '#e74c3c', color: 'white', padding: '6px 10px', border: 'none', borderRadius: 4 }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;


// import { useRecipeStore } from "../recipeStore";
// import { useNavigate } from "react-router-dom";

// function DeleteRecipeButton({ recipeId }) {
//   const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
//   const navigate = useNavigate();

//   const handleDelete = () => {
//     deleteRecipe(recipeId);
//     navigate("/"); // redirect after delete
//   };

//   return (
//     <button onClick={handleDelete}>
//       Delete Recipe
//     </button>
//   );
// }

// export default DeleteRecipeButton;
