// import { useRecipeStore } from '../store/recipeStore';

// const RecipeList = () => {
//   const recipes = useRecipeStore((state) => state.recipes);

//   return (
//     <div>
//       <h2>Recipe List</h2>
//       {recipes.length === 0 && <p>No recipes added yet.</p>}

//       {recipes.map((recipe) => (
//         <div key={recipe.id} style={{ marginBottom: '15px' }}>
//           <h3>{recipe.title}</h3>
//           <p>{recipe.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RecipeList;


// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes added yet.</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
              {recipe.title}
            </Link>
          </h3>
          <p>{recipe.description}</p>
          <div>
            <Link to={`/edit/${recipe.id}`} style={{ marginRight: 10 }}>Edit</Link>
            <Link to={`/recipes/${recipe.id}`}>Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
