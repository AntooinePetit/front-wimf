import { Link } from "react-router-dom";
import "../styles/components/ProfileNavBar.scss";

interface ProfileNavBarProps {
  active: string;
}

const ProfileNavBar = ({ active }: ProfileNavBarProps) => {
  return (
    <div id="profile-nav-bar" className="container">
      <div >
        <Link
          to={"/profile/infos"}
          className={active == "my-infos" ? "active" : ""}
        >
          Mes informations
        </Link>
        <Link
          to={"/profile/preferences"}
          className={active == "preferences" ? "active" : ""}
        >
          Préférences
        </Link>
        <Link
          to={"/profile/legals"}
          className={active == "legals" ? "active" : ""}
        >
          Informations légales
        </Link>
      </div>
    </div>
  );
};

export default ProfileNavBar;
