import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-red-300 w-screen">
      <Outlet />
    </div>
  );
}
