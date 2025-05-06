import { ImagesParams, ImagesResponse } from "@/services/apis/types/imageApi";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { imageKeys } from "./queryKeys";
import api from "@/services/apis/api";

export default function useImages(
  params: Partial<ImagesParams> = {},
  queryOptions?: Partial<UseQueryOptions<ImagesResponse, Error>>
) {
  return useQuery({
    queryKey: imageKeys.listWithParams(params),
    queryFn: () => api.getImages(params),
    ...queryOptions,
  });
}
