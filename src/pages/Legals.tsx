import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProfileNavBar from "../components/ProfileNavBar";
import "../styles/pages/Legals.scss";

const Legals = () => {
  return (
    <main>
      <section id="legals">
        <h1>Informations légales</h1>

        <ul>
          <li>
            <Link to={"/legals/notices"}>
              <span>Mentions légales</span>
              <ChevronRight />
            </Link>
          </li>
          <li>
            <Link to={"/legals/gtu"}>
              <span>Conditions générales d'utilisation</span>
              <ChevronRight />
            </Link>
          </li>
          <li>
            <Link to={"/legals/privacy"}>
              <span>Politique de confidentialité</span>
              <ChevronRight />
            </Link>
          </li>
          <li>
            <Link to={"/legals/gdpr"}>
              <span>Consentement RGPD/Utilisation de tes données</span>{" "}
              <ChevronRight />
            </Link>
          </li>
        </ul>
      </section>

      <ProfileNavBar active="legals" />
      <NavBar active="profile" />
    </main>
  );
};

export default Legals;
