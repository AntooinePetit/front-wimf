import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/ScannerDiscovery.scss";

const ScannerDiscovery = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="scanner-discovery" className="container">
      <h2>Découvre notre outil scanner</h2>

      <img
        src="/scanner-demo.png"
        alt="Image d'illustration de l'outil scanner"
      />
      <article>
        <p>
          Il te reste des ingrédients au frigo mais tu ne sais pas quoi cuisiner
          ?
        </p>
        <p>
          Prends simplement une photo de l’intérieur avec notre scanner : il
          reconnaît automatiquement les aliments disponibles et te propose une
          sélection de recettes adaptées.
        </p>
        <p>
          Aucune ne te convient ? Pas de souci : notre intelligence artificielle
          peut t’en créer une sur mesure. Et si la recette te plaît, partage-la
          avec nous pour qu’elle ait une chance de rejoindre notre catalogue !
        </p>

        {isMobile && <p>Exclusivement disponible sur mobile !</p>}
      </article>

      <Link to={"/scanner"} className="button">
        Scanne ton frigo
      </Link>
    </section>
  );
};

export default ScannerDiscovery;
