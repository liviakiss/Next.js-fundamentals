// ISR demo: revalidate every 10s — stale served instantly, fresh fetched in background
async function getRandomMeal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php",
    { next: { revalidate: 10 } },
  );
  const data = await response.json();
  return data.meals[0];
}

export default async function IsrMealPage() {
  const meal = await getRandomMeal();
  return <h1>{meal.strMeal}</h1>;
}
