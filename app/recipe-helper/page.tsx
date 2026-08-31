// Server Component: fetches data directly, no "use client" needed
// Renders two Client Components as children (RefreshButton, IntoleranceChecker)
import IntoleranceChecker from "./IntoleranceChecker";
import RefreshButton from "./RefreshButton";

type Meal = {
  idMeal: string;
  strMeal: string;
  [key: string]: string; // index signature: covers strIngredient1-20, strMeasure1-20, etc.
};

async function getRandomMeal(): Promise<Meal> {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
    { cache: "no-store" }, // opt out of caching — always want a NEW random recipe
  );
  const data = await response.json();
  return data.meals[0];
}

function getIngredientsList(meal: Meal): string[] {
  const ingredients: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(ingredient);
    }
  }
  return ingredients;
}

export default async function RecipeHelperPage() {
  const meal = await getRandomMeal();
  const ingredients = getIngredientsList(meal);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{meal.strMeal}</h1>
      <RefreshButton />
      <IntoleranceChecker ingredients={ingredients} />
    </div>
  );
}
