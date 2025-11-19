// src/components/RecipeDetails.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === recipeId));
  const navigate = useNavigate();

  if (!recipe) {
    return (
      <div style={{ padding: 20 }}>
        <p>Recipe not found.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: 20 }}>
        <Link to={`/edit/${recipe.id}`} style={{ marginRight: 10 }}>Edit Recipe</Link>
        <DeleteRecipeButton id={recipe.id} onDeleted={() => navigate('/')} />
      </div>
    </div>
  );
};

export default RecipeDetails;
