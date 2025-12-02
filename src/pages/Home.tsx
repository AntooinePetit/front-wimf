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
          <img src="/assets/Fraise.svg" className="bg-icon fraise" alt="" />
          <img src="/assets/Banane.svg" className="bg-icon banane" alt="" />
          <img
            src="/assets/Avocat.svg"
            className="bg-icon avocat"
            alt=""
          />{" "}
          <img src="/assets/Prune.svg" className="bg-icon prune" alt="" />
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
