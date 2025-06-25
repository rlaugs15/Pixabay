"use client";

import { CATEGORY_MAP } from "@/lib/contents";
import { useQueryParamsStore } from "@/store/queryStore";
import { Category } from "@/types/api/common";
import { useRouter, useSearchParams } from "next/navigation";
import CategoryButton from "./CategoryButton";

interface CategoryButtonClientProps {
  category: [string, Category];
}

export default function CategoryButtonClient({ category }: CategoryButtonClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const setCategory = useQueryParamsStore((state) => state.setCategory);

  const handleClick = () => {
    const value = category[0];
    const mapped = CATEGORY_MAP[value] ?? "";
    const newParams = new URLSearchParams(searchParams);
    newParams.set("category", mapped);
    setCategory(mapped);
    router.push(`?${newParams}`);
  };

  return <CategoryButton category={category} setCategoryParamsClick={handleClick} />;
}
