import { useState } from "react";
import AllRecipes from "../components/AllRecipes";
import NavBar from "../components/NavBar";
import SearchRecipes from "../components/SearchRecipes";
import SearchResult from "../components/SearchResult";

const Recipes = () => {
  const queryParameters = new URLSearchParams(window.location.search);

  const [search, setSearch] = useState<string | null>(
    queryParameters.get("search") ?? null
  );
  
  return (
    <>
      <main>
        <SearchRecipes />

        {search == null ? <AllRecipes /> : <SearchResult search={search} />}
      </main>
      <NavBar active="recipes" />
    </>
  );
};

export default Recipes;
