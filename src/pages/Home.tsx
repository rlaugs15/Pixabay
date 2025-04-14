import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full">
      {/* 필터 탭 섹션 */}
      <section className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 pt-7 pb-6 md:pt-10 md:pb-6">
        <div className="text-sm flex flex-col gap-2 md:text-center">
          <h1 className="lg:hidden font-bold text-2xl">놀라운 무료 이미지</h1>
          <h2 className="text-sm text-slate-950/70 lg:text-base lg:text-black lg:font-bold">
            우리의 관대한 커뮤니티를 통해 공유되는 0.1 백만개의 이미지와 비디오를 살펴보세요.
          </h2>
        </div>
        <div className="w-full sm:w-[254px] h-10 flex gap-1 p-1 rounded-[100px] bg-zinc-950/5">
          <Button variant="ghost" className="h-full flex-1 rounded-[100px]">
            편집자 선정
          </Button>
          <Button variant="ghost" className="h-full flex-1 rounded-[100px]">
            최신순
          </Button>
          <Button className="h-full flex-1 rounded-[100px]">인기</Button>
        </div>
      </section>
    </div>
  );
}
