import { useState } from "react";
import CameraScanner from "../components/CameraScanner";
import NavBar from "../components/NavBar";
import ScannerDefault from "../components/ScannerDefault";
import ScannerIngredients from "../components/ScannerIngredients";

const Scanner = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [isScanned, setIsScanned] = useState(false)
  const [ingredients, setIngredients] = useState([]);

  return (
    <>
      <main id="scanner">
        {!showIngredients && (
          <ScannerDefault
            setShowCamera={setShowCamera}
            setShowIngredients={setShowIngredients}
          />
        )}

        {showCamera && <CameraScanner setShowCamera={setShowCamera} />}

        {showIngredients && <ScannerIngredients isScanned={isScanned} />}
      </main>

      <NavBar active="scanner" />
    </>
  );
};

export default Scanner;
