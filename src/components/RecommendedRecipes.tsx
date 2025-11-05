import { useEffect, useState } from "react";
import { config } from "../config";
import "../styles/components/RecommendedRecipes.scss";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const RecommendedRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const url = config.apiUrl;

  const getRecipes = async () => {
    const req = await fetch(`${url}api/v1/recipes/random`);

    if (!req.ok) throw new Error("Erreur de chargement des recettes");

    const res = await req.json();

    setRecipes(res);
  };

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="recommended-recipes" className="container">
      <h2>Recettes recommandées</h2>
      <Carousel recipes={recipes}/>
      <Link to={"/recipes"} className="button">Voir plus de recettes</Link>
    </section>
  );
};

export default RecommendedRecipes;
