import { useIsMobile } from "../hooks/useIsMobile";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProfileInfosUpdate from "../components/ProfileInfosUpdate";
import ProfileNavBar from "../components/ProfileNavBar";

const ProfileInfos = () => {
  document.title = "Mes informations";

  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && <Header />}

      <main>
        <ProfileInfosUpdate />
        <ProfileNavBar active="my-infos" />
      </main>

      {isMobile && <NavBar active="profile" />}

      {!isMobile && <Footer />}
    </>
  );
};

export default ProfileInfos;
