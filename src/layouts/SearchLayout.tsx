import PixabayLogo from "@/components/logos/MobilePixabayLogo";
import { Link, Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { searchSchema } from "@/services/schemas/searchSchema";
import { zodResolver } from "./../../node_modules/@hookform/resolvers/zod/src/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";

export default function SearchLayout() {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: "",
    },
  });

  const onSearchSubmit = ({ query }: z.infer<typeof searchSchema>) => {};
  return (
    <div className="w-screen p-4">
      <header className="w-full flex gap-3 items-center h-10 bg-green-300">
        <Link to={"/"} className="hover:cursor-pointer">
          <PixabayLogo className="aspect-square h-full" />
        </Link>
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
      </header>
      <Outlet />
    </div>
  );
}
