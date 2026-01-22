import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy loading : chaque page se charge uniquement quand on y accède
const Home = lazy(() => import("./pages/Home"));
const Recipe = lazy(() => import("./pages/Recipe"));
const Recipes = lazy(() => import("./pages/Recipes"));
const Scanner = lazy(() => import("./pages/Scanner"));
const Profile = lazy(() => import("./pages/Profile"));
const ProfileInfos = lazy(() => import("./pages/ProfileInfos"));
const ProfilePreferences = lazy(() => import("./pages/ProfilePreferences"));
const Legals = lazy(() => import("./pages/Legals"));
const LegalNotices = lazy(() => import("./pages/LegalNotices"));
const GeneralTermsOfUse = lazy(() => import("./pages/GeneralTermsOfUse"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const GDPR = lazy(() => import("./pages/GDPR"));
const ResetPass = lazy(() => import("./pages/ResetPass"));
const Error404 = lazy(() => import("./pages/Error404"));

function App() {
  return (
    // Suspense affiche un fallback pendant le chargement de la page
    <Suspense fallback={<div style={{ textAlign: "center", padding: "2rem" }}>Chargement...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/recipe/:id" element={<Recipe />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/infos" element={<ProfileInfos />} />
        <Route path="/profile/preferences" element={<ProfilePreferences />} />
        <Route path="/legals" element={<Legals />} />
        <Route path="/legals/notices" element={<LegalNotices />} />
        <Route path="/legals/gtu" element={<GeneralTermsOfUse />} />
        <Route path="/legals/privacy" element={<PrivacyPolicy />} />
        <Route path="/legals/gdpr" element={<GDPR />} />
        <Route path="/reset-pass/:token" element={<ResetPass />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Suspense>
  );
}

export default App;
