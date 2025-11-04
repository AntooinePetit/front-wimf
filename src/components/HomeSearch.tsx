import { Search } from "lucide-react";
import "../styles/components/HomeSearch.scss";

const HomeSearch = () => {
  return (
    <section className="container" id="home-search">
      <h2>Rechercher une recette</h2>

      <form method="get" action="/recipes">
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
    </section>
  );
};

export default HomeSearch;
