import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomRecipes } from "../services/api";
import "../styles/components/RecommendedRecipes.scss";
import Carousel from "./Carousel";

const RecommendedRecipes = () => {
  const [recipes, setRecipes] = useState([]);


  const getRecipes = async () => {
    try {
      const res = await getRandomRecipes();
      setRecipes(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <section id="recommended-recipes" className="container">
      <h2>Recettes recommandées</h2>
      <Carousel recipes={recipes} />
      <Link to={"/recipes/"} className="button">
        Voir plus de recettes
      </Link>
    </section>
  );
};

export default RecommendedRecipes;
