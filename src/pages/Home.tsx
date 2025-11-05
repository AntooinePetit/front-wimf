import Hero from "../components/Hero";
import HomeSearch from "../components/HomeSearch";
import NavBar from "../components/NavBar";
import RecommendedRecipes from "../components/RecommendedRecipes";
import ScannerDiscovery from "../components/ScannerDiscovery";

const Home = () => {
  return (
    <>
      <main id="home">
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
