import HomeHero from "@/features/home/components/HomeHero/HomeHero";
import { imageKeys } from "@/hooks/queries/queryKeys";
import api from "@/services/apis/api";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: imageKeys.listWithParams({ per_page: 3 }),
      queryFn: () => api.getImages({ per_page: 3 }),
    });
  }, []);

  return (
    <div className="w-screen">
      {isHomePage && <HomeHero />}
      <main className="w-full px-4">
        <Outlet />
      </main>
    </div>
  );
}
