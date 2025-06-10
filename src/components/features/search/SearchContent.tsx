"use client";

import useInfiniteContents from "@/hooks/queries/useInfiniteContents";
import useInfiniteScrollObserver from "@/hooks/useInfiniteScrollObserver";
import { useQueryParamsStore } from "@/store/queryStore";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SearchMasonrySection = dynamic(() => import("./SearchMasonrySection"), {
  ssr: false,
  loading: () => <div className="animate-pulse w-full min-h-[500px]" />,
});

interface SearchContentProps {
  query: string;
}

export default function SearchContent({ query }: SearchContentProps) {
  const searchParams = useSearchParams();
  const type = useQueryParamsStore((state) => state.type);
  const initFromSearchParams = useQueryParamsStore((state) => state.initFromSearchParams);

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteContents({ query });
  const observerRef = useInfiniteScrollObserver(fetchNextPage, isFetchingNextPage);

  useEffect(() => {
    initFromSearchParams(searchParams);
  }, [searchParams, initFromSearchParams]);

  return (
    <section className="w-full relative">
      <SearchMasonrySection type={type} data={data} />
      <div ref={observerRef} className="h-[1px]" />
    </section>
  );
}
