import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import LogIn from "./pages/Auth/LogIn";
import Signup from "./pages/Auth/Signup";
import AuthLayout from "./pages/Auth/AuthLayout";

import Dashbord from "./pages/Admin/Dashbord";
import Admin from "./pages/Admin/Admin";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <LogIn />,
      },
      {
        path: "login",
        element: <LogIn />,
      },

      {
        path: "register",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <Dashbord />,
      },
      {
        path: "dashboard",
        element: <Dashbord />,
      },
    ],
  },

  {
    path: "/*",
    element: <Error />,
  },
]);

function App() {
  return (
    <div className="w-full h-full bg-gray-100">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
