// SSG demo: force-cache — same meal forever until rebuild
async function getRandomMeal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
    { cache: "force-cache" },
  );
  const data = await response.json();
  return data.meals[0];
}

export default async function StaticMealPage() {
  const meal = await getRandomMeal();
  return <h1>{meal.strMeal}</h1>;
}
