import { useEffect, useState } from "react";
import "../styles/components/ShowRecipes.scss";
import { config } from "../config";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [reqError, setReqError] = useState<string | null>(null);

  const url = config.apiUrl

  const getRecipes = async () => {
    try {
      const req = await fetch(`${url}/api/v1/recipes`)

      const res = await req.json()
      
      console.log(res)

    } catch (error) {
      console.error(error)
      setReqError("Une erreur est survenue");
    }
  };

  useEffect(() => {
    getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="result">
      <h2>Toutes les recettes</h2>
    </section>
  );
};

export default AllRecipes;
