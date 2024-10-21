import Sidebar from "@/components/Auth/Sidebar";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="w-full h-screen bg-gray-100   lg:flex  ">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
