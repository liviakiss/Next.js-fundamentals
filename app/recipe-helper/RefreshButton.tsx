// Client Component: needs onClick + useRouter
// GOTCHA HISTORY: originally had "use  client" (double space) — silently
// NOT recognized as the directive, caused a confusing useRouter error
"use client";

import { useRouter } from "next/navigation";

export default function RefreshButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.refresh()}
      className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
    >
      Get another recipe
    </button>
  );
}
