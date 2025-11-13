import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import "../styles/components/ShowRecipes.scss";

interface Recipe {
  id_recipe: number;
  name_recipe: string;
  image_recipe: string;
}

const AllRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [i, setI] = useState(0);

  const [reqError, setReqError] = useState<string | null>(null);

  const url = config.apiUrl;

  const getRecipes = async () => {
    try {
      const req = await fetch(`${url}/api/v1/recipes`);

      const res = await req.json();

      setRecipes(res);
      setIsLoading(false);
      setI(8);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setReqError("Une erreur est survenue");
    }
  };

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading)
    return (
      <section id="result">
        <span className="loader" />
      </section>
    );

  if (reqError) {
    document.title = "Erreur";
    return <h2 className="error">{reqError}</h2>;
  }

  return (
    <section id="result" className="testing">
      <h2>Toutes les recettes</h2>
      <div>
        {recipes.slice(0, i).map((recipe) => (
          <Link
            to={`/recipes/recipe/${recipe.id_recipe}`}
            key={recipe.id_recipe}
          >
            <article>
              <img
                src={`${url}/uploads/recipes/${recipe.image_recipe}`}
                alt={`Photo de ${recipe.name_recipe.toLowerCase()}`}
              />
              <h3>{recipe.name_recipe}</h3>
            </article>
          </Link>
        ))}
      </div>
      {i < recipes.length && (
        <button
          className="button"
          onClick={() => setI((prev) => Math.min(prev + 8, recipes.length))}
        >
          Afficher plus de résultats
        </button>
      )}
    </section>
  );
};

export default AllRecipes;
