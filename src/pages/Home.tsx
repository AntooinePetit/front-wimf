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

  return (
    <>
      {window.innerWidth >= 1025 && <Header />}

      <main id="home">
        <div className={window.innerWidth < 1025 ? "mobile-bg" : "desktop-bg"}>
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
          {window.innerWidth >= 1025 && (
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

      {window.innerWidth < 1025 && <NavBar active="home" />}

      {window.innerWidth >= 1025 && <Footer />}
    </>
  );
};

export default Home;
