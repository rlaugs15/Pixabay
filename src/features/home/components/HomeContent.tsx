import useInfiniteContents from "@/hooks/queries/useInfiniteContents";
import useInfiniteScrollObserver from "@/hooks/useInfiniteScrollObserver";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ContentItem from "./HomeHero/components/ContentItem";

interface HomeContentProps {
  type: "image" | "video";
}

export default function HomeContent({ type }: HomeContentProps) {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteContents();

  const observerRef = useInfiniteScrollObserver(fetchNextPage, isFetchingNextPage);
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
