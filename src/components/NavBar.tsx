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
            {window.innerWidth < 1025 && <Home height={25} />}
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to={"/recipes"}
            className={active == "recipes" ? "is-active" : ""}
          >
            {window.innerWidth < 1025 && <Utensils height={25} />}
            Recettes
          </Link>
        </li>
        <li>
          <Link
            to={"/scanner"}
            className={active == "scanner" ? "is-active" : ""}
          >
            {window.innerWidth < 1025 && <Camera height={25} />}
            Scanner
          </Link>
        </li>
        <li>
          <Link
            to={"/profile"}
            className={active == "profile" ? "is-active" : ""}
          >
            <User height={25} />
            {window.innerWidth < 1025 && "Profil"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
