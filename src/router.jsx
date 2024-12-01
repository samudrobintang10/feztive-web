import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Home from "./views/Home";
import About from "./views/About";
import Event from "./views/Event";
import Merchandise from "./views/Merchandise";
import Login from "./views/Login";
import Register from "./views/Register";
import ResetPassword from "./views/ResetPassword";
import DashboardCatalog from "./views/DashboardCatalog";
import ProtectedRoute from "./components/ProtectedRoute";
import MerchandiseMenu from "./views/MerchandiseMenu";
import MerchandiseDetail from "./views/MerchandiseDetail";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";
import CompleteCheckout from "./views/CompleteCheckout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Navigate to="/" />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/merchandise",
        element: <Merchandise />,
      },
      {
        path: "/merchandise/menu",
        element: <MerchandiseMenu />,
      },
      {
        path: "/merchandise/menu/:merchandiseId",
        element: <MerchandiseDetail />,
      },
      {
        path: "/my-account/cart",
        element: <Cart />,
      },
      {
        path: "/my-account/checkout",
        element: <Checkout />,
      },
      ,
      {
        path: "/my-account/checkout/complete",
        element: <CompleteCheckout />,
      },
      {
        path: "/dashboard-catalog",
        element: (
          <ProtectedRoute>
            <DashboardCatalog />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/password/reset",
        element: <ResetPassword />,
      },
    ],
  },
]);

export default router;
