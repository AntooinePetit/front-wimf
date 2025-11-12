import { ChevronDown } from "lucide-react";
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
  const [isOpen, setIsOpen] = useState(false);

  const maxServings = servings * 2;

  const servingsOpt: number[] = [];

  for (let i = 1; i <= maxServings; i++) {
    servingsOpt.push(i);
  }

  const url = config.apiUrl;

  const getIngredients = async () => {
    try {
      const req = await fetch(`${url}/api/v1/ingredients/${id}`);

      const res = await req.json();
      console.log(res);

      setIngredients(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIngredients();
  }, []);

  const handleSelect = (value: number) => {
    setWantedServings(value);
    setIsOpen(false);
  };

  return (
    <section id="ingredients-recipe">
      <div id="section-head">
        <h2>Ingrédients</h2>

        <div id="custom-select">
          <button
            className={isOpen ? "button-open" : ""}
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronDown size={30} />
            <span>
              Pour {wantedServings} portion{wantedServings > 1 ? "s" : ""}
            </span>
          </button>

          {isOpen && (
            <ul>
              {servingsOpt.map((opt) => (
                <li
                  key={opt}
                  className={opt === wantedServings ? "active" : ""}
                  onClick={() => handleSelect(opt)}
                >
                  {opt} portion{opt > 1 ? "s" : ""}
                </li>
              ))}
            </ul>
          )}
        </div>

        <select
          name="servings"
          id="servings"
          onChange={(e) => setWantedServings(Number(e.target.value))}
          defaultValue={wantedServings}
        >
          {servingsOpt.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <article id="ingredients-list">
        {ingredients.map((ingredient) => (
          <div key={ingredient.id_ingredient ?? ingredient.name_ingredient} className="ingredient">
            <p>{ingredient.name_ingredient}</p>
            <p className="ingredient-quantity">{ingredient.quantity / servings * wantedServings} {ingredient.mesurements}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default IngredientsRecipe;
