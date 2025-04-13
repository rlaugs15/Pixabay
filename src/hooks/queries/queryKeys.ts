import { ImagesParams } from "@/services/apis/types/imageApi";
import { VideosParams } from "@/services/apis/types/videoApi";

export const imageKeys = {
  all: ["images"] as const,

  list: () => [...imageKeys.all, "list"] as const,
  listWithParams: (params: ImagesParams) => [...imageKeys.list(), { params }] as const,
};

export const videoKeys = {
  all: ["videos"] as const,

  list: () => [...videoKeys.all, "list"] as const,
  listWithParams: (params: VideosParams) => [...videoKeys.list(), { params }] as const,
};
