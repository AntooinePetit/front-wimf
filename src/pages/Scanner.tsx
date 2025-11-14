import { useState } from "react";
import { Link } from "react-router-dom";
import CameraScanner from "../components/CameraScanner";
import NavBar from "../components/NavBar";
import "../styles/pages/Scanner.scss";

const Scanner = () => {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <>
      <main id="scanner" className="container">
        <button className="button" onClick={() => setShowCamera(true)}>
          Scanner mon frigo
        </button>

        <Link to={"/scanner/ingredients"} className="button">
          Entrer mes ingrédients manuellement
        </Link>

        {showCamera && <CameraScanner setShowCamera={setShowCamera} />}
      </main>

      <NavBar active="scanner" />
    </>
  );
};

export default Scanner;
