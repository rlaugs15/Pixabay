import { VideosResponse } from "@/services/apis/types/videoApi";
import { InfiniteData } from "@tanstack/react-query";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ContentItem from "./HomeHero/components/ContentItem";

interface HomeMasonrySectionProps {
  type: string;
  data: InfiniteData<VideosResponse, unknown> | undefined;
}

export default function HomeMasonrySection({ type, data }: HomeMasonrySectionProps) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2, 1024: 3, 1280: 4 }}>
      <Masonry gutter="24px">
        {data?.pages.map((contents) =>
          contents.hits.map((content) => (
            <ContentItem
              key={content.id}
              id={content.id}
              isVideo={type === "video"}
              thumbnail={type === "video" ? content.videos.tiny.thumbnail : content.webformatURL}
              videoUrl={content.videos?.small?.url}
            />
          ))
        )}
      </Masonry>
    </ResponsiveMasonry>
  );
}
