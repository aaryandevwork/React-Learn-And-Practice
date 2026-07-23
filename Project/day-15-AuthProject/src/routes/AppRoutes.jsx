import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoute";
import UserPage from "../pages/UserPage";
import ProductPage from "../pages/ProductPage";
import ProductDetail from "../pages/ProductDetail";

const AppRoutes = () => {
  let Rounter = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "/register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoutes />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "users",
              element: <UserPage />,
            },
            {
              path: "products",
              element: <ProductPage />,
            },
            {
              path : "productDetail/:id",
              element:<ProductDetail />
            }
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={Rounter} />;
};

export default AppRoutes;
