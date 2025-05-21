import MainHeader from "@/components/MainHeader";
import SearchComboBox from "@/features/search/components/SearchComboBox";
import SearchContent from "@/features/search/components/SearchContent";
import { lazy, Suspense } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const SearchForm = lazy(() => import("@/components/form/SearchForm"));

export default function Search() {
  const { query } = useParams();
  const [searchParams] = useSearchParams();

  return (
    <div className="pt-4">
      <MainHeader>
        <section className="w-full max-w-205 min-h-9">
          <Suspense fallback={<div className="w-full min" />}>
            <SearchForm />
          </Suspense>
        </section>
        <div />
      </MainHeader>
      <section>
        <SearchComboBox />
      </section>
      <section className="w-full my-10">
        <h1 className="font-bold text-2xl lg:text-3xl">{query}</h1>
      </section>
      <SearchContent query={String(query)} searchParams={searchParams} />
    </div>
  );
}
