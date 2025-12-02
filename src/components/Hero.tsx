import "../styles/components/Hero.scss";

const Hero = () => {
  return (
    <section id="hero" className="container">
      {window.innerWidth < 1025 && (
        <img src="/logo.webp" alt="Logo du site WIMF" className="logo" />
      )}

      <h1>Bienvenue sur WIMF</h1>

      <p>Trouve des idées recettes avec les ingrédients de ton frigo</p>
    </section>
  );
};

export default Hero;
