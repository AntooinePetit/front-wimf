import { useState } from "react";
import CameraScanner from "../components/CameraScanner";
import NavBar from "../components/NavBar";

const Scanner = () => {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <>
      <main>
        <button className="button" onClick={() => setShowCamera(true)}>
          Scanner mon frigo
        </button>

        {showCamera && <CameraScanner setShowCamera={setShowCamera} />}
      </main>

      <NavBar active="scanner" />
    </>
  );
};

export default Scanner;
