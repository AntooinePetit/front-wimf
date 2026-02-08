import { config } from "../config";
import { useIsMobile } from "../hooks/useIsMobile";
import "../styles/components/RecipeHead.scss";

interface RecipeHeadProps {
  name: string;
  image?: string;
}

const RecipeHead = ({ name, image }: RecipeHeadProps) => {
  const url = config.apiUrl;

  const isMobile = useIsMobile();

  return (
    <section id="recipe-head" className={!isMobile ? "container" : ""}>
      <img
        src={image ? `${url}/uploads/recipes/${image}` : "/placeholder.webp"}
        alt={`Photo de ${name.toLowerCase()}`}
      />
      <h1>{name}</h1>
    </section>
  );
};

export default RecipeHead;
