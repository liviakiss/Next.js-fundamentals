// SSR demo: no cache option — new meal on every request (test with npm run build + start)
async function getRandomMeal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
  );
  const data = await response.json();
  return data.meals[0];
}

export default async function RandomMealPage() {
  const meal = await getRandomMeal();
  return <h1>{meal.strMeal}</h1>;
}
