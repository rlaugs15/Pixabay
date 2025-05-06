import MobilePixabayLogo from "@/components/logos/MobilePixabayLogo";
import WebPixabayLogo from "@/components/logos/WebPixabayLogo";
import { ReactNode } from "react";

interface MainHeaderProps {
  children?: ReactNode;
}

export default function MainHeader({ children }: MainHeaderProps) {
  return (
    <header className="w-full flex justify-between gap-3 items-center h-10 mb-7">
      <MobilePixabayLogo className="aspect-square h-full block sm:hidden stroke-white" />
      <WebPixabayLogo className="hidden sm:block sm:h-full sm:p-1 stroke-white" />
      {children}
    </header>
  );
}
