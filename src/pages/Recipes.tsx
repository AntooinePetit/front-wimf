import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AllRecipes from "../components/AllRecipes";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import SearchRecipes from "../components/SearchRecipes";
import SearchResult from "../components/SearchResult";
import { useIsMobile } from "../hooks/useIsMobile";

const Recipes = () => {
  document.title = "Recettes";

  const isMobile = useIsMobile();
  const location = useLocation(); // change d’objet quand l’URL change

  const [search, setSearch] = useState<string | null>(null);

  useEffect(() => {
    const queryParameters = new URLSearchParams(location.search);
    const searchParam = queryParameters.get("search");

    if (!searchParam || searchParam.trim() === "") {
      setSearch(null);
    } else {
      setSearch(searchParam);
    }
  }, [location.search]);

  return (
    <>
      {!isMobile && <Header />}

      <main id="recipes">
        <SearchRecipes search={search} />

        {search == null ? <AllRecipes /> : <SearchResult search={search} />}
      </main>

      {isMobile && <NavBar active="recipes" />}

      {!isMobile && <Footer />}
    </>
  );
};

export default Recipes;
