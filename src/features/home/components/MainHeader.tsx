import MobilePixabayLogo from "@/components/logos/MobilePixabayLogo";
import WebPixabayLogo from "@/components/logos/WebPixabayLogo";
import { Button } from "@/components/ui/button";
import { FaBars, FaBell, FaUser } from "react-icons/fa";

export default function MainHeader() {
  return (
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
  );
}
