// API route: named export matching HTTP method, NOT export default
export async function GET() {
  return new Response("Hello");
}
