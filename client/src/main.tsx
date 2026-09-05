import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/inter";
import ThemeContextProvider from "./context/Theme/ThemeContextProvider.tsx";
import AuthContextProvider from "./context/Auth/AuthContextProvider.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
