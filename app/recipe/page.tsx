async function getRecipe() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("Failed to fetch recipe");
}

export default async function RecipePage() {
  const recipe = await getRecipe();
  return <h1>{recipe.name}</h1>;
}
