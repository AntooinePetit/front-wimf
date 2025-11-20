import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../config";
import "../styles/components/ScannerRecipes.scss";

interface ScannerRecipesProps {
  search: string;
}

const ScannerRecipes = ({ search }: ScannerRecipesProps) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ingredients, setIngredients] = useState<any[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [recipes, setRecipes] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const [reqIngredients, reqRecipes] = await Promise.all([
        fetch(
          `${config.apiUrl}/api/v1/ingredients/ingredient/${search.replaceAll(
            " ",
            "+"
          )}`
        ),
        fetch(
          `${
            config.apiUrl
          }/api/v1/recipes/search/ingredients/${search.replaceAll(" ", "+")}`
        ),
      ]);

      const ingredientsRes = await reqIngredients.json();
      const recipesRes = await reqRecipes.json();

      const list = ingredientsRes.map(
        (ingredient: { id_ingredient: number; name_ingredient: string }) => ({
          id: ingredient.id_ingredient,
          name: ingredient.name_ingredient,
        })
      );

      setIngredients(list);
      setRecipes(recipesRes);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="scanner-recipes">
      <div id="section-scanner-recipes-head">
        <button
          className="white-return-button return-button"
          onClick={() => goBack()}
        >
          <ChevronLeft size={75} />
        </button>
        <h1>Résultats</h1>
      </div>

      {isLoading && (
        <div>
          <span className="loader" />
        </div>
      )}

      {isError && (
        <div>
          <p className="error">Une erreur est survenue</p>
        </div>
      )}

      {(!isLoading && !isError) && (
        <>
          <div>
            <h2>Ingrédients</h2>
            {ingredients.map((ingredient) => (
              <p>test</p>
            ))}
          </div>

          <div>
            <h2>Recettes</h2>
            {recipes.map((recipe) => (
              <p>test recette</p>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default ScannerRecipes;
