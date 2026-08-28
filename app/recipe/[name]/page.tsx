// Dynamic route: [name] folder handles ANY value in this URL position
// params is a Promise as of Next.js 15+ — must be typed and awaited
export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  return <h1>Recipe: {name}</h1>;
}
