import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CameraScanner from "../components/CameraScanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ScannerDefault from "../components/ScannerDefault";
import ScannerIngredients from "../components/ScannerIngredients";
import ScannerRecipes from "../components/ScannerRecipes";

const Scanner = () => {
  const [showCamera, setShowCamera] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const [isScanned, setIsScanned] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [scanError, setScanError] = useState(false);
  const [search, setSearch] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const urlSearch = new URLSearchParams(location.search);
    const searchParam = urlSearch.get("search");

    if (!searchParam || searchParam.trim() == "") {
      setSearch(null);
    } else {
      setSearch(searchParam);
    }
  }, [location.search]);

  return (
    <>
      {window.innerWidth >= 1025 && <Header />}

      <main id="scanner">
        {!search && (
          <>
            {!showIngredients && (
              <ScannerDefault
                setShowCamera={setShowCamera}
                setShowIngredients={setShowIngredients}
              />
            )}

            {showCamera && (
              <CameraScanner
                setShowCamera={setShowCamera}
                setIngredients={setIngredients}
                setShowIngredients={setShowIngredients}
                setIsScanned={setIsScanned}
                setScanError={setScanError}
              />
            )}

            {showIngredients && (
              <ScannerIngredients
                isScanned={isScanned}
                ingredients={ingredients}
                scanError={scanError}
                setShowIngredients={setShowIngredients}
              />
            )}
          </>
        )}

        {search && <ScannerRecipes search={search} />}
      </main>

      {window.innerWidth < 1025 && <NavBar active="scanner" />}

      {window.innerWidth >= 1025 && <Footer />}
    </>
  );
};

export default Scanner;
