import FillterTabSection from "@/components/features/home/FillterTabSection/FillterTabSection";
import HomeHero from "@/components/features/home/HomeHero/HomeHero";

export default async function Home() {
  return (
    <main className="w-full">
      <HomeHero />
      <FillterTabSection />
    </main>
  );
}
