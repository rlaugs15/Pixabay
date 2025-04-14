import HomeHero from "@/features/home/components/HomeHero/HomeHero";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="w-screen">
      <HomeHero />
      <main className="w-full px-4">
        <Outlet />
      </main>
    </div>
  );
}
