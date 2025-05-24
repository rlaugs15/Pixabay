"use client";

import useInfiniteContents from "@/hooks/queries/useInfiniteContents";
import useInfiniteScrollObserver from "@/hooks/useInfiniteScrollObserver";
import { useQueryParamsStore } from "@/store/queryStore";
import { Suspense } from "react";
import HomeMasonrySection from "./HomeMasonrySection";

export default function HomeContent() {
  const type = useQueryParamsStore((state) => state.type);
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteContents();

  const observerRef = useInfiniteScrollObserver(fetchNextPage, isFetchingNextPage);
  return (
    <section className="w-full relative">
      <Suspense fallback={<div className="animate-pulse w-full min-h-[500px]" />}>
        <HomeMasonrySection data={data} type={type} />
      </Suspense>
      <div ref={observerRef} className="h-[1px]" />
    </section>
  );
}
