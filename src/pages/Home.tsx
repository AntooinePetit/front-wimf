import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ScannerDiscovery from "../components/ScannerDiscovery";

const Home = () => {
  return (
    <>
      <main id="home">
        <Hero />

        <ScannerDiscovery />
      </main>

      <NavBar active="home" />
    </>
  );
};

export default Home;
