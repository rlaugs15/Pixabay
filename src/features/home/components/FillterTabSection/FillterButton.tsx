import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";

interface FillterTabsProps {
  fillterValue: "ec" | "latest" | "popular";
  text: string;
  setOrderParmasClick: (value: "ec" | "latest" | "popular") => void;
}

export default function FillterButton({
  fillterValue,
  text,
  setOrderParmasClick,
}: FillterTabsProps) {
  const [searchParams] = useSearchParams();
  return (
    <Button
      onClick={() => setOrderParmasClick(fillterValue)}
      variant={searchParams.get("order") === fillterValue ? "default" : "ghost"}
      className="h-full flex-1 rounded-[100px]"
    >
      {text}
    </Button>
  );
}
