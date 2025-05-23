import { Category, OrderType, VideoType } from "./commonApi";

export interface VideosParams {
  q?: string;
  video_type?: VideoType;
  category?: Category;
  editors_choice?: boolean;
  order?: OrderType;
  page?: number;
  per_page?: number;
}

// 비디오 해상도별 정보 타입
export interface VideoVariant {
  url: string; // 비디오 파일 URL (ex: ?download=1 붙이면 다운로드됨)
  width: number; // 비디오 가로 너비
  height: number; // 비디오 세로 높이
  size: number; // 파일 용량 (bytes)
  thumbnail: string; // 썸네일 이미지 URL
}

export interface Video {
  id: number; // 비디오 고유 ID
  pageURL: string; // Pixabay 비디오 상세 페이지 URL
  type: "film" | "animation"; // 비디오 타입
  tags: string; // 쉼표로 구분된 키워드 태그
  duration: number; // 비디오 길이 (초 단위)
  videos: {
    large: VideoVariant;
    medium: VideoVariant;
    small: VideoVariant;
    tiny: VideoVariant;
  }; // 다양한 해상도의 비디오 URL 모음
  views: number; // 조회 수
  downloads: number; // 다운로드 수
  likes: number; // 좋아요 수
  comments: number; // 댓글 수
  user_id: number; // 작성자 ID
  user: string; // 작성자 닉네임
  userImageURL: string; // 작성자 프로필 이미지 URL (250x250)
}

export interface VideosResponse {
  total: number; // 전체 검색 결과 수
  totalHits: number; // 실제 접근 가능한 비디오 수 (최대 500개)
  hits: PixabayVideo[]; // 비디오 목록
}
