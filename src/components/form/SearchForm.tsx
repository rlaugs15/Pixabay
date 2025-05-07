import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { searchSchema } from "@/services/schemas/searchSchema";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Input } from "../ui/input";

interface SearchForm {}

export default function SearchForm() {
  const nav = useNavigate();
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: "",
    },
  });
  const onSearchSubmit = ({ query }: z.infer<typeof searchSchema>) => {
    nav(`/search/${query}`);
  };
  return (
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
                <Input placeholder="검색어를 입력해주세요." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
