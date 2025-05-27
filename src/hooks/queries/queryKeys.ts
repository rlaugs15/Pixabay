import { ImagesParams } from "@/types/api/image";

export const imageKeys = {
  all: ["images"] as const,

  list: () => [...imageKeys.all, "list"] as const,
  listWithParams: (params: ImagesParams) => [...imageKeys.list(), { params }] as const,
};
