/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { searchIngredients } from "../services/api";
import "../styles/components/ScannerIngredients.scss";
import ScannerIngredientSearch from "./ScannerIngredientSearch";
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
  document.title = "Scanner d'ingrédients";

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [ingredientsIds, setIngredientsIds] = useState<any[]>([]);

  const getIngredientsIds = async () => {
    try {
      const res = await searchIngredients(ingredients.join("+"));
      const list = res.map(
        (ingredient: { id_ingredient: number; name_ingredient: string }) => ({
          id: ingredient.id_ingredient,
          name: ingredient.name_ingredient,
        })
      );
      setIngredientsIds(list);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (ingredients.length > 0) getIngredientsIds();
    else setIsLoading(false);
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
        <>
          <ScannerIngredientsList
            ingredientList={ingredientsIds}
            isLoading={isLoading}
            isError={isError}
            isScanned={isScanned}
            setIngredientList={(value: any[]) => setIngredientsIds(value)}
          />

          {!isLoading && (
            <ScannerIngredientSearch
              ingredientList={ingredientsIds}
              setIngredientList={setIngredientsIds}
            />
          )}
        </>
      )}
    </section>
  );
};

export default ScannerIngredients;
