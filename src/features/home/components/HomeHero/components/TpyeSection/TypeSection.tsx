import { btnTexts } from "@/features/home/lib/contents";
import { IMAGE_TYPE_MAP, TYPE_MAP, VIDEO_TYPE_MAP } from "@/lib/contents";
import { useQueryParamsStore } from "@/store/queryStore";
import { SetURLSearchParams } from "react-router-dom";
import TypeButton from "./TypeButton";

interface TypeSectionProps {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export default function TypeSection({ searchParams, setSearchParams }: TypeSectionProps) {
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

    setSearchParams(newParams);
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
