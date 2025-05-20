import SearchForm from "@/components/form/SearchForm";
import MainHeader from "@/components/MainHeader";
import SearchComboBox from "@/features/search/components/SearchComboBox";
import { lazy } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const SearchContent = lazy(() => import("@/features/search/components/SearchContent"));

export default function Search() {
  const { query } = useParams();
  const [searchParams] = useSearchParams();

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
      <SearchContent query={String(query)} searchParams={searchParams} />
    </div>
  );
}
