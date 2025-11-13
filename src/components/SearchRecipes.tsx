import { Search } from "lucide-react";
import "../styles/components/SearchRecipes.scss";

const SearchRecipes = () => {
  return (
    <section id="head-recipes">
      <div>
        <h1>Rechercher une recette</h1>
        <form method="get">
          <div>
            <label htmlFor="search">
              <Search size={30} />
            </label>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Ex : Oeufs Mimosas"
            />
          </div>
          <button type="submit" className="button">
            Rechercher
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchRecipes;
