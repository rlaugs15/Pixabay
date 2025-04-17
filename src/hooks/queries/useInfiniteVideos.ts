import { useInfiniteQuery } from "@tanstack/react-query";
import { videoKeys } from "./queryKeys";
import api from "@/services/apis/api";
import { VideosParams } from "@/services/apis/types/videoApi";
import { useQueryParamsStore } from "@/store/queryStore";

export default function useInfiniteVideos({
  query,
  video_type,
  category,
  page,
  per_page,
  editors_choice = true,
  order,
}: Partial<VideosParams> = {}) {
  const type = useQueryParamsStore((state) => state.type);
  return useInfiniteQuery({
    queryKey: videoKeys.listWithParams({
      query,
      video_type,
      category,
      page,
      per_page,
      editors_choice,
      order,
    }),
    queryFn: ({ pageParam }) =>
      api.getVideos({ query, video_type, category, ...pageParam, per_page, order }),
    initialPageParam: { page: 1 },
    getNextPageParam: (_, __, firstPageParam) => {
      const { page } = firstPageParam;
      return { page: page + 1 };
    },
    enabled: type === "video",
  });
}
