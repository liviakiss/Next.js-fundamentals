// Client Component: needs useState + onChange
"use client";

import { useState } from "react";

type Intolerances = {
  gluten: boolean;
  dairy: boolean;
  nuts: boolean;
  egg: boolean;
};

// Record<K, V>: guarantees every intolerance key has a keyword list, no gaps
const intoleranceKeywords: Record<keyof Intolerances, string[]> = {
  gluten: ["flour", "wheat", "bread", "pasta"],
  dairy: ["milk", "butter", "cheese", "cream"],
  nuts: ["almond", "peanut", "walnut", "cashew"],
  egg: ["egg"],
};

function checkIngredient(
  ingredient: string,
  intolerances: Intolerances,
): keyof Intolerances | null {
  const lowerIngredient = ingredient.toLowerCase();

  for (const type in intolerances) {
    // type assertion: for...in only gives plain `string`, we know it's really a valid key
    const key = type as keyof Intolerances;
    if (intolerances[key]) {
      const matches = intoleranceKeywords[key].some((word) =>
        lowerIngredient.includes(word),
      );
      if (matches) {
        return key;
      }
    }
  }

  return null;
}

export default function IntoleranceChecker({
  ingredients,
}: {
  ingredients: string[];
}) {
  const [intolerances, setIntolerances] = useState<Intolerances>({
    gluten: false,
    dairy: false,
    nuts: false,
    egg: false,
  });

  // keyof Intolerances here catches typos at compile time (vs plain string in Week 3 version)
  function handleCheckboxChange(name: keyof Intolerances) {
    setIntolerances({
      ...intolerances,
      [name]: !intolerances[name],
    });
  }

  return (
    <div>
      <div className="flex gap-4 flex-wrap mb-4">
        {(Object.keys(intolerances) as (keyof Intolerances)[]).map((key) => (
          <label key={key} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={intolerances[key]}
              onChange={() => handleCheckboxChange(key)}
            />
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
        ))}
      </div>

      <ul className="list-disc pl-5">
        {ingredients.map((item) => {
          const flagged = checkIngredient(item, intolerances);
          return (
            <li key={item} className={flagged ? "text-red-600" : ""}>
              {item} {flagged && `⚠️ contains ${flagged}`}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
