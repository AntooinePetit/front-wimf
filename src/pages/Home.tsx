import { useIsMobile } from "../hooks/useIsMobile";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeSearch from "../components/HomeSearch";
import NavBar from "../components/NavBar";
import RecommendedRecipes from "../components/RecommendedRecipes";
import ScannerDiscovery from "../components/ScannerDiscovery";
import "../styles/pages/Home.scss";

const Home = () => {
  document.title = "Accueil - Trouve ta recette";

  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && <Header />}

      <main id="home">
        <div className={isMobile ? "mobile-bg" : "desktop-bg"}>
          <img
            src="/assets/Fraise.svg"
            className="bg-icon fraise"
            alt="Image de fond représentant une fraise"
          />
          <img
            src="/assets/Banane.svg"
            className="bg-icon banane"
            alt="Image de fond représentant une banane"
          />
          {!isMobile && (
            <>
              <img
                src="/assets/Raisin.svg"
                className="bg-icon raisin"
                alt="Image de fond représentant une grappe de raisin"
              />
              <img
                src="/assets/Pastèque.svg"
                className="bg-icon pasteque"
                alt="Image de fond représentant une tranche de pastèque"
              />
              <img
                src="/assets/Orange.svg"
                className="bg-icon orange"
                alt="Image de fond représentant une orange"
              />
            </>
          )}
          <img
            src="/assets/Avocat.svg"
            className="bg-icon avocat"
            alt="Image de fond représentant un avocat"
          />{" "}
          <img
            src="/assets/Prune.svg"
            className="bg-icon prune"
            alt="Image de fond représentant une prune"
          />
          <Hero />
          <ScannerDiscovery />
          <HomeSearch />
          <RecommendedRecipes />
        </div>
      </main>

      {isMobile && <NavBar active="home" />}

      {!isMobile && <Footer />}
    </>
  );
};

export default Home;
