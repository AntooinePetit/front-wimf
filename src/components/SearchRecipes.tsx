import { Search } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";
import "../styles/components/SearchRecipes.scss";

interface SearchRecipesProps {
  search: string | null;
}

const SearchRecipes = ({ search }: SearchRecipesProps) => {
  const isMobile = useIsMobile();

  return (
    <section id="head-recipes">
      <div className={!isMobile ? "container" : ""}>
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
              defaultValue={search ?? ""}
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
