import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProfileNavBar from "../components/ProfileNavBar";

const PrivacyPolicy = () => {
  document.title = "Politique de confidentialité";

  return (
    <>
      {window.innerWidth >= 1025 && <Header />}

      <main className="legal-main">
        <h1>Politique de confidentialité</h1>

        <section>
          <h2>1. Introduction</h2>
          <p>
            La présente Politique de confidentialité a pour objectif de vous
            informer sur la collecte, le traitement et la protection des données
            personnelles que vous nous confiez lors de l'utilisation de ce site.
          </p>
          <p>
            Le site est édité par Petit Antoine, 165 rue du Félibrige, 83560
            Saint-Julien, France, email : antooine.petit@gmail.com.
          </p>
          <p>
            La présente politique s'applique à toutes les données collectées
            directement via le site, y compris les comptes utilisateurs et les
            outils de mesure d'audience.
          </p>

          <h2>2. Données collectées</h2>
          <h3>a) Données liées au compte utilisateur</h3>
          <ul>
            <li>Nom d'utilisateur</li>
            <li>Adresse e-mail</li>
            <li>Mot de passe (stocké sous forme chiffré)</li>
            <li>Date de création et de mise à jour du compte</li>
            <li>Préférences d'affichage</li>
            <li>Régimes alimentaires</li>
            <li>Favoris, notes et commentaires de recettes</li>
            <li>Ingrédients bannis par l'utilisateur</li>
          </ul>

          <h3>b) Données statistiques</h3>
          <p>
            Certaines données techniques et statistiques sont collectées par
            Google Analytics via des cookies : pages vues, temps de visite, type
            d'appareil et navigateur.
          </p>
          <p>
            Ces informations sont utilisées uniquement pour mesurer et améliorer
            la fréquentation du site.
          </p>
          <p>
            Vous pouvez consulter la politique de confidentialité de Google
            Analytics ici et désactiver les cookies via cet outil.
          </p>

          <h2>3. Finalités du traitement</h2>
          <p>Les données collectées sont utilisées pour :</p>
          <ul>
            <li>
              Permettre la création et la gestion des comptes utilisateurs
            </li>
            <li>Améliorer l'expérience et le fonctionnement du site</li>
            <li>Assurer la sécurité et la maintenance des services</li>
            <li>Produire des statistiques anonymisées de fréquentation</li>
          </ul>

          <h2>4. Durée de conservation des données</h2>
          <p>
            Les données personnelles des utilisateurs sont conservées pendant
            toute la durée de leur compte actif.
          </p>
          <p>
            En cas d'inactivité prolongée, les comptes et leurs données
            associées sont supprimés ou anonymisés après 2 ans d'inactivité.
          </p>
          <p>
            Cette durée permet de garantir le fonctionnement du service tout en
            respectant les exigences du RGPD.
          </p>

          <h2>5. Hébergement et sécurité</h2>
          <p>Les données sont hébergées sur des services sécurisés :</p>
          <ul>
            <li>
              <strong>Front-end</strong> : Vercel Inc., 340 S Lemon Ave, Suite
              4133, Walnut, CA 91789, États-Unis
            </li>
            <li>
              <strong>Back-end</strong> : Render Services, Inc., 525 Brannan St,
              Suite 300, San Francisco, CA 94107, États-Unis
            </li>
            <li>
              <strong>Base de données</strong> : Neon, Inc., 2128 Sand Hill
              Road, Menlo Park, CA 94025, États-Unis
            </li>
          </ul>
          <p>
            Les mots de passe sont chiffrés et les accès aux bases de données
            sont protégés.
          </p>

          <h2>6. Partage des données</h2>
          <p>
            Aucune donnée personnelle n'est vendue, louée ou cédée à des tiers.
          </p>
          <p>
            Les hébergeurs peuvent traiter certaines données techniques pour le
            fonctionnement du site, mais uniquement dans ce cadre.
          </p>

          <h2>7. Cookies et suivi</h2>
          <p>
            Le site utilise des cookies pour mesurer la fréquentation et adapter
            l'affichage selon vos préférences.
          </p>
          <p>
            Vous pouvez configurer votre navigateur pour refuser les cookies ou
            les supprimer à tout moment.
          </p>

          <h2>8. Droits des utilisateurs</h2>
          <p>
            Conformément au RGPD et à la loi "Informatique et Libertés", vous
            disposez des droits suivants :
          </p>
          <ul>
            <li>
              Droit d'accès, de rectification et de suppression de vos données
            </li>
            <li>Droit d'opposition et de limitation du traitement</li>
            <li>
              Droit à la portabilité : vous pouvez demander à recevoir vos
              données dans un format structuré et lisible, ou les transférer
              vers un autre service
            </li>
          </ul>
          <p>
            Pour exercer ces droits, contactez Petit Antoine à l'adresse
            suivante : antooine.petit@gmail.com.
          </p>

          <h2>9. Modifications de la politique</h2>
          <p>
            Cette Politique de confidentialité peut être mise à jour pour
            refléter l'évolution du site ou de la législation.
          </p>
          <p>
            La date de la dernière mise à jour est indiquée en haut de la page.
          </p>
        </section>
        <ProfileNavBar active="legals" />
      </main>

      {window.innerWidth < 1025 && <NavBar active="profile" />}

      {window.innerWidth >= 1025 && <Footer />}
    </>
  );
};

export default PrivacyPolicy;
