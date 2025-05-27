"use client";

import { CATEGORY_MAP, categoryTexts } from "@/lib/contents";
import { useQueryParamsStore } from "@/store/queryStore";
import { useRouter, useSearchParams } from "next/navigation";
import CategoryButton from "./CategoryButton";

export default function CategorySection() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const setCategory = useQueryParamsStore((state) => state.setCategory);
  const setCategoryParamsClick = (value: string) => {
    const category = CATEGORY_MAP[value] ?? "";
    const newParams = new URLSearchParams(searchParams);
    newParams.set("category", category);
    setCategory(category);
    router.push(`?${newParams}`);
  };
  return (
    <section className="flex gap-1 flex-wrap">
      {categoryTexts.map((category) => (
        <CategoryButton
          key={category[0]}
          category={category}
          setCategoryParamsClick={setCategoryParamsClick}
        />
      ))}
    </section>
  );
}
