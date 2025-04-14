import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaBars, FaBell, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { searchSchema } from "@/services/schemas/searchSchema";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import MobilePixabayLogo from "@/components/logos/MobilePixabayLogo";
import WebPixabayLogo from "@/components/logos/WebPixabayLogo";

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

export default function MainLayout() {
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
    <div className="w-screen">
      <div className="relative p-4 pb-12 lg:pb-28">
        <header className="w-full flex justify-between gap-3 items-center h-10 mb-7">
          <MobilePixabayLogo className="aspect-square h-full block sm:hidden" />
          <WebPixabayLogo className="hidden sm:block sm:h-full sm:p-1" />
          <section className="flex gap-1">
            <Button variant="ghost" className="rounded-full w-10 h-10">
              <FaBell />
            </Button>
            <Button variant="ghost" className="rounded-full w-10 h-10">
              <FaUser />
            </Button>
            <Button variant="ghost" className="rounded-full w-10 h-10">
              <FaBars className="aspect-square h-full" />
            </Button>
          </section>
        </header>
        <div className="w-full flex flex-col gap-4 text-white items-center">
          <h1 className="hidden lg:block font-bold text-3xl">놀라운 무료 이미지</h1>
          <section className="w-full text-sm font-semibold flex justify-center">
            {btnTexts.map((btn) => (
              <Button variant="ghost" className="rounded-3xl">
                {btn}
              </Button>
            ))}
          </section>
          <section className="w-full max-w-205">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSearchSubmit)}
                className="bg-black/30 backdrop-blur-md rounded-3xl"
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
              <Button variant="ghost" size="sm">
                {word}
              </Button>
            ))}
          </section>
        </div>
      </div>
      <main className="w-full p-4">
        <Outlet />
      </main>
    </div>
  );
}
