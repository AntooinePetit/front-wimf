import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProfileNavBar from "../components/ProfileNavBar";
import { useIsMobile } from "../hooks/useIsMobile";

const GDPR = () => {
  document.title = "Consentement RGPD";

  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && <Header />}

      <main className="legal-main">
        <h1>Consentement RGPD</h1>
        <section>
          <article>
            <h2>1. Introduction</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), nous avons besoin de votre consentement pour collecter et
              traiter certaines données personnelles.
            </p>
            <p>
              Ces données nous permettent de vous fournir un service
              personnalisé et d'améliorer le site.
            </p>

            <h2>2. Données collectées</h2>
            <p>
              Lors de votre inscription et utilisation du site, nous pouvons
              collecter :
            </p>
            <p>
              Données personnelles : nom d'utilisateur, adresse e-mail, mot de
              passe (chiffré), préférences d'affichage, régimes alimentaires,
              favoris, notes et commentaires de recettes, ingrédients bannis,
              date de création et mise à jour du compte.
            </p>
            <p>
              Données statistiques : informations collectées via Google
              Analytics pour mesurer et améliorer la fréquentation du site
              (pages vues, durée de visite, type d'appareil, navigateur).
            </p>
            <p>
              Aucune donnée n'est vendue ou cédée à des tiers. Les hébergeurs
              (Vercel, Render, Neon) peuvent traiter certaines données
              techniques uniquement dans le cadre du fonctionnement du site.
            </p>

            <h2>3. Finalités du traitement</h2>
            <p>
              En consentant, vous acceptez que vos données soient utilisées pour
              :
            </p>
            <ul>
              <li>La création et gestion de votre compte</li>
              <li>La personnalisation de votre expérience utilisateur</li>
              <li>
                L'amélioration du fonctionnement et de l'ergonomie du site
              </li>
              <li>
                La production de statistiques anonymisées de fréquentation
              </li>
            </ul>

            <h2>4. Droits de l'utilisateur</h2>
            <p>Vous disposez des droits suivants :</p>
            <ul>
              <li>
                Droit d'accès, de rectification et de suppression de vos données
              </li>
              <li>Droit d'opposition et de limitation du traitement</li>
              <li>
                Droit à la portabilité : recevoir vos données dans un format
                structuré et lisible ou les transférer vers un autre service
              </li>
            </ul>
            <p>
              Pour exercer vos droits, contactez Petit Antoine :
              antooine.petit@gmail.com.
            </p>

            <h2>5. Consentement</h2>
            <p>
              Vous pouvez retirer votre consentement à tout moment en modifiant
              vos préférences dans votre compte ou en contactant l'éditeur.
            </p>

            <h2>6. Cookies</h2>
            <p>
              En cochant la case de consentement, vous acceptez également
              l'utilisation de cookies pour :
            </p>
            <ul>
              <li>Mesurer la fréquentation via Google Analytics</li>
              <li>
                Adapter l'affichage et les fonctionnalités selon vos préférences
              </li>
            </ul>
            <p>
              Vous pouvez gérer ou refuser les cookies via votre navigateur ou
              via l'outil de désactivation Google Analytics.
            </p>
          </article>
        </section>
        {isMobile && <ProfileNavBar active="legals" />}
      </main>

      {isMobile && <NavBar active="profile" />}

      {!isMobile && <Footer />}
    </>
  );
};

export default GDPR;
