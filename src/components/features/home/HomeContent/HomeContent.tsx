"use client";

import useInfiniteContents from "@/hooks/queries/useInfiniteContents";
import useInfiniteScrollObserver from "@/hooks/useInfiniteScrollObserver";
import { useQueryParamsStore } from "@/store/queryStore";
import HomeMasonrySection from "./HomeMasonrySection";

export default function HomeContent() {
  const type = useQueryParamsStore((state) => state.type);
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteContents();

  const observerRef = useInfiniteScrollObserver(fetchNextPage, isFetchingNextPage);
  return (
    <section className="w-full relative">
      <HomeMasonrySection data={data} type={type} />
      <div ref={observerRef} className="h-[1px]" />
    </section>
  );
}
