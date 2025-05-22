import SearchForm from "@/components/form/SearchForm";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useImages from "@/hooks/queries/useImages";
import Autoplay from "embla-carousel-autoplay";
import { Suspense, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MainHeader from "../../../../components/MainHeader";
import CategorySection from "./components/CategorySection/CategorySection";
import TypeSection from "./components/TpyeSection/TypeSection";

export default function HomeHero() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: imagesData } = useImages({ per_page: 3 });
  /* 이미지를 미리 브라우저 수준에서 다운로드 */
  useEffect(() => {
    if (imagesData?.hits[0].largeImageURL) {
      const preloadImage = new Image();
      preloadImage.src = imagesData?.hits[0].largeImageURL;
    }
  }, [imagesData]);
  return (
    <div className="relative p-4 pb-12 lg:pb-28">
      <article className="absolute left-0 top-0 w-full h-full bg-black/80 -z-10">
        <Suspense fallback={<div className="w-full h-full aspect-[16/9]" />}>
          <Carousel
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
            className="w-full h-full aspect-[16/9] overflow-hidden"
          >
            <CarouselContent>
              {imagesData?.hits.map((image) => (
                <CarouselItem key={image.id}>
                  <img
                    src={image.largeImageURL}
                    alt={`id-${image.id}`}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full aspect-[16/9] object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Suspense>

        <div className="absolute inset-0 bg-black/30" />
        {/* <figure className="w-full h-full aspect-[16/9] overflow-hidden">
          <Suspense fallback={<div className="w-full h-full aspect-[16/9]" />}>
            {imagesData?.hits.length && (
              <img
                src={imagesData.hits[0].largeImageURL}
                loading="eager"
                fetchPriority="high"
                alt={`slide-${imagesData.hits[0].id}`}
                className="w-full h-auto aspect-[16/9] object-cover"
              />
            )}
          </Suspense>
        </figure> */}
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
