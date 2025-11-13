import "../styles/components/StepsRecipe.scss";

interface StepsRecipeProps {
  steps: string[];
}

const StepsRecipe = ({ steps }: StepsRecipeProps) => {
  let i = 0;

  return (
    <section id="steps" className="container">
      <h2>Préparation</h2>
      <article>
        {steps.map((step) => {
          i++;
          return (
            <div key={i}>
              <span className="step-number">{i}</span>
              <p>{step}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default StepsRecipe;
