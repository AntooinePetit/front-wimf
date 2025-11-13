import "../styles/components/ShowRecipes.scss";

interface SearchResultProps {
  search: string;
}

const SearchResult = ({ search }: SearchResultProps) => {
  return (
    <section id="result">
      <h2>Résultats pour "{search}"</h2>
    </section>
  );
};

export default SearchResult;
