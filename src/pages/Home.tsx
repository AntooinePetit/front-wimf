import Hero from "../components/Hero";
import HomeSearch from "../components/HomeSearch";
import NavBar from "../components/NavBar";
import RecommendedRecipes from "../components/RecommendedRecipes";
import ScannerDiscovery from "../components/ScannerDiscovery";
import "../styles/pages/Home.scss";

const Home = () => {
  return (
    <>
      <main id="home">
        <div className={window.innerWidth < 768 ? "mobile-bg" : "desktop-bg"}>
          <img src="/src/assets/Fraise.svg" className="bg-icon fraise" alt="" />
          <img src="/src/assets/Banane.svg" className="bg-icon banane" alt="" />
          <img src="/src/assets/Avocat.svg" className="bg-icon avocat" alt="" />
          <img
            src="/src/assets/Pastèque entière.svg"
            className="bg-icon pasteque"
            alt=""
          />
          <img src="/src/assets/Prune.svg" className="bg-icon prune" alt="" />

          <Hero />

          <ScannerDiscovery />

          <HomeSearch />

          <RecommendedRecipes />
        </div>
      </main>

      <NavBar active="home" />
    </>
  );
};

export default Home;
