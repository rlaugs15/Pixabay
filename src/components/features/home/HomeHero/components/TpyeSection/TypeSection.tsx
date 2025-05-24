"use client";

import { btnTexts, IMAGE_TYPE_MAP, TYPE_MAP, VIDEO_TYPE_MAP } from "@/lib/contents";
import { useQueryParamsStore } from "@/store/queryStore";
import { useRouter, useSearchParams } from "next/navigation";
import TypeButton from "./TypeButton";

export default function TypeSection() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const setType = useQueryParamsStore((state) => state.setType);
  const setImageType = useQueryParamsStore((state) => state.setImageType);
  const setVideoType = useQueryParamsStore((state) => state.setVideoType);

  const setTypeParamsClick = (value: string) => {
    const type = TYPE_MAP[value] ?? "image";
    const imageType = IMAGE_TYPE_MAP[value];
    const videoType = VIDEO_TYPE_MAP[value];

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
  return (
    <section className="w-full text-sm font-semibold flex justify-center flex-wrap">
      {btnTexts.map((text) => (
        <TypeButton
          key={`${text[0]}-${text[1]}`}
          text={text}
          setTypeParamsClick={setTypeParamsClick}
        />
      ))}
    </section>
  );
}
