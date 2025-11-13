import CameraScanner from "../components/CameraScanner";
import NavBar from "../components/NavBar";

const Scanner = () => {
  return (
    <>
      <main>
        <CameraScanner />
      </main>

      <NavBar active="scanner" />
    </>
  );
};

export default Scanner;
