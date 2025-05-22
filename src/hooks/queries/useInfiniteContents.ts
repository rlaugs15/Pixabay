import api from "@/services/apis/api";
import { useQueryParamsStore } from "@/store/queryStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export default function useInfiniteContents({ query = "" }: { query?: string } = {}) {
  const { type, order, category, image_type, video_type, createPixabayQueryParams } =
    useQueryParamsStore();
  /* queryKey에서 undefined 제거 */
  const cleanedQueryKey = useMemo(() => {
    return [
      "contents",
      ...Object.entries({
        type,
        order,
        category,
        image_type,
        video_type,
        query,
      })
        .filter(([_, v]) => v !== undefined)
        .map(([_, v]) => v),
    ];
  }, [type, order, category, image_type, video_type, query]);
  return useInfiniteQuery({
    queryKey: cleanedQueryKey,
    queryFn: ({ pageParam = { page: 1 } }) => {
      const queryParams = createPixabayQueryParams(pageParam.page);
      return type === "video"
        ? api.getVideos({ ...queryParams, q: query })
        : api.getImages({ ...queryParams, q: query });
    },
    initialPageParam: { page: 1 },
    getNextPageParam: (_, __, lastPageParam) => {
      return { page: lastPageParam.page + 1 };
    },
  });
}
