import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { searchSchema } from "@/services/schemas/searchSchema";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { BellIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

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
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSearchSubmit)}
          className="w-full bg-amber-400 flex-1 flex rounded-2xl"
        >
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="w-full h-full">
                <FormControl>
                  <Input placeholder="shadcn" {...field} className="border-none" />
                </FormControl>
              </FormItem>
            )}
          />
          <Button variant="ghost" className="rounded-full">
            <BellIcon />
          </Button>
        </form>
      </Form>
      <Button className="bg-blue-300 rounded-full flex justify-center items-center">
        <BellIcon className="aspect-square h-full" />
      </Button>
    </>
  );
}
