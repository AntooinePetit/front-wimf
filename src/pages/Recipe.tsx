import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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

  const getRecipe = async () => {
    if (isGenerated) {
      if (location.state?.recipe) {
        setRecipe({
          ...location.state.recipe,
          ingredients: location.state.ingredients
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

  if (isLoading)
    return (
      <>
        {window.innerWidth >= 1025 && <Header />}

        <main className="loading-screen">
          <button className="orange-return-button" onClick={goBack}>
            <ChevronLeft size={100} />
          </button>
          <span className="loader" />
        </main>

        {window.innerWidth < 1025 && <NavBar active={"recipes"} />}

        {window.innerWidth >= 1025 && <Footer />}
      </>
    );

  if (reqError) {
    document.title = "Erreur";
    return (
      <>
        {window.innerWidth >= 1025 && <Header />}

        <main className="error-screen">
          <button className="orange-return-button" onClick={goBack}>
            <ChevronLeft size={100} />
          </button>

          <h1 className="error">{reqError}</h1>
        </main>

        {window.innerWidth < 1025 && <NavBar active={"recipes"} />}

        {window.innerWidth >= 1025 && <Footer />}
      </>
    );
  }

  document.title = recipe.name_recipe;

  return (
    <>
      {window.innerWidth >= 1025 && <Header />}

      <main>
        <button className="orange-return-button return-button" onClick={goBack}>
          <ChevronLeft size={100} />
        </button>

        <RecipeHead name={recipe.name_recipe} image={recipe.image_recipe} />

        {isGenerated && (
          <div style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            padding: '12px 16px',
            margin: '16px 20px',
            fontSize: '14px',
            lineHeight: '1.5'
          }}>
            <strong>⚠️ Recette générée par IA</strong>
            <p style={{ margin: '8px 0 0 0' }}>
              Cette recette a été créée automatiquement. Vérifiez toujours les ingrédients, 
              les quantités et les temps de cuisson. En cas d'allergies ou de régime spécifique, 
              consultez un professionnel de santé.
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

      {window.innerWidth < 1025 && <NavBar active={"recipes"} />}

      {window.innerWidth >= 1025 && <Footer />}
    </>
  );
};

export default Recipe;
