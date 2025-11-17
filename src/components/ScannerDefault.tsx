import "../styles/components/ScannerDefault.scss";

interface ScannerDefaultProps {
  setShowCamera: (value: boolean) => void,
  setShowIngredients: (value: boolean) => void
}

const ScannerDefault = ({ setShowCamera, setShowIngredients }: ScannerDefaultProps) => {
  return (
    <section id="scanner-default">
      <h1>Scanner</h1>

      <div className="container">
        <button className="button" onClick={() => setShowCamera(true)}>
          Scanner mon frigo
        </button>

        <button className="button" onClick={() => setShowIngredients(true)}>
          Entrer mes ingrédients manuellement
        </button>
      </div>
    </section>
  );
};

export default ScannerDefault;
