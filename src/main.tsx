import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter, Route, Routes } from "react-router";

import { Greet } from "./pages/Greet.tsx";
import { Menu } from "./pages/Menu.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/greet" element={<Greet />} />
            <Route path="/menu" element={<Menu />} />
          </Route>
        </Routes>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>
);
