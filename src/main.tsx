import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Greet } from "./pages/Greet.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/greet" element={<Greet />} />
        </Routes>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>
);
