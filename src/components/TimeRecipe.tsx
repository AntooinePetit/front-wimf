import { ChefHat, CookingPot, Hourglass } from "lucide-react";
import "../styles/components/TimeRecipe.scss";

interface timeRecipeProps {
  prep: number;
  cook: number;
  rest: number;
}

const TimeRecipe = ({ prep, cook, rest }: timeRecipeProps) => {
  const prepTime =
    prep > 60
      ? `${(prep - (prep % 60)) / 60} h ${prep % 60} min`
      : `${prep} min`;

  const cookTime =
    cook > 60
      ? `${(cook - (cook % 60)) / 60} h ${cook % 60} min`
      : `${cook} min`;

  const restTime =
    rest > 60
      ? `${(rest - (rest % 60)) / 60} h ${rest % 60} min`
      : `${rest} min`;
  return (
    <section id="time-recipe">
      <div>
        {prep != null && prep > 0 ? (
          <div>
            <div className="time-svg"><ChefHat size={30} /></div>
            <p>Préparation</p>
            <p>{prepTime}</p>
          </div>
        ) : (
          ""
        )}

        {cook != null && cook > 0 ? (
          <div>
            <div className="time-svg"><CookingPot size={30} /></div>
            <p>Cuisson</p>
            <p>{cookTime}</p>
          </div>
        ) : (
          ""
        )}

        {rest != null && rest > 0 ? (
          <div>
            <div className="time-svg"><Hourglass size={30} /></div>
            <p>Repos</p>
            <p>{restTime}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default TimeRecipe;
