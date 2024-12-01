import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./contexts/ContextProvider.jsx";
import Toast from "./elements/Toast.jsx";
import { ToastProvider } from "./contexts/ToastContext.jsx";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ContextProvider>
        <ToastProvider>
          <RouterProvider router={router} />
          <Toast />
        </ToastProvider>
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
