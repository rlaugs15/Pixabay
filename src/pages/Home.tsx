import FillterTabSection from "@/features/home/components/FillterTabSection/FillterTabSection";
import HomeContent from "@/features/home/components/HomeContent";
import { useQueryParamsStore } from "@/store/queryStore";
import { useSearchParams } from "react-router-dom";

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
