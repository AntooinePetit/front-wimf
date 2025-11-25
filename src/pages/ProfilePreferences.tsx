import NavBar from "../components/NavBar";
import ProfileNavBar from "../components/ProfileNavBar";
import ProfilePreferencesUpdates from "../components/ProfilePreferencesUpdates";

const ProfilePreferences = () => {
  return (
    <main>
      <ProfilePreferencesUpdates />
      <ProfileNavBar active="preferences" />
      <NavBar active="profile" />
    </main>
  );
};

export default ProfilePreferences;
