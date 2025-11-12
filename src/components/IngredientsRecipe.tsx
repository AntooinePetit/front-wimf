import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { config } from "../config";
import "../styles/components/IngredientsRecipe.scss";

interface IngredientsRecipeProps {
  id: number;
  servings: number;
}

const IngredientsRecipe = ({ id, servings }: IngredientsRecipeProps) => {
  const [ingredients, setIngredients] = useState([]);
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
            <ChevronDown size={30}/>
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
    </section>
  );
};

export default IngredientsRecipe;
