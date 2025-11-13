import { Camera, Home, User, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/components/NavBar.scss";

export interface NavBarProps {
  active: string;
}

const NavBar = ({ active }: NavBarProps) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"} className={active == "home" ? "is-active" : ""}>
            <Home height={37} />
            Accueil
          </Link>
        </li>
        <li>
          <Link to={"/recipes"} className={active == "recipes" ? "is-active" : ""}>
            <Utensils height={37} />
            Recettes
          </Link>
        </li>
        <li>
          <Link to={"/"} className={active == "scanner" ? "is-active" : ""}>
            <Camera height={37} />
            Scanner
          </Link>
        </li>
        <li>
          <Link to={"/"} className={active == "profile" ? "is-active" : ""}>
            <User height={37} />
            Profil
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
