// API route returning real JSON data
export async function GET() {
  const ingredients = ["garlic", "flour", "milk", "egg", "peanut"];
  const random = ingredients[Math.floor(Math.random() * ingredients.length)];

  return Response.json({ ingredient: random });
}
