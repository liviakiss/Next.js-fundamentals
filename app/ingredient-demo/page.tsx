// Calls our OWN API route — same shape as calling a real FastAPI backend later
async function getRandomIngredient() {
  const response = await fetch("http://localhost:3000/api/random-ingredient", {
    cache: "no-store",
  });
  const data = await response.json();
  return data.ingredient;
}

export default async function IngredientDemoPage() {
  const ingredient = await getRandomIngredient();
  return <p>Random ingredient: {ingredient}</p>;
}
