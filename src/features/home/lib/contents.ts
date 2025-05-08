import { CATEGORY_MAP, IMAGE_TYPE_MAP, TYPE_MAP, VIDEO_TYPE_MAP } from "@/lib/contents";
import { ImageType, VideoType } from "@/services/apis/types/commonApi";

export const btnTexts = Object.entries(TYPE_MAP);
export const categoryTexts = Object.entries(CATEGORY_MAP);
export const MEDIA_TYPE_MAP: Record<string, ImageType | VideoType | undefined> = {
  ...IMAGE_TYPE_MAP,
  ...VIDEO_TYPE_MAP,
};
export const mediaTypes = Object.entries(MEDIA_TYPE_MAP);
