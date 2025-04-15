import { Button } from "@/components/ui/button";
import useInfiniteImages from "@/hooks/queries/useInfiniteImages";
import useInfiniteScrollObserver from "@/hooks/useInfiniteScrollObserver";
import { useLayoutEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    data: iamgesData,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteImages({ per_page: 20, page: 3 });
  const observerRef = useInfiniteScrollObserver(fetchNextPage, isFetchingNextPage);

  useLayoutEffect(() => {
    searchParams.set("order", "ec");
    setSearchParams(searchParams);
  }, []);
  return (
    <div className="w-full">
      {/* 필터 탭 섹션 */}
      <section className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 pt-7 pb-6 md:pt-10 md:pb-6">
        <div className="text-sm flex flex-col gap-2 md:text-center">
          <h1 className="lg:hidden font-bold text-2xl">놀라운 무료 이미지</h1>
          <h2 className="text-sm text-slate-950/70 lg:text-base lg:text-black lg:font-bold">
            우리의 관대한 커뮤니티를 통해 공유되는 0.1 백만개의 이미지와 비디오를 살펴보세요.
          </h2>
        </div>
        <div className="w-full sm:w-[254px] h-10 flex gap-1 p-1 rounded-[100px] bg-zinc-950/5">
        </div>
      </section>
      {/* 이미지 콘텐츠 */}
      <section className="w-full relative">
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2, 1024: 3, 1280: 4 }}>
          <Masonry gutter="24px">
            {iamgesData?.pages.map((images) =>
              images.hits.map((image) => (
                <img key={image.id} src={image.webformatURL} alt="사진" className="w-full" />
              ))
            )}
          </Masonry>
        </ResponsiveMasonry>
        <div ref={observerRef} className="h-[1px]" />
        {/* <div
          className="absolute bottom-0 w-full h-[650px] bg-white pointer-events-none"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0px, transparent 30px, black 130px)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0px, transparent 30px, black 130px)",
          }}
        /> */}
      </section>
    </div>
  );
}
