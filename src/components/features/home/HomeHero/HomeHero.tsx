import { getImages } from "@/app/actions/image";
import SearchForm from "@/components/common/form/SearchForm";
import { Suspense } from "react";
import CategorySection from "./components/CategorySection/CategorySection";
import CategorySectionFallback from "./components/CategorySection/CategorySectionFallback";
import HeroCarousel from "./components/HeroCarousel";
import TypeSection from "./components/TpyeSection/TypeSection";
import TypeSectionFallback from "./components/TpyeSection/TypeSectionFallback";

export default async function HomeHero() {
  const images = await getImages({ per_page: 3 }, { revalidate: 3600 });
  return (
    <section className="relative p-4 pb-12 lg:pb-28">
      <article className="absolute left-0 top-0 w-full h-full bg-black/80 -z-10">
        <HeroCarousel images={images} />
        <div className="absolute inset-0 bg-black/30" />
      </article>
      <div className="w-full flex flex-col gap-4 text-white items-center">
        <h1 className="hidden lg:block font-bold text-3xl">놀라운 무료 이미지</h1>
        <Suspense fallback={<TypeSectionFallback />}>
          <TypeSection />
        </Suspense>
        <SearchForm />
        <Suspense fallback={<CategorySectionFallback />}>
          <CategorySection />
        </Suspense>
      </div>
    </section>
  );
}
