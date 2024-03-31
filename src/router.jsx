import { Navigate, createBrowserRouter } from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout"
import GuestLayout from "./components/GuestLayout";
import Home from "./views/Home";
import About from "./views/About";
import Event from "./views/Event";
import Merchandise from "./views/Merchandise";
import Login from "./views/Login";
import Register from "./views/Register";
import ResetPassword from "./views/ResetPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Navigate to="/" />,
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/event",
                element: <Event />
            },
            {
                path: "/merchandise",
                element: <Merchandise />
            }
        ]
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
            }
        ],
    },
])

export default router;