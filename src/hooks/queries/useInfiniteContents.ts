import { useInfiniteQuery } from "@tanstack/react-query";
import api from "@/services/apis/api";
import { useQueryParamsStore } from "@/store/queryStore";

export default function useInfiniteContents() {
  const { type, order } = useQueryParamsStore();

  return useInfiniteQuery({
    queryKey: ["contents", type, order],
    queryFn: ({ pageParam = { page: 1 } }) => {
      const commonParams = {
        per_page: 20,
        ...pageParam,
        order: order === "ec" ? undefined : order,
        editors_choice: order === "ec",
      };

      return type === "video" ? api.getVideos(commonParams) : api.getImages(commonParams);
    },
    initialPageParam: { page: 1 },
    getNextPageParam: (_, __, lastPageParam) => {
      return { page: lastPageParam.page + 1 };
    },
  });
}
