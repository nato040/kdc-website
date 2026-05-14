import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Approach from "./pages/Approach";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Journal from "./pages/Journal";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "journal", Component: Journal },
      { path: "approach", Component: Approach },
      { path: "case-studies", Component: CaseStudies },
      { path: "contact", Component: Contact },
    ],
  },
]);
