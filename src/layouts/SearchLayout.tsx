import PixabayLogo from "@/components/logos/MobilePixabayLogo";
import SearchForm from "@/features/search/components/SearchForm";
import { Link, Outlet } from "react-router-dom";

export default function SearchLayout() {
  return (
    <div className="w-screen p-4">
      <header className="w-full flex gap-3 items-center h-10 bg-green-300">
        <Link to={"/"} className="hover:cursor-pointer">
          <PixabayLogo className="aspect-square h-full" />
        </Link>
        <SearchForm />
      </header>
      <Outlet />
    </div>
  );
}
