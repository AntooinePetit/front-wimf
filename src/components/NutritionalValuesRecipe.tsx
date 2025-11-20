import { ChevronDown } from "lucide-react";
import { useState } from "react";
import "../styles/components/NutritionalValuesRecipe.scss";

interface NutritionalValuesRecipeProps {
  nutritional: object;
}

/* 
calcium: {name: 'Calcium', quantity: 19, unit: 'mg'}
calories: {name: 'Calories', quantity: 193, unit: 'kcal'}
cholesterol: {name: 'Cholestérol', quantity: 53, unit: 'mg'}
dietaryFiber: {name: 'Fibres alimentaires', quantity: 1, unit: 'g'}
iron: {name: 'Fer', quantity: 1, unit: 'mg'}
potassium: {name: 'Potassium', quantity: 183, unit: 'mg'}
protein: {name: 'Protéines', quantity: 10, unit: 'g'}
saturatedFat: {name: 'Acides gras saturés', quantity: 4, unit: 'g'}
sodium: {name: 'Sodium', quantity: 85, unit: 'mg'}
totalCarbohydrate: {name: 'Glucides totaux', quantity: 15, unit: 'g'}
totalFat: {name: 'Matières grasses totales', quantity: 10, unit: 'g'}
totalSugars: {name: 'Sucres totaux', quantity: 10, unit: 'g'}

*/

const NutritionalValuesRecipe = ({
  nutritional,
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
            {Object.entries(nutritional).map(([key, data]) => (
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
