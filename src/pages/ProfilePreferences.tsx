import { useIsMobile } from "../hooks/useIsMobile";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProfileNavBar from "../components/ProfileNavBar";
import ProfilePreferencesUpdates from "../components/ProfilePreferencesUpdates";

const ProfilePreferences = () => {
  document.title = "Mes préférences";

  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && <Header />}

      <main>
        <ProfilePreferencesUpdates />
        <ProfileNavBar active="preferences" />
      </main>

      {isMobile && <NavBar active="profile" />}

      {!isMobile && <Footer />}
    </>
  );
};

export default ProfilePreferences;
