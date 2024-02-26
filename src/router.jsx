import { Navigate, createBrowserRouter } from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout"
import Home from "./views/Home";
import About from "./views/About";
import Event from "./views/Event";
import Merchandise from "./views/Merchandise";

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
    }
])

export default router;