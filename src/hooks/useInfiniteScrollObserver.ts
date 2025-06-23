import { useEffect, useRef } from "react";

export default function useInfiniteScrollObserver(fetchNextPage: () => void, isFetching: boolean) {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = observerRef.current;
    if (!currentRef) return;

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

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef); // cleanup에서 안전하게 사용
    };
  }, [fetchNextPage, isFetching]);

  return observerRef;
}
