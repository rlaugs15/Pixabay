import useInfiniteContents from "@/hooks/queries/useInfiniteContents";
import useInfiniteScrollObserver from "@/hooks/useInfiniteScrollObserver";
import { useQueryParamsStore } from "@/store/queryStore";
import { lazy, Suspense, useEffect } from "react";

const SearchMasonrySection = lazy(() => import("./SearchMasonrySection"));

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
      <Suspense fallback={<div className="animate-pulse w-full min-h-[500px]" />}>
        <SearchMasonrySection type={type} data={data} />
        <div ref={observerRef} className="h-[1px]" />
      </Suspense>
    </section>
  );
}
