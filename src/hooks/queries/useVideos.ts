import { VideosParams, VideosResponse } from "@/services/apis/types/videoApi";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { videoKeys } from "./queryKeys";
import api from "@/services/apis/api";

export default function useVideos(
  {
    query,
    video_type,
    category,
    editors_choice,
    order,
    page,
    per_page,
  }: Partial<VideosParams> = {},
  queryOptions?: Partial<UseQueryOptions<VideosResponse, Error>>
) {
  return useQuery({
    queryKey: videoKeys.list(),
    queryFn: () =>
      api.getVideos({ query, video_type, category, editors_choice, order, page, per_page }),
    ...queryOptions,
  });
}
