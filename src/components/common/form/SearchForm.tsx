"use client";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { searchSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SearchSubmitClient from "./SearchSubmitClient";

export default function SearchForm() {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: "",
    },
  });
  return (
    <section className="w-full max-w-205">
      <Form {...form}>
        <form
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
          <SearchSubmitClient getValue={() => form.getValues("query")} />
        </form>
      </Form>
    </section>
  );
}
