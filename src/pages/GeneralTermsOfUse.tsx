import { useIsMobile } from "../hooks/useIsMobile";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProfileNavBar from "../components/ProfileNavBar";

const GeneralTermsOfUse = () => {
  document.title = "Conditions générales d'utilisation";

  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile && <Header />}

      <main className="legal-main">
        <h1>Conditions générales d'utilisation</h1>

        <section>
          <h2>1. Présentation du service</h2>
          <p>
            Le site propose une plateforme de recherche de recettes de cuisine,
            incluant un outil d'analyse du contenu du réfrigérateur permettant
            de trouver des recettes adaptées aux ingrédients disponibles.
          </p>
          <p>
            Le service est accessible depuis un navigateur web, sur ordinateur
            ou mobile.
          </p>

          <h2>2. Accès au service</h2>
          <p>
            <strong>Accès libre :</strong> Certaines fonctionnalités du site
            sont accessibles sans création de compte.
          </p>

          <p>
            <strong>Compte utilisateur :</strong> La création d'un compte est
            nécessaire pour bénéficier de fonctionnalités personnalisées telles
            que :
          </p>

          <ul>
            <li>Préférences d'affichage</li>
          </ul>

          <p>
            L'utilisateur s'engage à fournir des informations exactes lors de
            l'inscription et à maintenir ses identifiants confidentiels.
          </p>

          <h2>3. Responsabilité des utilisateurs</h2>
          <p>L'utilisateur s'engage à ne pas :</p>
          <ul>
            <li>Utiliser le service à des fins commerciales non autorisées</li>
          </ul>

          <p>
            Tout manquement peut entraîner la suppression du contenu publié et
            la résiliation du compte conformément à la section Résiliation.
          </p>

          <h2>4. Limitation de responsabilité</h2>
          <p>L'éditeur du site ne peut être tenu responsable :</p>
          <ul>
            <li>
              Des actions des utilisateurs, commentaires ou contenus publiés
            </li>
            <li>
              Des éventuels bugs, interruptions, erreurs ou indisponibilités du
              service
            </li>
            <li>
              De l'exactitude ou de la fiabilité des informations issues des
              recettes ou outils proposés
            </li>
          </ul>

          <p>
            Le service est fourni "en l'état" et à titre informatif uniquement.
            Les utilisateurs restent responsables de l'usage qu'ils font des
            recettes, ingrédients et ustensiles.
          </p>

          <h2>5. Propriété intellectuelle</h2>
          <p>
            Les recettes publiées sur ce site sont protégées par le droit
            d'auteur dans leur forme et présentation (texte, mise en page,
            photos).
          </p>

          <p>
            Les images utilisées peuvent être libres de droits ou appartenir à
            leurs auteurs respectifs.
          </p>

          <p>
            L'utilisateur est libre de reproduire les recettes pour un usage
            personnel, mais ne peut pas copier exactement la rédaction ni les
            images sans autorisation.
          </p>

          <h2>6. Protection des données personnelles</h2>
          <p>
            Les informations personnelles collectées via le site sont traitées
            conformément à la Politique de confidentialité.
          </p>
          <p>
            Pour plus de détails, consultez la Politique de confidentialité.
          </p>

          <h2>7. Modification des CGU</h2>
          <p>
            L'éditeur se réserve le droit de modifier les présentes CGU à tout
            moment.
          </p>
          <p>
            Les utilisateurs seront informés des modifications via une
            notification sur le site ou par e-mail si un compte est créé.
          </p>
          <p>
            L'utilisation continue du service vaut acceptation des CGU mises à
            jour.
          </p>

          <h2>8. Résiliation</h2>
          <p>
            L'éditeur se réserve le droit de mettre fin à l'accès au service ou
            de supprimer un compte en cas d'agissements contraires aux présentes
            CGU, notamment en cas de publication de contenus illicites ou
            offensants.
          </p>
          <p>
            L'utilisateur peut également demander la fermeture de son compte à
            tout moment en contactant l'éditeur via les informations disponibles
            dans les Mentions légales.
          </p>

          <h2>9. Responsabilité générale</h2>
          <p>Le site est destiné à un usage personnel et informatif.</p>
          <p>
            Les enfants doivent utiliser ce site sous la supervision d'un adulte
            responsable lors de la manipulation d'ustensiles ou de la
            réalisation de recettes.
          </p>
        </section>
        <ProfileNavBar active="legals" />
      </main>

      {isMobile && <NavBar active="profile" />}

      {!isMobile && <Footer />}
    </>
  );
};

export default GeneralTermsOfUse;
