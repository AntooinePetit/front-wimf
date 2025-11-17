interface ScannerIngredientsListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ingredientList: any[];
}

const ScannerIngredientsList = ({
  ingredientList,
}: ScannerIngredientsListProps) => {
  // TODO: Style vignette tag + croix/moins pour retirer l'élément
  return (
    <div className="container">
      <p>
        La liste suivante peut contenir des erreurs, n'hésite pas à supprimer
        les éléments incorrects ou à ajouter les éléments manquants :
      </p>
      <ul>
        {ingredientList.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScannerIngredientsList;
