import SearchForm from "@/components/form/SearchForm";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useImages from "@/hooks/queries/useImages";
import Autoplay from "embla-carousel-autoplay";
import { useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MainHeader from "../../../../components/MainHeader";
import CategorySection from "./components/CategorySection/CategorySection";
import TypeSection from "./components/TpyeSection/TypeSection";

const prefetchImage = (url: string) => {
  fetch(url, { mode: "no-cors" }) // 이미지라 CORS 설정 필요 없음
    .then(() => {
      console.log("이미지 프리패치 성공", url);
    })
    .catch((err) => {
      console.log("프리패치 실패", err);
    });
};

export default function HomeHero() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: imagesData } = useImages({ per_page: 15 });

  useLayoutEffect(() => {
    const firstImageUrl = imagesData?.hits?.[0]?.largeImageURL;

    if (firstImageUrl) {
      prefetchImage(firstImageUrl); // 첫 이미지 미리 요청
    }
  }, [imagesData]);
  return (
    <div className="relative p-4 pb-12 lg:pb-28">
      <article className="absolute left-0 top-0 w-full h-full bg-black/80 -z-10">
        <Carousel
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
          className="w-full h-full aspect-[16/9] overflow-hidden"
        >
          <CarouselContent>
            {imagesData?.hits.map((image) => (
              <CarouselItem key={image.id}>
                <img
                  src={image.largeImageURL}
                  alt={`slide-${image.id}`}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-auto aspect-[16/9] object-cover"
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
        <TypeSection searchParams={searchParams} setSearchParams={setSearchParams} />
        <section className="w-full max-w-205">
          <SearchForm />
        </section>
        <CategorySection searchParams={searchParams} setSearchParams={setSearchParams} />
      </div>
    </div>
  );
}
