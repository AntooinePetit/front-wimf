import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import "../styles/pages/Home.scss";

const Home = () => {
  return (
    <>
      <main id="home">
        <Hero />
      </main>

      <NavBar active="home" />
    </>
  );
};

export default Home;
