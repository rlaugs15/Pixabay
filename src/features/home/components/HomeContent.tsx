import useInfiniteContents from "@/hooks/queries/useInfiniteContents";
import useInfiniteScrollObserver from "@/hooks/useInfiniteScrollObserver";
import { lazy, Suspense } from "react";

const HomeMasonrySection = lazy(() => import("./HomeMasonrySection"));

interface HomeContentProps {
  type: "image" | "video";
}

export default function HomeContent({ type }: HomeContentProps) {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteContents();

  const observerRef = useInfiniteScrollObserver(fetchNextPage, isFetchingNextPage);
  return (
    <section className="w-full relative">
      <Suspense fallback={<div className="animate-pulse w-full min-h-[500px]" />}>
        <HomeMasonrySection data={data} type={type} />
        <div ref={observerRef} className="h-[1px]" />
      </Suspense>
    </section>
  );
}
