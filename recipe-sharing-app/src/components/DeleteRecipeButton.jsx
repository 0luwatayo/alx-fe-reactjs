// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ id, onDeleted }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (!confirm('Delete this recipe?')) return;
    deleteRecipe(id);
    if (onDeleted) onDeleted();
  };

  return (
    <button onClick={handleDelete} style={{ background: '#e74c3c', color: 'white', padding: '6px 10px', border: 'none', borderRadius: 4 }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
