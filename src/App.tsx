import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Recipes from "./pages/Recipes";
import Scanner from "./pages/Scanner";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes/recipe/:id" element={<Recipe />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/scanner" element={<Scanner />} />
    </Routes>
  );
}

export default App;
