import NavBar from "../components/NavBar";
import ProfileNavBar from "../components/ProfileNavBar";

const Profile = () => {
  return (
    <>
      <div>
        <h1>Profil</h1>
      </div>

      <ProfileNavBar active="legals"/>
      <NavBar active="profile" />
    </>
  );
};

export default Profile;
