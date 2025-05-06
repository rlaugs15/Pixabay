import { Category, ImageType, VideoType } from "@/services/apis/types/commonApi";

export const TYPE_MAP: Record<string, "image" | "video"> = {
  비디오: "video",
  사진: "image",
  일러스트: "image",
  백터: "image",
  둘러보기: "image",
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

export const btnTexts = Object.keys(TYPE_MAP);
export const categoryTexts = Object.keys(CATEGORY_MAP);
