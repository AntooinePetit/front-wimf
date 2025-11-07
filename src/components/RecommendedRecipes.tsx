import { useEffect, useState } from "react";
import { config } from "../config";
import "../styles/components/RecommendedRecipes.scss";

import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const RecommendedRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const url = config.apiUrl;

  const getRecipes = async () => {
    try {
      const req = await fetch(`${url}/api/v1/recipes/random`);

      if (!req.ok) throw new Error("Erreur de chargement des recettes");

      const res = await req.json();

      setRecipes(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="recommended-recipes" className="container">
      <h2>Recettes recommandées</h2>
      <Carousel recipes={recipes} />
      <Link to={"/recipes"} className="button">
        Voir plus de recettes
      </Link>
    </section>
  );
};

export default RecommendedRecipes;
