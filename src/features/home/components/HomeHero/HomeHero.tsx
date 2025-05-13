import useImages from "@/hooks/queries/useImages";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import MainHeader from "../../../../components/MainHeader";
import { useSearchParams } from "react-router-dom";
import { useQueryParamsStore } from "@/store/queryStore";
import TypeButton from "./components/TypeButton";
import { CATEGORY_MAP, IMAGE_TYPE_MAP, TYPE_MAP, VIDEO_TYPE_MAP } from "@/lib/contents";
import CategoryButton from "./components/CategoryButton";
import SearchForm from "@/components/form/SearchForm";
import { btnTexts, categoryTexts } from "../../lib/contents";

export default function HomeHero() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setType, setImageType, setVideoType, setCategory } = useQueryParamsStore();

  const { data: imagesData } = useImages({ per_page: 15 });

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

  const setCategoryParamsClick = (value: string) => {
    const category = CATEGORY_MAP[value] ?? "";
    const newParams = new URLSearchParams(searchParams);
    newParams.set("category", category);
    setCategory(category);
    setSearchParams(newParams);
  };
  return (
    <div className="relative p-4 pb-12 lg:pb-28">
      <article className="absolute left-0 top-0 w-full h-full bg-black/80 -z-10">
        <Carousel
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
          className="w-full h-full overflow-hidden"
        >
          <CarouselContent>
            {imagesData?.hits.map((image) => (
              <CarouselItem key={image.id}>
                <img
                  src={image.largeImageURL}
                  alt={`slide-${image.id}`}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-auto object-cover object-center"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/30" />
      </article>
      <MainHeader />
      <div className="w-full flex flex-col gap-4 text-white items-center">
        <h1 className="hidden lg:block font-bold text-3xl">놀라운 무료 이미지</h1>
        <section className="w-full text-sm font-semibold flex justify-center flex-wrap">
          {btnTexts.map((text) => (
            <TypeButton
              key={`${text[0]}-${text[1]}`}
              text={text}
              setTypeParamsClick={setTypeParamsClick}
            />
          ))}
        </section>
        <section className="w-full max-w-205">
          <SearchForm />
        </section>
        <section className="flex gap-1 flex-wrap">
          {categoryTexts.map((category) => (
            <CategoryButton
              key={category[0]}
              category={category}
              setCategoryParamsClick={setCategoryParamsClick}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
