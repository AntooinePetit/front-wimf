import { Sparkles } from "lucide-react";
import { useState } from "react";
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
  onGenerateRecipe: () => void;
  isGenerating: boolean;
}

const ScannerRecipesResults = ({
  recipes,
  onGenerateRecipe,
  isGenerating,
}: ScannerRecipesResultsProps) => {
  const [recipesShown, setRecipesShown] = useState(8);

  return (
    <div id="scanner-recipes-result">
      {recipes.length === 0 && <p><strong>Aucun résultat</strong></p>}

      <div>
        {recipes.slice(0, recipesShown).map((recipe) => (
          <Link
            to={`/recipes/recipe/${recipe.id_recipe}`}
            key={recipe.id_recipe}
          >
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
      {recipesShown < recipes.length && (
        <button
          className="button"
          onClick={() =>
            setRecipesShown((prev) => Math.min(prev + 8, recipes.length))
          }
        >
          Afficher plus de résultats
        </button>
      )}

      <button
        className="button generate-button"
        onClick={onGenerateRecipe}
        disabled={isGenerating}
      >
        <Sparkles size={20} />
        {isGenerating
          ? "Génération..."
          : "Générer une recette à partir des ingrédients"}
      </button>
    </div>
  );
};

export default ScannerRecipesResults;
