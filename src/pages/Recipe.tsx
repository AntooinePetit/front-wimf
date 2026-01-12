import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useIsMobile } from "../hooks/useIsMobile";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IngredientsRecipe from "../components/IngredientsRecipe";
import NavBar from "../components/NavBar";
import NutritionalValuesRecipe from "../components/NutritionalValuesRecipe";
import RecipeHead from "../components/RecipeHead";
import StepsRecipe from "../components/StepsRecipe";
import TimeRecipe from "../components/TimeRecipe";
import { getRecipeById, getUserById } from "../services/api";
import { useAuthStore } from "../store/authStore";
import "../styles/pages/Recipe.scss";

const Recipe = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [recipe, setRecipe] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [reqError, setReqError] = useState<string | null>(null);
  const [userPreferences, setUserPreferences] = useState<{
    nutritional_values_user: boolean;
    calories_user: boolean;
  } | null>(null);
  const { id } = useParams();
  const location = useLocation();
  const token = useAuthStore((state) => state.token);
  const isGenerated = id === "generated";
  const isMobile = useIsMobile();

  const getRecipe = async () => {
    if (isGenerated) {
      if (location.state?.recipe) {
        setRecipe({
          ...location.state.recipe,
          ingredients: location.state.ingredients,
        });
      } else {
        setReqError("Aucune recette générée trouvée");
      }
      setIsLoading(false);
      return;
    }

    try {
      const res = await getRecipeById(id!);
      if (res.message && res.message == "Recette introuvable") {
        setReqError(res.message);
        setIsLoading(false);
        return;
      }
      setRecipe(res);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setReqError("Une erreur est survenue, réessaie plus tard !");
    }
  };

  const getUserPreferences = async () => {
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const userId = payload.id;
        const res = await getUserById(userId, token);
        setUserPreferences({
          nutritional_values_user: res.nutritional_values_user,
          calories_user: res.calories_user,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getRecipe();
    getUserPreferences();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  // TODO: Responsive desktop

  if (isLoading)
    return (
      <>
        {!isMobile && <Header />}

        <main className="loading-screen">
          <button className="orange-return-button" onClick={goBack}>
            <ChevronLeft size={100} />
          </button>
          <span className="loader" />
        </main>

        {isMobile && <NavBar active={"recipes"} />}

        {!isMobile && <Footer />}
      </>
    );

  if (reqError) {
    document.title = "Erreur";
    return (
      <>
        {!isMobile && <Header />}

        <main className="error-screen">
          <button className="orange-return-button" onClick={goBack}>
            <ChevronLeft size={100} />
          </button>

          <h1 className="error">{reqError}</h1>
        </main>

        {isMobile && <NavBar active={"recipes"} />}

        {!isMobile && <Footer />}
      </>
    );
  }

  document.title = recipe.name_recipe;

  return (
    <>
      {!isMobile && <Header />}

      <main>
        {isMobile && (
          <button
            className="orange-return-button return-button"
            onClick={goBack}
          >
            <ChevronLeft size={100} />
          </button>
        )}

        <RecipeHead name={recipe.name_recipe} image={recipe.image_recipe} />

        {isGenerated && (
          <div id="is-ia">
            <strong>⚠️ Recette générée par IA</strong>
            <p>
              Cette recette a été créée automatiquement. Vérifiez toujours les
              ingrédients, les quantités et les temps de cuisson. En cas
              d'allergies ou de régime spécifique, consultez un professionnel de
              santé.
            </p>
          </div>
        )}

        <TimeRecipe
          prep={recipe.preparation_time}
          cook={recipe.cooking_time}
          rest={recipe.resting_time}
        />

        <IngredientsRecipe
          id={recipe.id_recipe}
          servings={recipe.servings_recipe}
          ingredients={isGenerated ? recipe.ingredients : undefined}
        />

        <StepsRecipe steps={recipe.instructions.steps} />

        {(!userPreferences ||
          userPreferences.nutritional_values_user ||
          userPreferences.calories_user) && (
          <NutritionalValuesRecipe
            nutritional={recipe.nutritional_values_recipe}
            showCaloriesOnly={
              userPreferences?.calories_user &&
              !userPreferences?.nutritional_values_user
            }
            hideCalories={
              userPreferences?.nutritional_values_user &&
              !userPreferences?.calories_user
            }
          />
        )}
      </main>

      {isMobile && <NavBar active={"recipes"} />}

      {!isMobile && <Footer />}
    </>
  );
};

export default Recipe;
