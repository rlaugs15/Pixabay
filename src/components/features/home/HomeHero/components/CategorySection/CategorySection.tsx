"use client";

import { categoryTexts } from "@/lib/contents";
import CategoryButtonClient from "./CategoryButtonClient";

export default function CategorySection() {
  return (
    <section className="flex gap-1 flex-wrap">
      {categoryTexts.map((category) => (
        <CategoryButtonClient key={category[0]} category={category} />
      ))}
    </section>
  );
}
