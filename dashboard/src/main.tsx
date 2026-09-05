import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router/Router";
import "./index.css";
import ThemeContextProvider from "./context/Theme/ThemeContextProvider";
import AuthContextProvider from "./context/Auth/AuthContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
