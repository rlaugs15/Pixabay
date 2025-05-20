import { categoryTexts } from "@/features/home/lib/contents";
import { CATEGORY_MAP } from "@/lib/contents";
import { useQueryParamsStore } from "@/store/queryStore";
import { SetURLSearchParams } from "react-router-dom";
import CategoryButton from "./CategoryButton";

interface CategorySectionProps {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export default function CategorySection({ searchParams, setSearchParams }: CategorySectionProps) {
  const setCategory = useQueryParamsStore((state) => state.setCategory);
  const setCategoryParamsClick = (value: string) => {
    const category = CATEGORY_MAP[value] ?? "";
    const newParams = new URLSearchParams(searchParams);
    newParams.set("category", category);
    setCategory(category);
    setSearchParams(newParams);
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
