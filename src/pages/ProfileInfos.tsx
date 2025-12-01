import NavBar from "../components/NavBar";
import ProfileInfosUpdate from "../components/ProfileInfosUpdate";
import ProfileNavBar from "../components/ProfileNavBar";

const ProfileInfos = () => {
  document.title = "Mes informations";

  return (
    <>
      <main>
        <ProfileInfosUpdate />
      </main>

      <ProfileNavBar active="my-infos" />
      <NavBar active="profile" />
    </>
  );
};

export default ProfileInfos;
