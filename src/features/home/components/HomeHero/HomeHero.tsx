import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { searchSchema } from "@/services/schemas/searchSchema";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import useImages from "@/hooks/queries/useImages";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import MainHeader from "../MainHeader";
import { useSearchParams } from "react-router-dom";
import { useQueryParamsStore } from "@/store/queryStore";
import TypeButton from "./TypeButton";

const btnTexts = ["둘러보기", "사진", "일러스트", "백터", "비디오", "음악", "음향 효과", "GIF"];
const recommWords = [
  "꽃",
  "봄",
  "배경",
  "벚꽃",
  "spring",
  "easter",
  "ai 생성",
  "사람",
  "색칠 공부",
  "자연",
  "고양이",
  "바다",
  "강아지",
  "하트",
];

export default function HomeHero() {
  const [searchParams, setSearchParams] = useSearchParams();
  const setType = useQueryParamsStore((state) => state.setType);

  const { data: imagesData } = useImages({ per_page: 15 });

  const setTypeParamsClick = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === "비디오") {
      newParams.set("type", "video");
      setSearchParams(newParams);
      setType("video");
    } else {
      newParams.set("type", "image");
      setSearchParams(newParams);
      setType("image");
    }
  };

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: "",
    },
  });

  const onSearchSubmit = (values: z.infer<typeof searchSchema>) => {
    console.log("values", values);
  };
  return (
    <div className="relative p-4 pb-12 lg:pb-28">
      <article className="absolute left-0 top-0 w-full h-full bg-black/80 -z-10">
        <Carousel
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
          className="w-full h-full overflow-hidden"
        >
          <CarouselContent>
            {imagesData?.hits.map((image) => (
              <CarouselItem key={image.id}>
                <img
                  src={image.largeImageURL}
                  alt={`slide-${image.id}`}
                  className="w-full h-auto object-cover object-center"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/30" />
      </article>
      <MainHeader />
      <div className="w-full flex flex-col gap-4 text-white items-center">
        <h1 className="hidden lg:block font-bold text-3xl">놀라운 무료 이미지</h1>
        <section className="w-full text-sm font-semibold flex justify-center">
          {btnTexts.map((text) => (
            <TypeButton key={text} text={text} setTypeParamsClick={setTypeParamsClick} />
          ))}
        </section>
        <section className="w-full max-w-205">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSearchSubmit)}
              className="bg-black/30 backdrop-blur-md rounded-3xl overflow-hidden"
            >
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </section>
        <section className="flex gap-1">
          {recommWords.map((word) => (
            <Button key={word} variant="ghost" size="sm" className="bg-black/30 backdrop-blur-md">
              {word}
            </Button>
          ))}
        </section>
      </div>
    </div>
  );
}
