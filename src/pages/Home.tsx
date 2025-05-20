import FillterTabSection from "@/features/home/components/FillterTabSection/FillterTabSection";
import { useQueryParamsStore } from "@/store/queryStore";
import { lazy } from "react";
import { useSearchParams } from "react-router-dom";

const HomeContent = lazy(() => import("@/features/home/components/HomeContent"));

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = useQueryParamsStore((state) => state.type);

  return (
    <div className="w-full">
      <FillterTabSection searchParams={searchParams} setSearchParams={setSearchParams} />
      <HomeContent type={type} />
    </div>
  );
}
