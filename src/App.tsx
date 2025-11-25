import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileInfos from "./pages/ProfileInfos";
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
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/infos" element={<ProfileInfos />} />
    </Routes>
  );
}

export default App;
