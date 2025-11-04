import { Camera, Home, User, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/components/NavBar.scss"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>
            <Home height={37} />
            Accueil
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <Utensils height={37} />
            Recettes
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <Camera height={37} />
            Scanner
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <User height={37} />
            Profil
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
