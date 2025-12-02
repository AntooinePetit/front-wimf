import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProfileNavBar from "../components/ProfileNavBar";
import ProfilePreferencesUpdates from "../components/ProfilePreferencesUpdates";

const ProfilePreferences = () => {
  document.title = "Mes préférences";

  return (
    <>
      {window.innerWidth >= 1025 && <Header />}

      <main>
        <ProfilePreferencesUpdates />
        <ProfileNavBar active="preferences" />
      </main>

      {window.innerWidth < 1025 && <NavBar active="profile" />}

      {window.innerWidth >= 1025 && <Footer />}
    </>
  );
};

export default ProfilePreferences;
