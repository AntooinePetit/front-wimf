import NavBar from "../components/NavBar";
import ProfileNavBar from "../components/ProfileNavBar";
import ProfilePreferencesUpdates from "../components/ProfilePreferencesUpdates";

const ProfilePreferences = () => {
  return (
    <>
      <main>
        <ProfilePreferencesUpdates />
      </main>

      <ProfileNavBar active="preferences" />
      <NavBar active="profile" />
    </>
  );
};

export default ProfilePreferences;
