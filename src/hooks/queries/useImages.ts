import api from "@/services/apis/api";
import { ImagesParams, ImagesResponse } from "@/services/apis/types/imageApi";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { useMemo } from "react";
import { imageKeys } from "./queryKeys";

export default function useImages(
  params: Partial<ImagesParams> = {},
  queryOptions?: Partial<UseQueryOptions<ImagesResponse, Error>>
) {
  /* queryKey에서 undefined 제거 */
  const cleanedParams = useMemo(() => {
    return Object.fromEntries(Object.entries(params).filter(([_, v]) => v !== undefined));
  }, [params]);
  return useQuery({
    queryKey: imageKeys.listWithParams(cleanedParams),
    queryFn: () => api.getImages(cleanedParams),
    ...queryOptions,
  });
}
