import { ImagesParams, ImagesResponse } from "@/services/apis/types/imageApi";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { imageKeys } from "./queryKeys";
import api from "@/services/apis/api";

export default function useImages(
  { query, image_type, orientation, category, page, per_page }: Partial<ImagesParams> = {},
  queryOptions?: Partial<UseQueryOptions<ImagesResponse, Error>>
) {
  return useQuery({
    queryKey: imageKeys.listWithParams({
      query,
      image_type,
      orientation,
      category,
      page,
      per_page,
    }),
    queryFn: () => api.getImages({ query, image_type, orientation, category, page, per_page }),
    ...queryOptions,
  });
}
