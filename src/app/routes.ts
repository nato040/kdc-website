import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Approach from "./pages/Approach";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Journal from "./pages/Journal";
import ComingSoon from "./pages/ComingSoon";

// ─────────────────────────────────────────────────────────────
// COMING SOON MODE
// While COMING_SOON_DEFAULT is true, the public sees the branded
// Coming Soon page at every URL. The full site stays in the codebase.
//
// TEAM PREVIEW: visit kennydonnacollective.com/?preview=kdc2026 once.
// That unlocks the full site for that browser (remembered via
// localStorage) while everyone else still sees Coming Soon.
//
// TO GO FULLY LIVE: set COMING_SOON_DEFAULT to false, commit, push.
// ─────────────────────────────────────────────────────────────
const COMING_SOON_DEFAULT = true;
const PREVIEW_KEY = "kdc2026";

function shouldShowComingSoon(): boolean {
  if (!COMING_SOON_DEFAULT) return false;
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("preview") === PREVIEW_KEY) {
      localStorage.setItem("kdc-preview", "1");
      return false;
    }
    if (localStorage.getItem("kdc-preview") === "1") return false;
  } catch {
    // localStorage/window unavailable — default to Coming Soon
  }
  return true;
}

const fullSiteRoutes = [
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
];

const comingSoonRoutes = [{ path: "*", Component: ComingSoon }];

export const router = createBrowserRouter(
  shouldShowComingSoon() ? comingSoonRoutes : fullSiteRoutes
);
