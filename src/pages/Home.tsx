import NavBar from "../components/NavBar";
import "../styles/pages/Home.scss";

const Home = () => {
  return (
    <>
      <main id="home">
        <section id="hero" className="container">
          <img src="/logo.webp" alt="Logo du site WIMF" className="logo" />

          <h1>Bienvenue sur WIMF</h1>

          <p>Trouve des idées recettes avec les ingrédients de ton frigo</p>
        </section>
      </main>

      <NavBar active="home" />
    </>
  );
};

export default Home;
