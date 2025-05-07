import { useInfiniteQuery } from "@tanstack/react-query";
import api from "@/services/apis/api";
import { useQueryParamsStore } from "@/store/queryStore";

export default function useInfiniteContents({ query = "" }: { query?: string } = {}) {
  const { type, order, category, image_type, video_type, createPixabayQueryParams } =
    useQueryParamsStore();

  return useInfiniteQuery({
    queryKey: ["contents", type, order, category, image_type, video_type, query],
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
