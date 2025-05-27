import { Category, ImageType, VideoType } from "@/types/api/common";

export const TYPE_MAP: Record<string, "image" | "video"> = {
  둘러보기: "image",
  사진: "image",
  일러스트: "image",
  백터: "image",
  비디오: "video",
  필름: "video",
  애니메이션: "video",
};

export const IMAGE_TYPE_MAP: Record<string, ImageType | undefined> = {
  사진: "photo",
  일러스트: "illustration",
  백터: "vector",
  둘러보기: "all",
};

export const VIDEO_TYPE_MAP: Record<string, VideoType | undefined> = {
  비디오: "all",
  필름: "film",
  애니메이션: "animation",
};

export const CATEGORY_MAP: Record<string, Category> = {
  배경: "backgrounds",
  패션: "fashion",
  자연: "nature",
  과학: "science",
  교육: "education",
  감정: "feelings",
  건강: "health",
  사람: "people",
  종교: "religion",
  장소: "places",
  동물: "animals",
};

export const btnTexts = Object.entries(TYPE_MAP);
export const categoryTexts = Object.entries(CATEGORY_MAP);
export const MEDIA_TYPE_MAP: Record<string, ImageType | VideoType | undefined> = {
  ...IMAGE_TYPE_MAP,
  ...VIDEO_TYPE_MAP,
};
export const mediaTypes = Object.entries(MEDIA_TYPE_MAP);
