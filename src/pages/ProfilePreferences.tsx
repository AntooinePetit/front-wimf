import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProfileNavBar from "../components/ProfileNavBar";
import ProfilePreferencesUpdates from "../components/ProfilePreferencesUpdates";
import { useIsMobile } from "../hooks/useIsMobile";

const ProfilePreferences = () => {
  document.title = "Mes préférences";

  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && <Header />}

      <main>
        {!isMobile ? (
          <div className="desktop-profile">
            <div>
              <ProfilePreferencesUpdates />
              <ProfileNavBar active="preferences" />
            </div>
          </div>
        ) : (
          <>
            <ProfilePreferencesUpdates />
            <ProfileNavBar active="preferences" />
          </>
        )}
      </main>

      {isMobile && <NavBar active="profile" />}

      {!isMobile && <Footer />}
    </>
  );
};

export default ProfilePreferences;
