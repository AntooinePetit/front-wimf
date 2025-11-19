import { X } from "lucide-react";
import "../styles/components/ScannerIngredientList.scss"

interface ScannerIngredientsListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ingredientList: any[];
  isLoading: boolean;
  isError: boolean;
  isScanned: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIngredientList: (value: any[]) => void;
}

const ScannerIngredientsList = ({
  ingredientList,
  isLoading,
  isError,
  isScanned,
  setIngredientList,
}: ScannerIngredientsListProps) => {
  
  

  if (isLoading)
    return (
      <div id="ingredient-list" className="container">
        {isScanned && (
          <p>
            La liste suivante peut contenir des erreurs, n'hésite pas à
            supprimer les éléments incorrects ou à ajouter les éléments
            manquants :
          </p>
        )}
        <span className="loader" />
      </div>
    );

  if (isError)
    return (
      <div id="ingredient-list" className="container">
        {isScanned && (
          <p>
            La liste suivante peut contenir des erreurs, n'hésite pas à
            supprimer les éléments incorrects ou à ajouter les éléments
            manquants :
          </p>
        )}
        <p className="error">Une erreur est survenue dans la base de données</p>
      </div>
    );

  return (
    <div id="ingredient-list" className="container">
      {ingredientList.length === 0 && <p>Aucun ingrédient pour l'instant</p>}

      {ingredientList.length > 0 && (
        <>
          {isScanned && (
            <p>
              La liste suivante peut contenir des erreurs, n'hésite pas à
              supprimer les éléments incorrects ou à ajouter les éléments
              manquants :
            </p>
          )}

          <ul>
            {ingredientList.map((ingredient, index) => (
              <li
                key={ingredient.id}
                onClick={() => {
                  const updatedList = ingredientList.filter(
                    (_, i) => i !== index
                  );
                  setIngredientList(updatedList);
                }}
              >
                {ingredient.name} <X />
              </li>
            ))}
          </ul>
        </>
      )}

      

    </div>
  );
};

export default ScannerIngredientsList;
