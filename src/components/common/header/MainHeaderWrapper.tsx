"use client";

import { usePathname } from "next/navigation";
import SearchForm from "../form/SearchForm";
import MainHeader from "./MainHeader";

export default function MainHeaderWrapper() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isSearch = pathname.startsWith("/search");

  if (isHome) {
    return <MainHeader />;
  }

  if (isSearch) {
    return (
      <MainHeader>
        <section className="w-full max-w-205 min-h-9">
          <SearchForm />
        </section>
        <div />
      </MainHeader>
    );
  }
}
