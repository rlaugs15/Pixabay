"use client";

import { Button } from "@/components/ui/button";
import { mediaTypes } from "@/lib/contents";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

interface TypeButtonProps {
  text: [string, "image" | "video"];
  setTypeParamsClick: (value: string) => void;
}

export default function TypeButton({ text, setTypeParamsClick }: TypeButtonProps) {
  const searchParams = useSearchParams();
  const typeValue = searchParams.get("type");
  const imageValue = searchParams.get("image_type");
  const vidoeValue = searchParams.get("video_type");
  const contentTypeValue = imageValue || vidoeValue;

  const findType = mediaTypes.find(([key, value]) => {
    if (typeValue === "video" && vidoeValue === "all") {
      return key === "비디오";
    }
    return value === contentTypeValue;
  }) ?? ["", ""];

  return (
    <Button
      onClick={() => setTypeParamsClick(text[0])}
      variant="ghost"
      className={cn("rounded-3xl", findType[0] === text[0] ? "bg-primary" : "")}
    >
      {text[0]}
    </Button>
  );
}
