import "../styles/components/ScannerRecipesIngredients.scss";

interface Ingredient {
  id: number;
  name: string;
}

interface ScannerRecipesIngredientsProps {
  ingredients: Ingredient[]
}

const ScannerRecipesIngredients = ({ingredients}: ScannerRecipesIngredientsProps) => {
  return (
    <article id="scanner-recipes-ingredients">
      <h2>Recettes incluant (un ou plusieurs) :</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </article>
  )
}

export default ScannerRecipesIngredients