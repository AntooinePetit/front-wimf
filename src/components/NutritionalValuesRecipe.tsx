import { ChevronDown } from "lucide-react";
import { useState } from "react";
import "../styles/components/NutritionalValuesRecipe.scss";

interface NutritionalValuesRecipeProps {
  nutritional: object;
  showCaloriesOnly?: boolean;
  hideCalories?: boolean;
}

const NutritionalValuesRecipe = ({
  nutritional,
  showCaloriesOnly = false,
  hideCalories = false,
}: NutritionalValuesRecipeProps) => {
  const [showValues, setShowValues] = useState(false);

  return (
    <section id="nutritional-values" className="container">
      <div>
        <div
          id="section-head-nutritional-values"
          onClick={() => setShowValues(!showValues)}
          className={showValues ? "active" : ""}
        >
          <h2>Valeurs nutritionnelles</h2>
          <ChevronDown size={44} className="icon" />
        </div>

        <article className={showValues ? "active" : "hidden"}>
          <ul>
            {Object.entries(nutritional)
              .filter(([key]) => {
                if (showCaloriesOnly) return key === "calories";
                if (hideCalories) return key !== "calories";
                return true;
              })
              .map(([key, data]) => (
                <li key={key}>
                  <span className="name">{data.name}</span>
                  <span className="values">{`${data.quantity} ${data.unit}`}</span>
                </li>
              ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default NutritionalValuesRecipe;
