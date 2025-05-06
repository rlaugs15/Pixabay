import HomeHero from "@/features/home/components/HomeHero/HomeHero";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";
  return (
    <div className="w-screen">
      {isHomePage && <HomeHero />}
      <main className="w-full px-4">
        <Outlet />
      </main>
    </div>
  );
}
