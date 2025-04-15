import { ImagesParams } from "@/services/apis/types/imageApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import { imageKeys } from "./queryKeys";
import api from "@/services/apis/api";

export default function useInfiniteImages({
  query,
  image_type,
  orientation,
  category,
  page,
  per_page,
  order,
}: Partial<ImagesParams> = {}) {
  return useInfiniteQuery({
    queryKey: imageKeys.listWithParams({
      query,
      image_type,
      orientation,
      category,
      page,
      per_page,
      order,
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
