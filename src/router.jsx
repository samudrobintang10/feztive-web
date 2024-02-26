import { Navigate, createBrowserRouter } from "react-router-dom"
import DefaultLayout from "./components/DefaultLayout"
import Home from "./views/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])

export default router;