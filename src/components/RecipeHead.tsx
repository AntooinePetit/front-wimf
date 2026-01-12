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
      {image && (
        <img
          src={`${url}/uploads/recipes/${image}`}
          alt={`Photo de ${name.toLowerCase()}`}
        />
      )}
      <h1 style={image ? undefined : { marginTop: "100px" }}>{name}</h1>
    </section>
  );
};

export default RecipeHead;
