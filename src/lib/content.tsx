import {
  BrushIcon,
  CameraIcon,
  FilmIcon,
  PenIcon,
  PictureInPictureIcon,
  ScanHeartIcon,
  VideoIcon,
} from "lucide-react";
import { IMAGE_TYPE_MAP, VIDEO_TYPE_MAP } from "./contents";

type MediaOption = {
  value: string;
  label: string;
  icon: React.ReactNode;
  group: "image" | "video";
};

export const mediaOptions: MediaOption[] = [
  {
    value: "image_all",
    label: "모든 이미지",
    icon: <PictureInPictureIcon />,
    group: "image",
  },
  {
    value: "photo",
    label: "사진",
    icon: <CameraIcon />,
    group: "image",
  },
  {
    value: "illustration",
    label: "일러스트",
    icon: <BrushIcon />,
    group: "image",
  },
  {
    value: "vector",
    label: "백터",
    icon: <PenIcon />,
    group: "image",
  },
  {
    value: "video_all",
    label: "비디오",
    icon: <VideoIcon />,
    group: "video",
  },
  {
    value: "film",
    label: "필름",
    icon: <FilmIcon />,
    group: "video",
  },
  {
    value: "animation",
    label: "애니메이션",
    icon: <ScanHeartIcon />,
    group: "video",
  },
];

export const SEARCH_IMAGE_TYPE_MAP = Object.values(IMAGE_TYPE_MAP);
export const SEARCH_VIDEO_TYPE_MAP = Object.values(VIDEO_TYPE_MAP).filter(
  (vlaue) => vlaue !== "all"
);
