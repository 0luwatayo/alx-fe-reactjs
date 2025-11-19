// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === recipeId));
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  if (!recipe) {
    return (
      <div style={{ padding: 20 }}>
        <p>Recipe not found.</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ id: recipeId, title, description });
    navigate(`/recipes/${recipeId}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe Title"
            style={{ width: '100%', padding: 8 }}
            required
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Recipe Description"
            style={{ width: '100%', padding: 8, minHeight: 120 }}
            required
          />
        </div>
        <button type="submit" style={{ marginRight: 8 }}>Save</button>
        <button type="button" onClick={() => navigate(-1)}>Cancel</button>
      </form>
    </div>
  );
};

export default EditRecipeForm;
