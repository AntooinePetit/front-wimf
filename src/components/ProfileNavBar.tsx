import { Link } from "react-router-dom";
import { useIsMobile } from "../hooks/useIsMobile";
import "../styles/components/ProfileNavBar.scss";

interface ProfileNavBarProps {
  active: string;
}

const ProfileNavBar = ({ active }: ProfileNavBarProps) => {
  const isMobile = useIsMobile();
  return (
    <div id="profile-nav-bar">
      <div>
        <div>
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
          {isMobile && (
            <Link to={"/legals"} className={active == "legals" ? "active" : ""}>
              Informations légales
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileNavBar;
