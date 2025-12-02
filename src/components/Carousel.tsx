// Import Swiper React components
import { Link } from "react-router-dom";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { config } from "../config";
import "../styles/components/Carousel.scss";

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
  const url = config.apiUrl;

  if (recipes.length < 1) return <p>Aucune recette trouvée</p>;

  return (
    <div id="container-swiper">
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          401: { slidesPerView: 1.8 },
          768: { slidesPerView: 2.8 },
          1025: { slidesPerView: 3.8 },
        }}
        scrollbar={{
          draggable: true,
          dragClass: "swiper-scrollbar-drag",
          dragSize: 140,
        }}
      >
        {recipes.map((recipe) => {
          return (
            <SwiperSlide key={recipe.id_recipe}>
              <Link to={`/recipes/recipe/${recipe.id_recipe}`}>
                <article>
                  <img
                    src={`${url}/uploads/recipes/${recipe.image_recipe}`}
                    alt={`Photo de ${recipe.name_recipe.toLowerCase()}`}
                  />
                  <h3>{recipe.name_recipe}</h3>
                </article>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
