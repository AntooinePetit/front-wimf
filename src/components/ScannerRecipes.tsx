import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  generateRecipe,
  getIngredientsByIds,
  searchRecipesByIngredients,
} from "../services/api";
import "../styles/components/ScannerRecipes.scss";
import ScannerRecipesIngredients from "./ScannerRecipesIngredients";
import ScannerRecipesResults from "./ScannerRecipesResult";

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
  const [isGenerating, setIsGenerating] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ingredients, setIngredients] = useState<any[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [recipes, setRecipes] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const searchQuery = search.replaceAll(" ", "+");
      const [ingredientsRes, recipesRes] = await Promise.all([
        getIngredientsByIds(searchQuery),
        searchRecipesByIngredients(searchQuery),
      ]);

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

  const handleGenerateRecipe = async () => {
    setIsGenerating(true);
    try {
      const data = await generateRecipe(search);
      navigate("/recipes/recipe/generated", { 
        state: { 
          recipe: data.recipe,
          ingredients: data.ingredients 
        } 
      });
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsGenerating(false);
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

      {!isLoading && !isError && (
        <div className="container">
          <ScannerRecipesIngredients ingredients={ingredients} />

          <ScannerRecipesResults
            recipes={recipes}
            onGenerateRecipe={handleGenerateRecipe}
            isGenerating={isGenerating}
          />
        </div>
      )}
    </section>
  );
};

export default ScannerRecipes;
