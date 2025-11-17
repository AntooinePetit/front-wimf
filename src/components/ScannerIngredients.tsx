import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { config } from "../config";
import "../styles/components/ScannerIngredients.scss";
import ScannerIngredientsList from "./ScannerIngredientsList";

interface ScannerIngredientsProps {
  isScanned: boolean;
  ingredients: string[];
  scanError: boolean;
  setShowIngredients: (value: boolean) => void;
}

const ScannerIngredients = ({
  isScanned,
  ingredients,
  scanError,
  setShowIngredients,
}: ScannerIngredientsProps) => {
  const ingredientTest = ["bacon", "boeuf haché", "cassonade", "eau"];

  const [ingredientsIds, setIngredientsIds] = useState([]);

  const getIngredientsIds = async () => {
    try {
      const req = await fetch(
        `${config.apiUrl}/api/v1/ingredients/search/${ingredientTest.join("+")}`
      );

      const res = await req.json();

      console.log(res);

      const list = res.map(
        (ingredient: { id_ingredient: number; name_ingredient: string }) => ({
          id: ingredient.id_ingredient,
          name: ingredient.name_ingredient,
        })
      );

      setIngredientsIds(list);

      console.log(ingredientTest);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getIngredientsIds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="scanner-ingredients">
      <div id="section-ingredients-head">
        <button
          className="white-return-button return-button"
          onClick={() => setShowIngredients(false)}
        >
          <ChevronLeft size={75} />
        </button>
        <h1>{isScanned ? "Résultats du scan" : "Liste d'ingrédients"}</h1>
      </div>

      {scanError ? (
        <p className="error">Une erreur est survenue lors du scan</p>
      ) : (
        <ScannerIngredientsList ingredientList={ingredientsIds} />
      )}
    </section>
  );
};

export default ScannerIngredients;
