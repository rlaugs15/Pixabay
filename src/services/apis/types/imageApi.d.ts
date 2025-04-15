export interface ImagesParams {
  query?: string;
  image_type?: "all" | "photo" | "illustration" | "vector";
  orientation?: "all" | "horizontal" | "vertical";
  category?:
    | "backgrounds"
    | "fashion"
    | "nature"
    | "science"
    | "education"
    | "feelings"
    | "health"
    | "people"
    | "religion"
    | "places"
    | "animals"
    | "industry"
    | "computer"
    | "food"
    | "sports"
    | "transportation"
    | "travel"
    | "buildings"
    | "business"
    | "music";
  page?: number; //기본값 1
  per_page?: number; //기본값 20
  order?: boolean;
}

export interface Image {
  id: number; // 이미지 고유 ID
  pageURL: string; // 원본 이미지를 볼 수 있는 Pixabay 상세 페이지 URL
  type: string; // 이미지 타입: "photo", "illustration", "vector"
  tags: string; // 쉼표로 구분된 태그 목록 (예: "flower, yellow, nature")

  previewURL: string; // 작은 미리보기 이미지 URL (최대 150px)
  previewWidth: number; // 미리보기 이미지 너비
  previewHeight: number; // 미리보기 이미지 높이

  webformatURL: string; // 일반 웹용 중간 크기 이미지 URL (최대 640px)
  webformatWidth: number; // 중간 이미지 너비
  webformatHeight: number; // 중간 이미지 높이

  largeImageURL: string; // 큰 사이즈 이미지 URL (최대 1280px)

  fullHDURL?: string; // Full HD 해상도 이미지 URL (1920px), 선택적 필드
  imageURL?: string; // 원본 이미지 URL (일부 이미지에만 제공), 선택적 필드

  imageWidth: number; // 원본 이미지 너비 (px)
  imageHeight: number; // 원본 이미지 높이 (px)
  imageSize: number; // 원본 이미지 파일 크기 (bytes)

  views: number; // 조회 수
  downloads: number; // 다운로드 수
  likes: number; // 좋아요 수
  comments: number; // 댓글 수

  user_id: number; // 이미지를 업로드한 유저의 ID
  user: string; // 유저 이름
  userImageURL: string; // 유저의 프로필 이미지 URL (250 x 250 px)
}

export interface ImagesResponse {
  total: number; // 검색어에 해당하는 전체 이미지 수
  totalHits: number; // API를 통해 실제로 접근 가능한 이미지 수 (최대 500개)
  hits: Image[]; // 이미지 목록 배열
}
