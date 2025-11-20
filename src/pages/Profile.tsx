import NavBar from "../components/NavBar";
import ProfileNavBar from "../components/ProfileNavBar";
import SignIn from "../components/SignIn";

const Profile = () => {
  return (
    <>
      <SignIn />

      <ProfileNavBar active="none"/>
      <NavBar active="profile" />
    </>
  );
};

export default Profile;
