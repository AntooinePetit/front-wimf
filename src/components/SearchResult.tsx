import type { useState } from "react";
import "../styles/components/ShowRecipes.scss";

interface SearchResultProps {
  search: string;
}

const SearchResult = ({ search }: SearchResultProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [reqError, setReqError] = useState<string | null>(null);

  if (isLoading)
    return (
      <main className="loading-screen">
        <span className="loader" />
      </main>
    );

  if (reqError) {
    document.title = "Erreur";
    return (
      <main className="error-screen">
        <h1 className="error">{reqError}</h1>
      </main>
    );
  }
  return (
    <section id="result">
      <h2>Résultats pour "{search}"</h2>
    </section>
  );
};

export default SearchResult;
