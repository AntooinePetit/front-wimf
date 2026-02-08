/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import { searchRecipes } from "../services/api";
import "../styles/components/ShowRecipes.scss";

interface SearchResultProps {
  search: string;
}

interface Recipe {
  id_recipe: number;
  name_recipe: string;
  image_recipe: string;
}

const SearchResult = ({ search }: SearchResultProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reqError, setReqError] = useState<string | null>(null);
  const [recipesShown, setRecipesShown] = useState(0);

  const reqSearch = search.split(" ").join("+");

  const getSearchedRecipes = async () => {
    try {
      const res = await searchRecipes(reqSearch);
      setRecipes(res);
      setIsLoading(false);
      setRecipesShown(8);
    } catch (error) {
      console.error(error);
      setReqError("Une erreur est survenue");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSearchedRecipes();
  }, []);

  if (isLoading)
    return (
      <section id="result" className="container">
        <span className="loader" />
      </section>
    );

  if (reqError) {
    return (
      <section id="result" className="container">
        <h1 className="error">{reqError}</h1>
      </section>
    );
  }

  if (recipes.length === 0) {
    return (
      <section id="result" className="container">
        <h2>Aucun résultat pour "{search}"</h2>
      </section>
    );
  }

  return (
    <section id="result" className="container">
      <h2>Résultats pour "{search}"</h2>
      <div>
        {recipes.slice(0, recipesShown).map((recipe) => (
          <Link
            to={`/recipes/recipe/${recipe.id_recipe}`}
            key={recipe.id_recipe}
          >
            <article>
              <img
                src={recipe.image_recipe ? `${config.apiUrl}/uploads/recipes/${recipe.image_recipe}` : "/placeholder.webp"}
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
    </section>
  );
};

export default SearchResult;
