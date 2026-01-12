import { Camera, Home, User, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "../hooks/useIsMobile";
import "../styles/components/NavBar.scss";

export interface NavBarProps {
  active: string;
}

const NavBar = ({ active }: NavBarProps) => {
  const isMobile = useIsMobile();

  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"} className={active == "home" ? "is-active" : ""}>
            {isMobile && <Home height={25} />}
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to={"/recipes"}
            className={active == "recipes" ? "is-active" : ""}
          >
            {isMobile && <Utensils height={25} />}
            Recettes
          </Link>
        </li>
        <li>
          <Link
            to={"/scanner"}
            className={active == "scanner" ? "is-active" : ""}
          >
            {isMobile && <Camera height={25} />}
            Scanner
          </Link>
        </li>
        <li>
          <Link
            to={"/profile"}
            className={active == "profile" ? "is-active" : ""}
          >
            <User height={25} />
            {isMobile && "Profil"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
