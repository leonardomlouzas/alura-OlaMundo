import Index from "./pages/Index";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Default from "./components/Default";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Index />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
