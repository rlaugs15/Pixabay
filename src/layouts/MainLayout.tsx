import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaBars, FaBell, FaUser } from "react-icons/fa";
import PixabayLogo from "@/components/PixabayLogo";

export default function MainLayout() {
  return (
    <div className="w-screen p-4">
      <header className="w-full flex justify-between gap-3 items-center h-10 bg-green-300 mb-7">
        <PixabayLogo className="aspect-square h-full" />
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
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
