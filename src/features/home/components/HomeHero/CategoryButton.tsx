import { Button } from "@/components/ui/button";
import { Category } from "@/services/apis/types/commonApi";
import { useSearchParams } from "react-router-dom";

interface categoryButtonProps {
  category: [string, Category];
  setCategoryParamsClick: (value: string) => void;
}

export default function CategoryButton({ category, setCategoryParamsClick }: categoryButtonProps) {
  const [searchParams] = useSearchParams();
  const categoryValue = searchParams.get("category");
  const currentCheck = category[1] === categoryValue;
  return (
    <Button
      onClick={() => setCategoryParamsClick(category[0])}
      variant={!currentCheck ? "ghost" : "outline"}
      size="sm"
      className="bg-black/30 backdrop-blur-md"
    >
      {category[0]}
    </Button>
  );
}
