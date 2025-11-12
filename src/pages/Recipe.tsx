import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import RecipeHead from "../components/RecipeHead";
import { config } from "../config";

/*
cooking_time: 80
id_recipe: 1
image_recipe: "boulettes-aperitives.png"
instructions: {steps: Array(4)}
name_recipe: "Boulettes apéritives au cocktail"
nutritional_values_recipe: {totalFat: {…}, saturatedFat: {…}, cholesterol: {…}, sodium: {…}, totalCarbohydrate: {…}, …}
preparation_time: 20
resting_time: 0
servings_recipe: 10
total_time: 100
*/

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [reqError, setReqError] = useState<string | null>(null);
  const { id } = useParams();

  const url = config.apiUrl;

  const getRecipe = async () => {
    try {
      const req = await fetch(`${url}/api/v1/recipes/${id}`);

      const res = await req.json();

      console.log(res);

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
      setReqError("Erreur serveur");
    }
  };

  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  if (isLoading)
    return (
      <>
        <main className="loading-screen">
          <button className="orange-return-button" onClick={goBack}>
            <ChevronLeft size={100} />
          </button>
          <span className="loader"></span>
        </main>

        <NavBar active={"recipes"} />
      </>
    );

  if (reqError)
    return (
      <>
        <main className="error-screen">
          <button className="orange-return-button" onClick={goBack}>
            <ChevronLeft size={100} />
          </button>

          <h1 className="error">{reqError}</h1>
        </main>

        <NavBar active={"recipes"} />
      </>
    );

  return (
    <>
      <main>
        <button className="orange-return-button" onClick={goBack}>
          <ChevronLeft size={100} />
        </button>
        {/* TODO: Gérer l'affichage d'erreur selon erreur réseau ou recette introuvable */}

        <RecipeHead name={recipe.name_recipe} image={recipe.image_recipe} />
      </main>

      <NavBar active={"recipes"} />
    </>
  );
};

export default Recipe;
