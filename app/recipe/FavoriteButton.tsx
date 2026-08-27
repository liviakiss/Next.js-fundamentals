// Client Component: the ONLY interactive piece extracted out of the page
"use client";

import { useState } from "react";

export default function FavoriteButton() {
  const [saved, setSaved] = useState(false);

  return (
    <button onClick={() => setSaved(!saved)}>
      {saved ? "★ Saved" : "☆ Save to favorites"}
    </button>
  );
}
