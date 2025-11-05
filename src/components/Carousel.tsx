interface Nutrient {
  name: string;
  quantity: number;
  unit: string;
}

interface NutritionalValues {
  calories: Nutrient;
  protein: Nutrient;
  sodium: Nutrient;
  saturatedFat: Nutrient;
  totalFat: Nutrient;
  totalCarbohydrate: Nutrient;
  calcium: Nutrient;
  iron: Nutrient;
  cholesterol: Nutrient;
  potassium: Nutrient;
}

interface Instructions {
  steps: string[];
}

interface Recipe {
  cooking_time: number;
  id_recipe: number;
  image_recipe: string;
  name_recipe: string;
  preparation_time: number;
  resting_time: number;
  servings_recipe: number;
  total_time: number;
  instructions: Instructions;
  nutritional_values_recipe: NutritionalValues;
}

interface CarouselProps {
  recipes: Recipe[];
}

const Carousel = ({ recipes }: CarouselProps) => {
  return <p>Carousel</p>;
};

export default Carousel;
