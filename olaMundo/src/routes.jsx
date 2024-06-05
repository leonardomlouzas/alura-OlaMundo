// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import Index from "./pages/Index";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
