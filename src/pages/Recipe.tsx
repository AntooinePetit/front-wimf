import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
        throw new Error(res.message);
      }

      setRecipe(res);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      console.log(error);
      setReqError("yes");
    }
  };

  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main>
        {/* TODO: Ajouter bouton retour */}
        {/* TODO: Gérer l'affichage d'erreur selon erreur réseau ou recette introuvable */}
        {isLoading ? (
          ""
        ) : reqError ? (
          <h1 className="error"></h1>
        ) : (
          <RecipeHead name={recipe.name_recipe} image={recipe.image_recipe} />
        )}
      </main>

      <NavBar active={"recipes"} />
    </>
  );
};

export default Recipe;
