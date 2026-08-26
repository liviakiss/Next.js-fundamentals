// Server Component: async function + direct await, only legal here (not in hooks)
async function getRecipe() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { name: "Spotted Dick" };

  // To test error.tsx: temporarily replace the return above with:
  // throw new Error("Failed to fetch recipe");
}

export default async function RecipePage() {
  const recipe = await getRecipe();
  return <h1>{recipe.name}</h1>;
}
