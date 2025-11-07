import { config } from "../config";

interface RecipeHeadProps {
  name: string;
  image: string;
}

const RecipeHead = ({ name, image }: RecipeHeadProps) => {
  const url = config.apiUrl;

  return (
    <section id="recipe-head">
      <img
        src={`${url}/uploads/recipes/${image}`}
        alt={`Photo de ${name.toLowerCase()}`}
      />
      <h1>{name}</h1>
    </section>
  );
};

export default RecipeHead;
