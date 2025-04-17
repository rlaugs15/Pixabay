import FillterButton from "@/features/home/components/FillterButton";
import useInfiniteImages from "@/hooks/queries/useInfiniteImages";
import useInfiniteVideos from "@/hooks/queries/useInfiniteVideos";
import useInfiniteScrollObserver from "@/hooks/useInfiniteScrollObserver";
import { useQueryParamsStore } from "@/store/queryStore";
import { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { order, type, initFromSearchParams, setOrder } = useQueryParamsStore();

  useEffect(() => {
    initFromSearchParams(searchParams);
  }, [searchParams]);

  const editors_choiceValue = order !== "latest" && order !== "popular";
  const orderValue = order !== "ec" ? order : undefined;
  const isVideo = type === "video";

  /* 이미지 패칭 */
  const {
    data: iamgesData,
    fetchNextPage: imagesFetchNextPage,
    isFetchingNextPage: isImagesFetchingNextPage,
  } = useInfiniteImages({
    per_page: 20,
    page: 3,
    editors_choice: !editors_choiceValue,
    order: orderValue,
  });

  /* 비디오 패칭 */
  const {
    data: videosData,
    fetchNextPage: videosFetchNextPage,
    isFetchingNextPage: isVideosFetchingNextPage,
  } = useInfiniteVideos({
    per_page: 20,
    page: 3,
    editors_choice: !editors_choiceValue,
    order: orderValue,
  });

  const data = isVideo ? videosData : iamgesData;
  const fetchNextPage = isVideo ? videosFetchNextPage : imagesFetchNextPage;
  const isFetchingNextPage = isVideo ? isVideosFetchingNextPage : isImagesFetchingNextPage;

  const observerRef = useInfiniteScrollObserver(fetchNextPage, isFetchingNextPage);

  const setOrderParmasClick = (value: "ec" | "latest" | "popular") => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", value);
    setSearchParams(newParams);
    setOrder(value);
  };
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
          <FillterButton
            fillterValue="ec"
            text="편집자 선정"
            setOrderParmasClick={setOrderParmasClick}
          />
          <FillterButton
            fillterValue="latest"
            text="최신순"
            setOrderParmasClick={setOrderParmasClick}
          />
          <FillterButton
            fillterValue="popular"
            text="인기"
            setOrderParmasClick={setOrderParmasClick}
          />
        </div>
      </section>
      {/* 콘텐츠 */}
      <section className="w-full relative">
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2, 1024: 3, 1280: 4 }}>
          <Masonry gutter="24px">
            {data?.pages.map((contents) =>
              contents.hits.map((content) => (
                <img
                  key={content.id}
                  src={isVideo ? content.videos.tiny.thumbnail : content.webformatURL}
                  alt="썸네일"
                  className="w-full"
                />
              ))
            )}
          </Masonry>
        </ResponsiveMasonry>
        <div ref={observerRef} className="h-[1px]" />
      </section>
    </div>
  );
}
