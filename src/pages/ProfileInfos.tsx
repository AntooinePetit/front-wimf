import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProfileInfosUpdate from "../components/ProfileInfosUpdate";
import ProfileNavBar from "../components/ProfileNavBar";

const ProfileInfos = () => {
  document.title = "Mes informations";

  return (
    <>
      {window.innerWidth >= 1025 && <Header />}

      <main>
        <ProfileInfosUpdate />
        <ProfileNavBar active="my-infos" />
      </main>

      {window.innerWidth < 1025 && <NavBar active="profile" />}

      {window.innerWidth >= 1025 && <Footer />}
    </>
  );
};

export default ProfileInfos;
