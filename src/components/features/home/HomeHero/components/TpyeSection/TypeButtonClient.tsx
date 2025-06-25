"use client";

import { IMAGE_TYPE_MAP, TYPE_MAP, VIDEO_TYPE_MAP } from "@/lib/contents";
import { useQueryParamsStore } from "@/store/queryStore";
import { useRouter, useSearchParams } from "next/navigation";
import TypeButton from "./TypeButton";

interface TypeButtonClientProps {
  text: [string, "image" | "video"];
}

export default function TypeButtonClient({ text }: TypeButtonClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setType = useQueryParamsStore((state) => state.setType);
  const setImageType = useQueryParamsStore((state) => state.setImageType);
  const setVideoType = useQueryParamsStore((state) => state.setVideoType);

  const handleClick = () => {
    const type = TYPE_MAP[text[0]] ?? "image";
    const imageType = IMAGE_TYPE_MAP[text[0]];
    const videoType = VIDEO_TYPE_MAP[text[0]];

    const newParams = new URLSearchParams(searchParams);
    newParams.set("type", type);
    setType(type);

    if (type === "image" && imageType) {
      setImageType(imageType);
      newParams.set("image_type", imageType);
      newParams.delete("video_type");
    }

    if (type === "video" && videoType) {
      setVideoType(videoType);
      newParams.set("video_type", videoType);
      newParams.delete("image_type");
    }

    router.push(`?${newParams}`);
  };
  return <TypeButton text={text} setTypeParamsClick={handleClick} />;
}
