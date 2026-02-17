import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { getIngredientsByRecipeId } from "../services/api";
import "../styles/components/IngredientsRecipe.scss";

interface IngredientsRecipeProps {
  id?: number;
  servings: number;
  ingredients?: {
    name_ingredient: string;
    quantity: number;
    measurements: string;
  }[];
}

/*
id_ingredient: 1
mesurements: "g"
name_ingredient: "Chapelure"
quantity: 60
*/

const IngredientsRecipe = ({
  id,
  servings,
  ingredients: providedIngredients,
}: IngredientsRecipeProps) => {
  const [ingredients, setIngredients] = useState<
    {
      id_ingredient?: number;
      name_ingredient: string;
      mesurements?: string;
      measurements?: string;
      quantity: number;
    }[]
  >([]);
  const [wantedServings, setWantedServings] = useState(servings);

  const getIngredients = async () => {
    if (providedIngredients) {
      setIngredients(providedIngredients);
      return;
    }
    if (!id) return;
    try {
      const res = await getIngredientsByRecipeId(id);
      setIngredients(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIngredients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="ingredients-recipe" className="container">
      <div id="section-head-ingredient">
        <h2>Ingrédients</h2>

        <div id="quantity-select">
          <button onClick={() => setWantedServings(wantedServings - 1)}>
            <Minus />
          </button>
          <p>{wantedServings}</p>
          <button onClick={() => setWantedServings(wantedServings + 1)}>
            <Plus />
          </button>
        </div>
      </div>

      <article id="ingredients-list">
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.id_ingredient ?? ingredient.name_ingredient}
            className="ingredient"
          >
            <p>
              {ingredient.name_ingredient.charAt(0).toUpperCase() +
                ingredient.name_ingredient.slice(1)}
            </p>
            <p className="ingredient-quantity">
              {ingredient.quantity
                ? Number(
                    ((ingredient.quantity / servings) * wantedServings).toFixed(
                      1,
                    ),
                  ) +
                  (ingredient.mesurements ? " " + ingredient.mesurements : "")
                : ""}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default IngredientsRecipe;
