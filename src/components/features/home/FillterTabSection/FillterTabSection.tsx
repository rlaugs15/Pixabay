"use client";

import { useQueryParamsStore } from "@/store/queryStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import FillterButton from "./FillterButton";

export default function FillterTabSection() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initFromSearchParams = useQueryParamsStore((state) => state.initFromSearchParams);
  const setOrder = useQueryParamsStore((state) => state.setOrder);

  const setOrderParmasClick = (value: "ec" | "latest" | "popular") => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", value);
    router.push(`?${newParams}`);
    setOrder(value);
  };

  useEffect(() => {
    initFromSearchParams(searchParams);
  }, [searchParams]);
  return (
    <section className="flex justify-end w-full px-4">
      <div className="w-full sm:w-[254px] h-10 flex gap-1 p-1 rounded-[100px] bg-zinc-950/5 my-2">
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
        <FillterButton
          fillterValue="popular"
          text="인기"
          setOrderParmasClick={setOrderParmasClick}
        />
      </div>
    </section>
  );
}
