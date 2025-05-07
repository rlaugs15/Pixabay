import MobilePixabayLogo from "@/components/logos/MobilePixabayLogo";
import WebPixabayLogo from "@/components/logos/WebPixabayLogo";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface MainHeaderProps {
  children?: ReactNode;
}

export default function MainHeader({ children }: MainHeaderProps) {
  const nav = useNavigate();
  const onLogoClick = () => {
    nav("/");
  };
  return (
    <header className="w-full flex justify-between gap-3 items-center h-10 mb-7">
      <MobilePixabayLogo
        onClick={onLogoClick}
        className="aspect-square h-full block sm:hidden stroke-white"
      />
      <WebPixabayLogo
        onClick={onLogoClick}
        className="hidden sm:block sm:h-full sm:p-1 stroke-white"
      />
      {children}
    </header>
  );
}
