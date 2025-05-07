import SearchForm from "@/components/form/SearchForm";
import ContentItem from "@/features/home/components/HomeHero/components/ContentItem";
import MainHeader from "@/components/MainHeader";
import SearchComboBox from "@/features/search/components/SearchComboBox";
import useInfiniteContents from "@/hooks/queries/useInfiniteContents";
import useInfiniteScrollObserver from "@/hooks/useInfiniteScrollObserver";
import { useQueryParamsStore } from "@/store/queryStore";
import { useEffect } from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useParams, useSearchParams } from "react-router-dom";

export default function Search() {
  const { query } = useParams();
  const [searchParams] = useSearchParams();
  const initFromSearchParams = useQueryParamsStore((state) => state.initFromSearchParams);
  const type = useQueryParamsStore((state) => state.type);

  useEffect(() => {
    initFromSearchParams(searchParams);
  }, [searchParams, initFromSearchParams]);

  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteContents({ query });
  const observerRef = useInfiniteScrollObserver(fetchNextPage, isFetchingNextPage);
  return (
    <div className="pt-4">
      <MainHeader>
        <section className="w-full max-w-205">
          <SearchForm />
        </section>
        <div />
      </MainHeader>
      <section>
        <SearchComboBox />
      </section>
      <section className="w-full my-10">
        <h1 className="font-bold text-2xl lg:text-3xl">{query}</h1>
      </section>
      <section>
        <section className="w-full relative">
          <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 768: 2, 1024: 3, 1280: 4 }}>
            <Masonry gutter="24px">
              {data?.pages.map((contents) =>
                contents.hits.map((content) => (
                  <ContentItem
                    key={content.id}
                    id={content.id}
                    isVideo={type === "video"}
                    thumbnail={
                      type === "video" ? content.videos.tiny.thumbnail : content.webformatURL
                    }
                    videoUrl={content.videos?.small?.url}
                  />
                ))
              )}
            </Masonry>
          </ResponsiveMasonry>
          <div ref={observerRef} className="h-[1px]" />
        </section>
      </section>
    </div>
  );
}
