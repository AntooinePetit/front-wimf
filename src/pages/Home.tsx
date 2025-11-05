import Hero from "../components/Hero";
import HomeSearch from "../components/HomeSearch";
import NavBar from "../components/NavBar";
import RecommendedRecipes from "../components/RecommendedRecipes";
import ScannerDiscovery from "../components/ScannerDiscovery";
import "../styles/pages/Home.scss"

const Home = () => {
  return (
    <>
      <main id="home" className={window.innerWidth < 768 ? "mobile-bg" : "desktop-bg"}>
        <Hero />

        <ScannerDiscovery />

        <HomeSearch />

        <RecommendedRecipes />
      </main>

      <NavBar active="home" />
    </>
  );
};

export default Home;
