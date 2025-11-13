import NavBar from "../components/NavBar";
import SearchRecipes from "../components/SearchRecipes";

const Recipes = () => {
  return (
    <>
      <main>
        <SearchRecipes />
      </main>
      <NavBar active="recipes" />
    </>
  );
};

export default Recipes;
