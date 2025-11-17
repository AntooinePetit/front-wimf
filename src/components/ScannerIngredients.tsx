interface ScannerIngredientsProps {
  isScanned: boolean;
}

const ScannerIngredients = ({isScanned}: ScannerIngredientsProps) => {
  return (
    <section id="scanner-ingredients">
      <h1>{isScanned ? "Résultats du scan" : "Liste d'ingrédients"}</h1>
    </section>
  );
};

export default ScannerIngredients;
