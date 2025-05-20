import useInfiniteContents from "@/hooks/queries/useInfiniteContents";
import useInfiniteScrollObserver from "@/hooks/useInfiniteScrollObserver";
import { lazy } from "react";

const HomeMasonrySection = lazy(() => import("./HomeMasonrySection"));

interface HomeContentProps {
  type: "image" | "video";
}

export default function HomeContent({ type }: HomeContentProps) {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteContents();

  const observerRef = useInfiniteScrollObserver(fetchNextPage, isFetchingNextPage);
  return (
    <section className="w-full relative">
      <HomeMasonrySection data={data} type={type} />
      <div ref={observerRef} className="h-[1px]" />
    </section>
  );
}
