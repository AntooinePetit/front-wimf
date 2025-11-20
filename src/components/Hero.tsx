import "../styles/components/Hero.scss";

const Hero = () => {
  return (
    <section id="hero" className="container">
      <img src="/logo.webp" alt="Logo du site WIMF" className="logo" />

      <h1>Bienvenue sur WIMF</h1>

      <p>Trouve des idées recettes avec les ingrédients de ton frigo</p>
    </section>
  );
};

export default Hero;
