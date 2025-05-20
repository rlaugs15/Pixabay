import { useQueryParamsStore } from "@/store/queryStore";
import { useEffect } from "react";
import { SetURLSearchParams } from "react-router-dom";
import FillterButton from "./FillterButton";

interface FillterTabSectionProps {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export default function FillterTabSection({
  searchParams,
  setSearchParams,
}: FillterTabSectionProps) {
  const initFromSearchParams = useQueryParamsStore((state) => state.initFromSearchParams);
  const setOrder = useQueryParamsStore((state) => state.setOrder);
  const setOrderParmasClick = (value: "ec" | "latest" | "popular") => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", value);
    setSearchParams(newParams);
    setOrder(value);
  };

  useEffect(() => {
    initFromSearchParams(searchParams);
  }, [searchParams]);
  return (
    <div className="w-full sm:w-[254px] h-10 flex gap-1 p-1 rounded-[100px] bg-zinc-950/5">
      <FillterButton
        fillterValue="ec"
        text="편집자 선정"
        setOrderParmasClick={setOrderParmasClick}
      />
      <FillterButton
        fillterValue="latest"
        text="최신순"
        setOrderParmasClick={setOrderParmasClick}
      />
      <FillterButton fillterValue="popular" text="인기" setOrderParmasClick={setOrderParmasClick} />
    </div>
  );
}
