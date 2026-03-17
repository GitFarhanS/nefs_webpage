import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Sponsors from "./pages/Sponsors";
import Resources from "./pages/Resources";
import Conference from "./pages/Conference";
import Division from "./pages/Division";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="resources" element={<Resources />} />
        <Route path="conference" element={<Conference />} />
        <Route path="division/:slug" element={<Division />} />
      </Route>
    </Routes>
  );
}
