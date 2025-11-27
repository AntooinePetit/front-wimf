import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Legals from "./pages/Legals";
import Profile from "./pages/Profile";
import ProfileInfos from "./pages/ProfileInfos";
import ProfilePreferences from "./pages/ProfilePreferences";
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
      <Route path="/profile/preferences" element={<ProfilePreferences />} />
      <Route path="/legals" element={<Legals />} />
    </Routes>
  );
}

export default App;
