import { create } from "zustand";

interface QueryParamsStore {
  type: string; // "image" | "video"
  order: "ec" | "latest" | "popular";
  setType: (value: string) => void;
  setOrder: (value: "ec" | "latest" | "popular") => void;
  initFromSearchParams: (params: URLSearchParams) => void;
}

export const useQueryParamsStore = create<QueryParamsStore>((set) => ({
  type: "image",
  order: "ec",
  setType: (value) => set({ type: value }),
  setOrder: (value) => set({ order: value }),
  initFromSearchParams: (params) =>
    set({
      type: params.get("type") ?? "image",
      order: (params.get("order") as "ec" | "latest" | "popular") ?? "ec",
    }),
}));
