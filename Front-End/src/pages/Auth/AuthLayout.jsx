import Navbar from "@/components/Navbar";

import { Outlet } from "react-router-dom";
import Fotter from "@/components/Fotter";

function AuthLayout() {
  return (
    <div className="w-full h-screen bg-gray-100  ">
      <Navbar />
      <main className="bg-gray-100   ">
        <Outlet />
      </main>
      <Fotter />
    </div>
  );
}

export default AuthLayout;
