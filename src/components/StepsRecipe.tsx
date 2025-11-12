import "../styles/components/StepsRecipe.scss"

interface StepsRecipeProps {
  steps: string[];
}

const StepsRecipe = ({steps}: StepsRecipeProps) => {
  console.log(steps)

  return(
    <section id="steps">
      <h2>Préparation</h2>
    </section>
  )
}

export default StepsRecipe