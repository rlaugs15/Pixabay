import { useEffect, useRef } from "react";

export default function useInfiniteScrollObserver(fetchNextPage: () => void, isFetching: boolean) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isFetching) {
          fetchNextPage();
        }
      },
      {
        rootMargin: "100px", // 바닥 도달 전에 미리 로딩
      }
    );

    observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [fetchNextPage, isFetching]);

  return observerRef;
}
