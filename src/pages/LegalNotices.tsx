import Footer from "../components/Footer";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ProfileNavBar from "../components/ProfileNavBar";

const LegalNotices = () => {
  document.title = "Mentions légales";

  return (
    <>
      {window.innerWidth >= 1025 && <Header />}

      <main className="legal-main">
        <h1>Mentions légales</h1>

        <section>
          <h2>Éditeur du site</h2>
          <p>Le site est édité par :</p>
          <address>
            Petit Antoine
            <br />
            165 rue du Félibrige, 83560 Saint-Julien, France
            <br />
            Adresse e-mail :{" "}
            <a href="mailto:antooine.petit@gmail.com">
              antooine.petit@gmail.com
            </a>
            <br />
            Téléphone : <a href="tel:+33770819539">07 70 81 95 39</a>
          </address>
          <p>Ce site est édité à titre personnel, sans activité commerciale.</p>

          <h2>Hébergement</h2>
          <p>
            Le présent site est hébergé par plusieurs prestataires afin
            d'assurer son bon fonctionnement technique :
          </p>

          <h3>Hébergement du site web (Front-end)</h3>
          <address>
            Vercel Inc.
            <br />
            340 S Lemon Ave, Suite 4133, Walnut, CA 91789, États-Unis
            <br />
            Site web :{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://vercel.com
            </a>
          </address>

          <h3>Hébergement du serveur d'application (Back-end)</h3>
          <address>
            Render Services, Inc.
            <br />
            525 Brannan St, Suite 300, San Francisco, CA 94107, États-Unis
            <br />
            Site web :{" "}
            <a
              href="https://render.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://render.com
            </a>
          </address>

          <h3>Hébergement de la base de données</h3>
          <address>
            Neon, Inc.
            <br />
            2128 Sand Hill Road, Menlo Park, CA 94025, États-Unis
            <br />
            Site web :{" "}
            <a
              href="https://neon.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://neon.tech
            </a>
          </address>

          <p>
            Les prestataires mentionnés ci-dessus sont situés aux États-Unis.
          </p>
          <p>
            Ils peuvent être amenés à traiter certaines données techniques et,
            le cas échéant, des données personnelles dans le cadre du
            fonctionnement et de la maintenance du site.
          </p>
          <p>
            Chacun d'eux dispose de politiques de confidentialité et de mesures
            de sécurité conformes aux exigences du Règlement Général sur la
            Protection des Données (RGPD).
          </p>

          <h2>Responsable de la publication</h2>
          <p>
            Le responsable de la publication est Petit Antoine, en qualité
            d'éditeur du site.
          </p>
          <p>
            Contact :{" "}
            <a href="mailto:antooine.petit@gmail.com">
              antooine.petit@gmail.com
            </a>
          </p>
        </section>
        <ProfileNavBar active="legals" />
      </main>

      {window.innerWidth < 1025 && <NavBar active="profile" />}

      {window.innerWidth >= 1025 && <Footer />}
    </>
  );
};

export default LegalNotices;
