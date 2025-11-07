import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { config } from "../config";

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  const url = config.apiUrl;

  const getRecipe = async () => {
    try {
      const req = await fetch(`${url}/api/v1/recipes/${id}`);

      if (!req.ok) throw new Error("Erreur de chargement de la recette");

      const res = await req.json();

      setRecipe(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRecipe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <main>
        <h1>Recette</h1>
      </main>

      <NavBar active={"recipes"} />
    </>
  );
};

export default Recipe;
