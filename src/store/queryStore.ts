import { create } from "zustand";
import { Category, ImageType, VideoType } from "../../types/api/common";

interface QueryParamsStore {
  type: "image" | "video";
  order: "ec" | "latest" | "popular";
  image_type: ImageType;
  video_type: VideoType;
  category: Category;
  setType: (value: "image" | "video") => void;
  setOrder: (value: "ec" | "latest" | "popular") => void;
  setImageType: (value: ImageType) => void;
  setVideoType: (value: VideoType) => void;
  setCategory: (value: Category) => void;
  initFromSearchParams: (params: URLSearchParams) => void;
  createPixabayQueryParams: (page: number) => Record<string, string | number | boolean | undefined>;
}

export const useQueryParamsStore = create<QueryParamsStore>((set, get) => ({
  type: "image",
  order: "ec",
  image_type: "all",
  video_type: "all",
  category: "backgrounds",
  setType: (value) => set({ type: value }),
  setOrder: (value) => set({ order: value }),
  setImageType: (value) => set({ image_type: value }),
  setVideoType: (value) => set({ video_type: value }),
  setCategory: (value) => set({ category: value }),
  initFromSearchParams: (params) =>
    set({
      type: (params.get("type") as "image" | "video") ?? "image",
      order: (params.get("order") as "ec" | "latest" | "popular") ?? "ec",
      category: (params.get("category") as Category) ?? "backgrounds",
    }),

  /** API 요청에 맞는 파라미터 객체 생성 */
  createPixabayQueryParams: (page: number) => {
    const { type, order, image_type, video_type, category } = get();
    return {
      per_page: 20,
      page,
      category,
      editors_choice: order === "ec" ? true : undefined,
      order: order === "ec" ? undefined : order,
      image_type: type === "image" ? image_type : undefined,
      video_type: type === "video" ? video_type : undefined,
    };
  },
}));
