import useInfiniteContents from "@/hooks/queries/useInfiniteContents";
import useInfiniteScrollObserver from "@/hooks/useInfiniteScrollObserver";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function HomeContent() {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteContents();

  const observerRef = useInfiniteScrollObserver(fetchNextPage, isFetchingNextPage);
  return (
    <section className="w-full relative">
      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2, 1024: 3, 1280: 4 }}>
        <Masonry gutter="24px">
          {data?.pages.map((images) =>
            images.hits.map((image) => (
              <img key={image.id} src={image.webformatURL} alt="사진" className="w-full" />
            ))
          )}
        </Masonry>
      </ResponsiveMasonry>
      <div ref={observerRef} className="h-[1px]" />
    </section>
  );
}
