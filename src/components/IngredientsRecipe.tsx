import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { config } from "../config";
import "../styles/components/IngredientsRecipe.scss";

interface IngredientsRecipeProps {
  id: number;
  servings: number;
}

/*
id_ingredient: 1
mesurements: "g"
name_ingredient: "Chapelure"
quantity: 60
*/

const IngredientsRecipe = ({ id, servings }: IngredientsRecipeProps) => {
  const [ingredients, setIngredients] = useState<
    {
      id_ingredient: number;
      name_ingredient: string;
      mesurements: string;
      quantity: number;
    }[]
  >([]);
  const [wantedServings, setWantedServings] = useState(servings);

  const url = config.apiUrl;

  const getIngredients = async () => {
    try {
      const req = await fetch(`${url}/api/v1/ingredients/${id}`);

      const res = await req.json();

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
    <section id="ingredients-recipe">
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
            <p>{ingredient.name_ingredient}</p>
            <p className="ingredient-quantity">
              {Number(
                ((ingredient.quantity / servings) * wantedServings).toFixed(1)
              )}{" "}
              {ingredient.mesurements}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default IngredientsRecipe;
