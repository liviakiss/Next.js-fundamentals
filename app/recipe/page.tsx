// Server Component: stays async, no "use client" needed, renders a Client Component as a child
import FavoriteButton from "./FavoriteButton";

async function getRecipe() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { name: "Spotted Dick" };
}

export default async function RecipePage() {
  const recipe = await getRecipe();
  return (
    <div>
      <h1>{recipe.name}</h1>
      <FavoriteButton />
    </div>
  );
}
