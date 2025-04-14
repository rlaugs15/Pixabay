import { ImagesParams, ImagesResponse } from "@/services/apis/types/imageApi";
import { useInfiniteQuery, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { imageKeys } from "./queryKeys";
import api from "@/services/apis/api";

export default function useInfinityImages(
  { query, image_type, orientation, category, page, per_page }: Partial<ImagesParams> = {},
  queryOptions?: Partial<UseQueryOptions<ImagesResponse, Error>>
) {
  return useInfiniteQuery({
    queryKey: imageKeys.listWithParams({
      query,
      image_type,
      orientation,
      category,
      page,
      per_page,
    }),
    queryFn: ({ pageParam }) =>
      api.getImages({ query, image_type, orientation, category, ...pageParam, per_page }),
    initialPageParam: { page: 1 },
    getNextPageParam: (_, __, firstPageParam) => {
      const { page } = firstPageParam;
      return { page: page + 1 };
    },
  });
}
/* export default function useInfinityImages(
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
  } */
