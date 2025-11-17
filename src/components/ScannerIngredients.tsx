import { ChevronLeft } from "lucide-react";
import "../styles/components/ScannerIngredients.scss";

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
    </section>
  );
};

export default ScannerIngredients;
