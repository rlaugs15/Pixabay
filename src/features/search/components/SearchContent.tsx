import ContentItem from "@/features/home/components/HomeHero/components/ContentItem";
import useInfiniteContents from "@/hooks/queries/useInfiniteContents";
import useInfiniteScrollObserver from "@/hooks/useInfiniteScrollObserver";
import { useQueryParamsStore } from "@/store/queryStore";
import { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface SearchContentProps {
  query: string;
  searchParams: URLSearchParams;
}

export default function SearchContent({ query, searchParams }: SearchContentProps) {
  const type = useQueryParamsStore((state) => state.type);
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteContents({ query });
  const observerRef = useInfiniteScrollObserver(fetchNextPage, isFetchingNextPage);

  const initFromSearchParams = useQueryParamsStore((state) => state.initFromSearchParams);

  useEffect(() => {
    initFromSearchParams(searchParams);
  }, [searchParams, initFromSearchParams]);
  return (
    <section className="w-full relative">
      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2, 1024: 3, 1280: 4 }}>
        <Masonry gutter="24px">
          {data?.pages.map((contents) =>
            contents.hits.map((content) => (
              <ContentItem
                key={content.id}
                id={content.id}
                isVideo={type === "video"}
                thumbnail={type === "video" ? content.videos.tiny.thumbnail : content.webformatURL}
                videoUrl={content.videos?.small?.url}
              />
            ))
          )}
        </Masonry>
      </ResponsiveMasonry>
      <div ref={observerRef} className="h-[1px]" />
    </section>
  );
}
