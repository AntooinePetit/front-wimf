import { Link } from "react-router-dom";
import "../styles/components/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <Link to={"/legals/privacy"}>Politique de confidentialité</Link>
          <Link to={"/legals/notices"}>Mentions légales</Link>
          <Link to={"/legals/gtu"}>Conditions générales d'utilisation</Link>
          <Link to={"/legals/gdpr"}>Consentement RGPD</Link>
        </div>
        <p>© 2025 WIMF - Tout droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
