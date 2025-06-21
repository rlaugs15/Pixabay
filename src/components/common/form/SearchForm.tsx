"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { searchSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function SearchForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: "",
    },
  });
  const onSearchSubmit = ({ query }: z.infer<typeof searchSchema>) => {
    router.push(`/search/${query}`);
  };
  return (
    <section className="w-full max-w-205">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSearchSubmit)}
          className="bg-white backdrop-blur-md rounded-3xl overflow-hidden flex items-center
    ring-1 ring-slate-400 focus-within:ring-2 focus-within:ring-slate-500 focus-within:ring-offset-2 transition"
        >
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="검색어를 입력해주세요." {...field} className="border-none" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="rounded-3xl m-0.5">검색</Button>
        </form>
      </Form>
    </section>
  );
}
