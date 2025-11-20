import { Link } from "react-router-dom";
import { config } from "../config";
import "../styles/components/ScannerRecipesResults.scss";

interface Recipe {
  id_recipe: number;
  name_recipe: string;
  image_recipe: string;
}

interface ScannerRecipesResultsProps {
  recipes: Recipe[];
}

const ScannerRecipesResults = ({ recipes }: ScannerRecipesResultsProps) => {
  return (
    <div id="scanner-recipes-result">
      {recipes.map((recipe) => (
        <Link to={`/recipes/recipe/${recipe.id_recipe}`} key={recipe.id_recipe}>
          <article>
            <img
              src={`${config.apiUrl}/uploads/recipes/${recipe.image_recipe}`}
              alt={`Photo de ${recipe.name_recipe.toLowerCase()}`}
            />
            <h3>{recipe.name_recipe}</h3>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default ScannerRecipesResults;
