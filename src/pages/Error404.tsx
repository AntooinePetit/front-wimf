import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { useIsMobile } from "../hooks/useIsMobile";
import "../styles/pages/Error404.scss";

const Error404 = () => {
  document.title = "Erreur 404 - WIMF";
  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && <Header />}

      <main id="error-404">
        {isMobile && <h1>Erreur 404</h1>}

        <div className="container">
          {!isMobile && <h1>Erreur 404</h1>}
          <p>La page que vous recherchez n'existe pas.</p>
          <Link to={"/"} className="button">
            Retour à l'accueil
          </Link>
        </div>
      </main>

      {!isMobile && <Footer />}

      {isMobile && <NavBar active="none" />}
    </>
  );
};

export default Error404;
