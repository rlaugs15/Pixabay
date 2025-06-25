"use client";

import dynamic from "next/dynamic";

const HomeContent = dynamic(() => import("./HomeContent"), {
  ssr: false,
  loading: () => <div className="animate-pulse w-full min-h-[500px]" />,
});

export default function HomeContentWrapper() {
  return <HomeContent />;
}
