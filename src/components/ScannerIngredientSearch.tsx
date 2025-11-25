import { Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../config";
import "../styles/components/ScannerIngredientSearch.scss";

interface Ingredient {
  id_ingredient: number;
  name_ingredient: string;
}

interface ScannerIngredientSearchProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ingredientList: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIngredientList: (value: any[]) => void;
}

const ScannerIngredientSearch = ({
  ingredientList,
  setIngredientList,
}: ScannerIngredientSearchProps) => {
  const [searchResults, setSearchResults] = useState<Ingredient[]>([]);
  const [search, setSearch] = useState("");

  const [notification, setNotification] = useState<string | null>(null);

  const getSearchResults = async () => {
    try {
      const req = await fetch(
        `${config.apiUrl}/api/v1/ingredients/search/${search}`
      );

      const res = (await req.json()) as Ingredient[];

      setSearchResults(res);
    } catch (error) {
      console.error(error);
    }
  };

  const updateIngredientList = (ingredient: Ingredient) => {
    if (
      ingredientList.find(
        (existingIngredient) =>
          existingIngredient.id == ingredient.id_ingredient
      )
    ) {
      setNotification("Ingrédient déjà dans la liste !");
      setTimeout(() => {
        setNotification(null);
      }, 3000);
      return;
    }
    const updatedList = [
      ...ingredientList,
      {
        id: ingredient.id_ingredient,
        name: ingredient.name_ingredient,
      },
    ];
    setIngredientList(updatedList);
  };

  return (
    <div id="ingredient-search-list" className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getSearchResults();
        }}
      >
        <label htmlFor="ingredient-search">Ajouter un ingrédient</label>
        <input
          type="text"
          name="ingredient-search"
          id="ingredient-search"
          placeholder="Oignon, boeuf, saumon..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <input
          type="submit"
          value="Rechercher l'ingrédient"
          className="button"
        />
      </form>

      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((ingredient: Ingredient) => (
            <li
              key={ingredient.id_ingredient}
              onClick={() => updateIngredientList(ingredient)}
            >
              {ingredient.name_ingredient} <Plus />
            </li>
          ))}
        </ul>
      )}

      <hr />
      <hr />

      <Link
        to={`/scanner?search=${ingredientList.map((e) => e.id).join("+")}`}
        className="button"
      >
        Rechercher des recettes
      </Link>

      {notification && <div className="notification-error">{notification}</div>}
    </div>
  );
};

export default ScannerIngredientSearch;
