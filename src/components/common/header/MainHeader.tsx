"use client";

import MobilePixabayLogo from "@/components/icons/MobilePixabayLogo";
import WebPixabayLogo from "@/components/icons/WebPixabayLogo";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface MainHeaderProps {
  children?: ReactNode;
}

export default function MainHeader({ children }: MainHeaderProps) {
  const router = useRouter();
  const onLogoClick = () => {
    router.push("/");
  };
  return (
    <header className="w-full flex justify-between gap-3 items-center h-10 my-2">
      <MobilePixabayLogo
        onClick={onLogoClick}
        className="aspect-square h-full block sm:hidden stroke-white hover:cursor-pointer"
      />
      <WebPixabayLogo
        onClick={onLogoClick}
        className="hidden sm:block sm:h-full sm:p-1 stroke-white hover:cursor-pointer"
      />
      {children}
    </header>
  );
}
