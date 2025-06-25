import FillterTabFallback from "@/components/features/home/FillterTabSection/FillterTabFallback";
import FillterTabSection from "@/components/features/home/FillterTabSection/FillterTabSection";
import HomeContentWrapper from "@/components/features/home/HomeContent/HomeContentWrapper";
import HomeHero from "@/components/features/home/HomeHero/HomeHero";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="w-full">
      <HomeHero />
      <Suspense fallback={<FillterTabFallback />}>
        <FillterTabSection />
      </Suspense>
      <HomeContentWrapper />
    </main>
  );
}
