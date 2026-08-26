// Auto-wraps page.tsx in a Suspense boundary — shown while getRecipe() awaits
export default function Loading() {
  return <p>Loading recipe...</p>;
}
