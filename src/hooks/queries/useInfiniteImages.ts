import { ImagesParams } from "@/services/apis/types/imageApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import { imageKeys } from "./queryKeys";
import api from "@/services/apis/api";
import { useQueryParamsStore } from "@/store/queryStore";

export default function useInfiniteImages({
  query,
  image_type,
  orientation,
  category,
  page,
  per_page,
  editors_choice = true,
  order,
}: Partial<ImagesParams> = {}) {
  const type = useQueryParamsStore((state) => state.type);
  return useInfiniteQuery({
    queryKey: imageKeys.listWithParams({
      query,
      image_type,
      orientation,
      category,
      page,
      per_page,
      editors_choice,
      order,
    }),
    queryFn: ({ pageParam }) =>
      api.getImages({ query, image_type, orientation, category, ...pageParam, per_page, order }),
    initialPageParam: { page: 1 },
    getNextPageParam: (_, __, firstPageParam) => {
      const { page } = firstPageParam;
      return { page: page + 1 };
    },
    enabled: type === "image",
  });
}
