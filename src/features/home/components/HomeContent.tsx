import useInfiniteImages from "@/hooks/queries/useInfiniteImages";
import useInfiniteScrollObserver from "@/hooks/useInfiniteScrollObserver";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useSearchParams } from "react-router-dom";

export default function HomeContent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initOrder = new URLSearchParams(searchParams);
  if (!initOrder.has("order")) {
    initOrder.set("order", "ec");
    setSearchParams(initOrder);
  }

  const order = searchParams.get("order");
  const editors_choiceValue = order !== "latest" && order !== "popular";
  const orderValue = order && order !== "ec" ? (order as "latest" | "popular") : undefined;

  const {
    data: iamgesData,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteImages({
    per_page: 20,
    page: 3,
    editors_choice: !editors_choiceValue,
    order: orderValue,
  });
  const observerRef = useInfiniteScrollObserver(fetchNextPage, isFetchingNextPage);
  return (
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
    </section>
  );
}
