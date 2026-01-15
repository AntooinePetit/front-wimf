import { Link, useNavigate } from "react-router-dom";
import { useIsMobile } from "../hooks/useIsMobile";
import { useAuthStore } from "../store/authStore";
import "../styles/components/ProfileNavBar.scss";

interface ProfileNavBarProps {
  active: string;
}

const ProfileNavBar = ({ active }: ProfileNavBarProps) => {
  const isMobile = useIsMobile();

  const clearToken = useAuthStore((state) => state.clearToken);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearToken();
    navigate("/profile");
  };
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
        
        {!isMobile && (
          <button
            className="logout-button"
            onClick={handleLogout}
            style={{ marginTop: "2rem" }}
          >
            Déconnexion
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileNavBar;
